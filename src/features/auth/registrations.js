import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Registration = () => {
  const initialState = {
    email: '',
    registrationErrors: '',
  };

  const [user, setUser] = useState(initialState);

  const handleSubmit = (event) => {
    const {
      email,
    } = user;

    axios
      .post(
        'http://localhost:3001/api/v1/users',
        {
          user: {
            email,
          },
        },
        { withCredentials: true },
      )
      .then((response) => {
        if (response.data.status === 'created') {
          console.log('Registration data', response.data);
        }
      })
      .catch((error) => {
        console.log('registration error', error);
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
          Register
        </button>
        <p>
          Have an account?
          {' '}
          <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;
