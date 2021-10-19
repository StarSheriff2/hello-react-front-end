import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Dashboard = (props) => {
  const { loggedInStatus } = props;
  const history = useHistory();

  const initialState = {
    loggedInStatus: 'NOT_LOGGED_IN',
  };

  const [status, setStatus] = useState(initialState);

  const handleLogout = () => {
    setStatus({
      loggedInStatus: 'NOT_LOGGED_IN',
    });
    history.push('/');
  };

  const handleLogoutClick = () => {
    axios
      .delete('http://localhost:3001/api/v1/sign_out', { withCredentials: true })
      .then((response) => {
        handleLogout();
      })
      .catch((error) => {
        console.log('Logout error', error);
      });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h1>
        Status:
        {loggedInStatus}
      </h1>
      <button
        type="button"
        onClick={() => handleLogoutClick()}
        className="btn btn-primary btn-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
