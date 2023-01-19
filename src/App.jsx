// import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';
import './assets/css/style-prefix.css';

// Libraries
import React, {useContext, useEffect, useRef, useState} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

// import DashboardRoutes from './Routes/DashboardRoutes';
// import {AppContext, AppProvider} from './ContextProvider/AppProvider';
// import AuthModalProvider from './ContextProvider/AuthModalProvider';

import Welcome from './pages/Welcome';


function MyRoutes() {
  
  return (
    <Routes>
      {/* <Route exact path={'/login'} render={(props) => <Login {...props} />}/> */}
      {/* <Route path="/" element={ (props) => <Login {...props}/>} exact/> */}
      <Route path='/' element={<Welcome/>} />
    </Routes>
  );
}

function App() {

  return (
    <div className="App">
      {/* <BrowserRouter>
        <AppProvider>
          <AuthModalProvider> */}
            <MyRoutes />
          {/* </AuthModalProvider>
        </AppProvider>
      </BrowserRouter> */}

    </div>
  );
}

// Create the function
export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

export default App;
