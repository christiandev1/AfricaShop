// Libraries
import React, { Component } from 'react';
import axios from 'axios';
// import { withRouter } from 'react-router-dom';

export const AppContext = React.createContext();

export class AppProvider extends Component {
  // Set initial state
  state = {
    signedInStatus: false,
    user: {},
    errorMessage: '',
  };

  // JWT Sign Up
  jwtSignUp = async (userData) => {
    try {
      const response = await axios.post('/user/register', userData);

      if (response.status === 200) {
        await this.jwtSignIn(userData);
        localStorage.setItem('signUpModalOpen', true);
        this.setState({ errorMessage: '' });
      }
    } catch (error) {
      if (error.response && error.response.data) {
        this.setState({ errorMessage: error.response.data.message });
      }
    }
  };

  // JWT Sign In
  jwtSignIn = async (userData) => {
    try {
      const response = await axios.post('/user/login', userData);
      // we check whether need redirect here because we are moving central server
      // to tasttlig backend
      if (response.data.success === false && response.data.redirect === true) {
        localStorage.setItem('change-password', 'true');
        window.location.href =
          '/forgot-password/' + response.data.reset_token + '/' + response.data.email;
      } else {
        if (response.data.user.id) {
          const access_token = response.data.tokens.access_token;
          const refresh_token = response.data.tokens.refresh_token;

          localStorage.setItem('access_token', access_token);
          localStorage.setItem('refresh_token', refresh_token);

          this.setState({
            signedInStatus: true,
            user: { ...response.data.user },
          });

          // Set the status to localStorage so that pages can be used before render
          localStorage.setItem('signedInStatus', 'true');

          this.setState({ errorMessage: '' });
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        this.setState({ errorMessage: error.response.data.message });
      } else {
        this.setState({ errorMessage: error.message });
      }
    }
  };

  // JWT Update Profile
  jwtUpdateProfile = async (userData) => {
    try {
      const response = await axios.put(`/user/${this.state.user.id}`, userData);

      if (response.status === 200) {
        await this.jwtSignIn(userData);

        this.setState({ errorMessage: '' });
      }
    } catch (error) {
      this.setState({ errorMessage: error.response.data.message });
    }
  };

  // JWT Sign Out
  jwtSignOut = async () => {
    try {
      const acc_token = localStorage.getItem('access_token');
      const headers = {
        Authorization: `Bearer ${acc_token}`,
      };

      const response = await axios({
        method: 'DELETE',
        url: '/user/logout',
        headers,
      });

      if (response.data.success) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        this.setState({ signedInStatus: false });

        // Remove signedInStatus from localStorage
        localStorage.removeItem('signedInStatus');
        window.location.href = '/';
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.error === 'Access token expired'
      ) {
        try {
          await this.refreshToken();

          const acc_token = localStorage.getItem('access_token');
          const refresh_token = localStorage.getItem('refresh_token');

          const headers = {
            Authorization: `Bearer ${acc_token}`,
            'Refresh-Token': refresh_token,
          };

          const response = await axios({
            method: 'DELETE',
            url: '/user/logout',
            headers,
          });

          if (response.data.status === 'success') {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');

            this.setState({ signedInStatus: false });
          }
        } catch (error) {
          console.log('Logout Refresh Token', error.response.data.error);
        }
      } else {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        this.setState({ signedInStatus: false });

        // Remove signedInStatus from localStorage
        localStorage.removeItem('signedInStatus');
        window.location.href = '/';
      }
    }
  };

  // Get the current user from the database based on the JWT
  getCurrentUserData = async () => {
    try {
      const acc_token = await localStorage.getItem('access_token');
      const ref_token = await localStorage.getItem('refresh_token');

      if (acc_token != null && ref_token != null) {
        const options = {
          headers: {
            Authorization: `Bearer ${acc_token}`,
            'Refresh-Token': ref_token,
          },
        };

        const response = await axios.get('/user', options);
        response.data.user.id && this.setState({ signedInStatus: true, user: response.data.user });

        // Set the status to localStorage so that pages can be used before render
        localStorage.setItem('signedInStatus', 'true');
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.error === 'Access token expired'
      ) {
        // If the token is invalid to get the current user data, then refresh the token and try again
        await this.refreshToken();

        const acc_token = await localStorage.getItem('access_token');
        const ref_token = await localStorage.getItem('refresh_token');

        const options = {
          headers: {
            Authorization: acc_token,
            'Refresh-Token': ref_token,
          },
        };

        const response = await axios.get('/user', options);

        response.data.id && this.setState({ signedInStatus: true, user: response.data });
      } else {
        await this.jwtSignOut();
      }
    }
  };

  // Refresh the token if it is expired, and replace the old ones in localStorage with the new ones
  refreshToken = async () => {
    try {
      const acc_token = await localStorage.getItem('access_token');
      const ref_token = await localStorage.getItem('refresh_token');

      const headers = {
        Authorization: `Bearer ${acc_token}`,
        'Refresh-Token': ref_token,
      };

      const response = await axios({
        method: 'POST',
        url: '/user/token',
        headers,
      });

      const access_token = response.headers['access-token'];
      const refresh_token = response.headers['refresh-token'];

      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
    } catch (error) {
      if (error.response.data.error === 'Invalid access token') {
        localStorage.removeItem('signedInStatus');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
      }
    }
  };

  // Mount current user data
  UNSAFE_componentWillMount = async () => {
    await this.getCurrentUserData();
    console.log('/manage-user-subscription ***************', this.state.user.id);
    localStorage.setItem('user_id', this.state.user.id);
    if (this.state.user.id === undefined) {
      return;
    }
    try {
      const response = await axios.post('/auto-application-approval', {
        userId: this.state.user.id,
      });
      const subResponse = await axios.post('/auto-end-subscription', {
        userId: this.state.user.id,
      });
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(error.response);
      }
    }
    // try {
    //   const response = await axios.post('/manage-user-subscription', {
    //     userId: this.state.user.id,
    //   });
    //   console.log('subs', response);
    // } catch (error) {
    //   if (error.response && error.response.data) {
    //     console.log(error.response);
    //   }
    // }
  };

  render = () => {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          jwtSignUp: this.jwtSignUp,
          jwtSignIn: this.jwtSignIn,
          jwtUpdateProfile: this.jwtUpdateProfile,
          jwtSignOut: this.jwtSignOut,
          getCurrentUserData: this.getCurrentUserData,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  };
}

export const AppConsumer = AppContext.Consumer;
