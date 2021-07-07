import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../';
import { getUserToken } from '../../helpers';
import './style.css';

const LoginContainer = ({ isLoggedIn, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [badCredentials, setBadCredentials] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('username');
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    getUserToken(username, password).then(
      (response) => {
        sessionStorage.username = username;
        sessionStorage.userToken = response.data.token;
        setUsername('');
        setPassword('');
        setIsLoggedIn(true);
      },
      (err) => {
        console.error(err.message);
        return setBadCredentials(true);
      },
    );
  };

  if (isLoggedIn)
    return (
      <div>
        <p>Hello {sessionStorage.username} :)</p>
        <Button onClick={handleLogout} text="Logout" />
      </div>
    );

  return (
    <div>
      <div>
        <label>
          username:
          <input
            type="text"
            onChange={({ target: { value } }) => {
              setBadCredentials(false);
              setUsername(value);
            }}
          />
        </label>
        <label>
          password:
          <input
            type="password"
            onChange={({ target: { value } }) => {
              setBadCredentials(false);
              setPassword(value);
            }}
          />
        </label>
        <Button text="Sign In" onClick={handleLogin} />
        <Link to="/signup">
          <Button text="Sign Up" />
        </Link>
      </div>
      {badCredentials && <span className="bad-credentials">BAD CREDENTIALS</span>}
    </div>
  );
};

export default LoginContainer;
