import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Login from '../auth/login';

const Home = (props) => {
  const { handleLogin, loggedInStatus } = props;
  const history = useHistory();

  const handleSuccessfulAuth = (data) => {
    handleLogin(data);
    history.push('/dashboard');
  };

  return (
    <div>
      <h1>Home</h1>
      <h1>
        Status:
        {loggedInStatus}
      </h1>
      <Login
        handleSuccessfulAuth={handleSuccessfulAuth}
      />
      <p>
        Don&apos;t have an account?
        {' '}
        <Link to="/registration">Register</Link>
      </p>
    </div>
  );
};

export default Home;
