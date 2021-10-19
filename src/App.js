import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import Dashboard from './features/dashboard/Dashboard';
import Home from './features/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './features/auth/registrations';
import Greeting from './features/greeting/Greeting';

const App = () => {
  const initialState = {
    loggedInStatus: 'NOT_LOGGED_IN',
  };

  const [status, setStatus] = useState(initialState);

  const checkLoginStatus = () => {
    axios
      .get('http://localhost:3001/api/v1/logged_in', { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in
          && status.loggedInStatus === 'NOT_LOGGED_IN'
        ) {
          setStatus({
            loggedInStatus: 'LOGGED_IN',
          });
        } else if (
          !response.data.logged_in
          && status.loggedInStatus === 'LOGGED_IN'
        ) {
          setStatus({
            loggedInStatus: 'NOT_LOGGED_IN',
          });
        }
      })
      .catch((error) => {
        console.log('login error', error);
      });
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleLogin = (data) => {
    setStatus({
      loggedInStatus: 'LOGGED_IN',
    });
  };

  const handleSuccessfulAuth = (data) => {
    handleLogin(data);
  };

  const handleLogout = () => {
    setStatus({
      loggedInStatus: 'NOT_LOGGED_IN',
    });
  };

  return (
    <div className="app">
      <Router>
        {/* <Switch>
          <Route exact path="/" component={Greeting} />
        </Switch> */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                loggedInStatus={status.loggedInStatus}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
              />
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={() => (
              <Dashboard
                loggedInStatus={status.loggedInStatus}
              />
            )}
          />
          <Route
            exact
            path="/registration"
            render={() => (
              <Registration
                handleSuccessfulAuth={handleSuccessfulAuth}
                loggedInStatus={status.loggedInStatus}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
