// Libraries
import React, {Component} from 'react';
// import {withRouter} from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';
import axios from 'axios';
import {toast} from 'react-toastify';
import {AppContext} from '../ContextProvider/AppProvider';
import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

// Styling
import 'react-toastify/dist/ReactToastify.css';

// toast.configure();

class AuthModalProvider extends Component {
  // Set initial state
  guestEmail = localStorage.getItem("guest-email")
  state = {
    signUpOpened: false,
    signUpFirstName: '',
    signUpLastName: '',
    signUpEmail: this.guestEmail ? this.guestEmail : '',
    signUpPassword: '',
    signUpPasswordType: 'password',
    signUpPhoneNumber: '',
    logInOpened: false,
    logInEmail: '',
    logInPassword: '',
    logInPasswordType: 'password',
    forgotPasswordOpened: false,
    forgotPasswordEmail: '',
    searchOpened: false,
    beOurGuestOpened: false,
    beOurGuestEmail: '',
    logInUrl: '',
    submitAuthDisabled: false,
    isBusiness: 'GUEST',
  };

  // To use the JWT credentials
  static contextType = AppContext;

  // Scroll to top of the home page helper function
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  // Open modal type helper function
  openModal = (modalType) => () => {
    if (modalType === 'sign-up') {
      this.setState({
        signUpOpened: true,
        logInOpened: false,
        forgotPasswordOpened: false,
        searchOpened: false,
        beOurGuestOpened: false,
      });
    } else if (modalType === 'log-in') {
      this.setState({
        signUpOpened: false,
        logInOpened: true,
        forgotPasswordOpened: false,
        searchOpened: false,
        beOurGuestOpened: false,
      });
    } else if (modalType === 'forgot-password') {
      this.setState({
        signUpOpened: false,
        logInOpened: false,
        forgotPasswordOpened: true,
        searchOpened: false,
        beOurGuestOpened: false,
      });
    } else if (modalType === 'search') {
      this.setState({
        signUpOpened: false,
        logInOpened: false,
        forgotPasswordOpened: false,
        searchOpened: true,
        beOurGuestOpened: false,
      });
    } else if (modalType === 'be-our-guest') {
      this.setState({
        signUpOpened: false,
        logInOpened: false,
        forgotPasswordOpened: false,
        searchOpened: false,
        beOurGuestOpened: true,
      });
    }
  };

  // Close modal type helper function
  closeModal = (modalType) => () => {
    if (modalType === 'sign-up') {
      this.setState({signUpOpened: false});
    } else if (modalType === 'log-in') {
      this.setState({logInOpened: false});
    } else if (modalType === 'forgot-password') {
      this.setState({forgotPasswordOpened: false});
    } else if (modalType === 'search') {
      this.setState({searchOpened: false});
    } else if (modalType === 'be-our-guest') {
      this.setState({beOurGuestOpened: false});
    }
  };

  // User input change helper function
  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let signUpPasswordLessChar = '';
    let signUpPasswordMinChar = '';

    /* When the user is setting up Sign Up password, display error 
    message when there are less than 8 characters */
    if (nam === 'signUpPassword' && val.length < 8) {
      signUpPasswordLessChar = <span className="fas fa-times"> At least 8 characters.</span>;
    }

    /* When the user is setting up Sign Up password, display approval 
    message when there are at least 8 characters */
    if (nam === 'signUpPassword' && val.length >= 8) {
      signUpPasswordMinChar = <span className="fas fa-check">At least 8 characters.</span>;
    }

    // Set at least 8 characters validation state
    if (signUpPasswordLessChar || signUpPasswordMinChar) {
      this.setState({
        signUpPasswordLessChar,
        signUpPasswordMinChar,
      });
    }

