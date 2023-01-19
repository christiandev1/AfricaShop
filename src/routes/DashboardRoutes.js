// Libraries
import React, { useContext } from 'react';
import { Route } from 'react-router-dom';

const DashboardRoutes = () => {
    // To use the JWT credentials
    // const appContext = useContext(AppContext);
    // const userRole = appContext.state.user.role;
  
    // return (
    //   <div>
    //     {/* <Route exact path={'/dashboard'} render={(props) => <Dashboard {...props} />} /> */}

    //   </div>
    // );
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  };
  
  export default DashboardRoutes;