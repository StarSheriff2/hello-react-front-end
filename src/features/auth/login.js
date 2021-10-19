import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
  const { handleSuccessfulAuth, handleSuccessfulDoctorAuth } = props;
  const initialState = {
    email: '',
    loginErrors: '',
  };

  const [user, setUser] = useState(initialState);

  const handleSubmit = (event) => {
    const { email } = user;
    axios
      .post(
        'http://localhost:3001/api/v1/sign_in',
        {
          user: {
            email,
          },
        },
        { withCredentials: true },
      )
      .then((response) => {
        if (response.data.logged_in && response.data.patient) {
          handleSuccessfulAuth(response.data);
        } else {
          handleSuccessfulDoctorAuth(response.data);
        }
      })
      .catch((error) => {
        console.log('login error', error);
      });

    event.preventDefault();
  };

  const handleChange = (event) => setUser((actualUser) => ({ ...actualUser, [event.target.name]: event.target.value }));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-sm">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