    if (nam === 'isBusiness') {
      this.state.isBusiness === "GUEST" ? this.setState({isBusiness: "BUSINESS",}) : this.setState({isBusiness: "GUEST",});
    } else {
      this.setState({
        [nam]: val,
      });
    }
  };

  // Show/Hide Sign Up password helper function
  handleClickSignUp = () =>
    this.setState(({signUpPasswordType: type}) => ({
      signUpPasswordType: type === 'password' ? 'text' : 'password',
    }));

  // Show/Hide Login password helper function
  handleClickLogIn = () =>
    this.setState(({logInPasswordType: type}) => ({
      logInPasswordType: type === 'password' ? 'text' : 'password',
    }));

  // Validate user input for Sign Up helper function
  validateSignUp = () => {
    let signUpFirstNameError = '';
    let signUpLastNameError = '';
    let signUpEmailError = '';
    let signUpPasswordError = '';
    let signUpPhoneNumberError = '';

    // Render first name error message
    // if (!this.state.signUpFirstName) {
    //   signUpFirstNameError = 'First name is required.';
    // }

    // Render last name error message
    // if (!this.state.signUpLastName) {
    //   signUpLastNameError = 'Last name is required.';
    // }

    // Render email error message
    if (!this.state.signUpEmail) {
      signUpEmailError = 'Email address is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.signUpEmail)) {
      signUpEmailError = 'Please enter a valid email.';
    }

    // Render password error message
    if (!this.state.signUpPassword) {
      signUpPasswordError = 'Password is required.';
    } else if (this.state.signUpPassword.length < 8) {
      signUpPasswordError = 'Your password must be at least 8 characters. Please try again.';
    }

    // Render phone number error message
    // if (!this.state.signUpPhoneNumber) {
    //   signUpPhoneNumberError = 'Phone number is required.';
    // } else if (this.state.signUpPhoneNumber.length < 14) {
    //   console.log('phone number length', this.state.signUpPhoneNumber.length);
    //   signUpPhoneNumberError = 'Please enter a valid phone number.';
    // }

    // Set validation error state
    if (
      signUpFirstNameError ||
      signUpLastNameError ||
      signUpEmailError ||
      signUpPasswordError ||
      signUpPhoneNumberError
    ) {
      this.setState({
        signUpFirstNameError,
        signUpLastNameError,
        signUpEmailError,
        signUpPasswordError,
        signUpPhoneNumberError,
      });
      return false;
    }

    return true;
  };

  // Validate user input for Login helper function
  validateLogIn = () => {
    let logInEmailError = '';
    let logInPasswordError = '';

    // Render email error message
    if (!this.state.logInEmail) {
      logInEmailError = 'Email address is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.logInEmail)) {
      logInEmailError = 'Please enter a valid email.';
    }

    // Render password error message
    if (!this.state.logInPassword) {
      logInPasswordError = 'Password is required.';
    } else if (this.state.logInPassword.length < 8) {
      logInPasswordError = 'Your password must be at least 8 characters. Please try again.';
    }

    // Set validation error state
    if (logInEmailError || logInPasswordError) {
      this.setState({
        logInEmailError,
        logInPasswordError,
      });
      return false;
    }

    return true;
  };

  // Validate user input for Forgot Password helper function
  validateForgotPassword = () => {
    let forgotPasswordEmailError = '';

    // Render email error message
    if (!this.state.forgotPasswordEmail) {
      forgotPasswordEmailError = 'Email address is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.forgotPasswordEmail)) {
      forgotPasswordEmailError = 'Please enter a valid email.';
    }

    // Set validation error state
    if (forgotPasswordEmailError) {
      this.setState({forgotPasswordEmailError});
      return false;
    }

    return true;
  };

  // Validate user input for Be Our Guest helper function
  validateBeOurGuest = () => {
    let beOurGuestEmailError = '';

    // Render email error message
    if (!this.state.beOurGuestEmail) {
      beOurGuestEmailError = 'Email address is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.beOurGuestEmail)) {
      beOurGuestEmailError = 'Please enter a valid email.';
    }

    // Set validation error state
    if (beOurGuestEmailError) {
      this.setState({beOurGuestEmailError});
      return false;
    }

    return true;
  };

  // Submit Sign Up form helper function
  handleSubmitSignUp = async (event) => {
    event.preventDefault();
    const isValid = this.validateSignUp();

    if (isValid) {
      const source = localStorage.getItem('source') || 'direct';
      // set up localstorage if user has selected yes to having business
      if (this.state.isBusiness === 'BUSINESS') {
        localStorage.setItem('isBusiness', 'true');
      }
      // JWT Sign Up
      const userData = {
        first_name: this.state.signUpFirstName,
        last_name: this.state.signUpLastName,
        email: this.state.signUpEmail,
        password: this.state.signUpPassword,
        phone_number: this.state.signUpPhoneNumber,
        passport_type: this.state.isBusiness,
        passport_area: localStorage.getItem('festival_attend'),
        source,
      };

      await this.context.jwtSignUp(userData);

      this.setState({
        signUpFirstNameError: '',
        signUpLastNameError: '',
        signUpEmailError: '',
        signUpPasswordError: '',
        signUpPasswordLessChar: '',
        signUpPasswordMinChar: '',
        signUpPhoneNumberError: '',
      });

      if (!this.context.state.errorMessage) {
        setTimeout(() => {
          if (localStorage.getItem('dataFromFestival') && localStorage.getItem('isBusiness')) {
            window.location.href = '/business-application';
          } else if (localStorage.getItem('actionFromSignOut') === 'host') {
            window.location.href = '/become-a-host';
          } else {
            // window.location.href = '/user-info';
            if (localStorage.getItem('buyFestivalFromNotSignup')) {
              window.location.href = `/payment/festival/${localStorage.getItem(
                'buyFestivalFromNotSignup',
              )}`;
            } else if (localStorage.getItem('VendFromSignOut')) {
              window.location.href = '/complete-profile/festival-vendor';
            } else if (localStorage.getItem('SponsorFromSignOut')) {
              //if the the user is trying to access to sponsor page before sign in
              window.location.href = '/sponsor-plan';


            } else if (localStorage.getItem('sponsorType')) {
              window.location.href = '/sponsor-plan';
            } else if (localStorage.getItem('partnerFromSignOut')) {
              //if the the user is trying to apply for partner before sign in, redirect to bussiness passport form
              window.location.href = '/business-application';
            } else if (localStorage.getItem('addBusiness')) {
              // if the user is trying to add business before sign in
              window.location.href = '/business-application';
            } else if (localStorage.getItem('addBusinessUnsponsored')) {
              // if the user is trying to add business before sign in on unsponsored festival
              if (this.state.isBusiness === 'BUSINESS') {
                // if user logged in and turns out to be a business
                // copy addBusinessUnsponsored to festival_id
                localStorage.setItem('festival_id', localStorage.getItem('addBusinessUnsponsored'));
                if (Number(localStorage.getItem('vendorPrice')) === 0) {
                  window.location.href = '/business-application';
                } else {
                  window.location.href = '/complete-profile/festival-vendor';
                }
              } else {
                // user logged in is not a business => create business profile first
                window.location.href = '/business-application';
              }
            } else if (localStorage.getItem('isBusiness')) {
              // if the user has selected business passport on join page
              window.location.href = '/business-application';
            } else if (localStorage.getItem('businessBeforeSignIn')) {
              window.location.href = '/business-application';
            } else {
              window.location.href = '/';
            }
          }
        }, 5000);

        toast(`Congratulations! your account has been created! Please check email to get your festival passport`, {
          type: 'success',
          autoClose: 5000,
        });


        this.setState({
          signUpOpened: false,
          submitAuthDisabled: true,
        });
      }
    }
  };

  // Submit Login helper function
  handleSubmitLogIn = async (event) => {
    event.preventDefault();
    const isValid = this.validateLogIn();

    if (isValid) {
      // Process of JWT login
      const userData = {
        email: this.state.logInEmail,
        password: this.state.logInPassword,
      };

      await this.context.jwtSignIn(userData);

      this.setState({
        logInEmailError: '',
        logInPasswordError: '',
      });


      if (!this.context.state.errorMessage) {
        // get the user id
        const url = `/user/check-email/${this.state.logInEmail}`;
        const acc_token = localStorage.getItem('access_token');
        const headers = {Authorization: `Bearer ${acc_token}`};

        const user_id = await axios({
          method: 'GET',
          url,
          headers,
        });

        if (localStorage.getItem('buyFestivalFromNotSignup')) {
          //if user is trying to buy a festival before logging in will be redirected directly to the payment page
          window.location.href = `/payment/festival/${localStorage.getItem(
            'buyFestivalFromNotSignup',
          )}`;
        } else if (localStorage.getItem('actionFromSignOut') === 'host') {
          window.location.href = '/become-a-host';

        } else if (localStorage.getItem('VendFromSignOut')) {
          window.location.href = '/complete-profile/festival-vendor';
        } else if (localStorage.getItem('SponsorFromSignOut')) {
          //if the the user is trying to access to sponsor page before sign in
          window.location.href = '/sponsor-plan';
        } else if (localStorage.getItem('sponsorType')) {
          window.location.href = '/sponsor-plan';
        } else if (localStorage.getItem('partnerFromSignOut')) {
          //if the the user is trying to apply for partner before sign in, redirect to bussiness passport form
          window.location.href = '/business-application';
        } else if (localStorage.getItem('addBusiness')) {
          // if the user is trying to add business before sign in
          window.location.href = '/business-application';
        } else if (localStorage.getItem('addBusinessUnsponsored')) {
          // if the user is trying to add business before sign in on unsponsored festival
          if (this.state.isBusiness === 'BUSINESS') {
            // if user logged in and turns out to be a business
            // copy addBusinessUnsponsored to festival_id
            localStorage.setItem('festival_id', localStorage.getItem('addBusinessUnsponsored'));
            window.location.href = '/complete-profile/festival-vendor';
          } else {
            // user logged in is not a business => create business profile first
            window.location.href = '/business-application';
          }
        } else if (localStorage.getItem('businessBeforeSignIn')) {
          window.location.href = '/business-application';
        } else if (!localStorage.getItem('change-password')) {
          //the case when user is logging in normally
          window.location.href = this.state.logInUrl;
        } else {
          localStorage.removeItem("change-password");
          window.location.href = "/";
        }

        this.setState({
          logInOpened: false,
          submitAuthDisabled: true,
        });
      }
    }
  };

  // Submit Forgot Password form helper function
  handleSubmitForgotPassword = async (event) => {
    event.preventDefault();
    const isValid = this.validateForgotPassword();

    if (isValid) {
      const url = '/user/forgot-password';

      const data = {email: this.state.forgotPasswordEmail, tasttlig: true};

      try {
        const response = await axios({method: 'POST', url, data});

        if (response) {
          setTimeout(() => {
            window.location.href = '/';
          }, 2000);

          toast(
            `Success! Please check your email ${this.state.forgotPasswordEmail} to reset your password!`,
            {
              type: 'success',
              autoClose: 2000,
            },
          );

          this.setState({
            forgotPasswordEmailError: '',
            submitAuthDisabled: true,
          });
        }
      } catch (error) {
        toast('Error! Something went wrong!', {
          type: 'error',
          autoClose: 2000,
        });
      }
    }
  };

  // Submit Be Our Guest helper function
  handleSubmitBeOurGuest = async (event) => {
    event.preventDefault();
    const isValid = this.validateBeOurGuest();

    if (isValid) {
      const url = '/user/create-visitor-account';

      const data = {email: this.state.beOurGuestEmail};

      try {
        const response = await axios({method: 'POST', url, data});

        if (response) {
          setTimeout(() => {
            window.location.reload();
          }, 2000);

          toast(`Success! Thank you for subscribing!`, {
            type: 'success',
            autoClose: 2000,
          });

          this.setState({
            beOurGuestEmailError: '',
            submitAuthDisabled: true,
          });
        }
      } catch (error) {
        toast('Error! Something went wrong!', {
          type: 'error',
          autoClose: 2000,
        });
      }
    }
  };

  // Sign Out helper function
  handleSignOut = async (event) => {
    event.preventDefault();
    await this.context.jwtSignOut();

    window.location.href = '/';
  };

  // Specify certain page after login
  componentWillReceiveProps = () => {
    // if (this.props.location.pathname !== '/login') {
    //   this.setState({logInUrl: this.props.location.pathname});
    // }
  };

  render = () => {
    return (
      <AuthModalContext.Provider
        value={{
          state: this.state,
          scrollToTop: this.scrollToTop,
          openModal: this.openModal,
          closeModal: this.closeModal,
          handleChange: this.handleChange,
          handleClickSignUp: this.handleClickSignUp,
          handleClickLogIn: this.handleClickLogIn,
          handleSubmitSignUp: this.handleSubmitSignUp,
          handleSubmitLogIn: this.handleSubmitLogIn,
          handleSubmitForgotPassword: this.handleSubmitForgotPassword,
          handleSubmitBeOurGuest: this.handleSubmitBeOurGuest,
          handleSignOut: this.handleSignOut,
        }}
      >
        {this.props.children}
      </AuthModalContext.Provider>
    );
  };
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter(AuthModalProvider);

export const AuthModalContext = React.createContext();
