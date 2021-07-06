import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../';
import { getUserToken } from '../../helpers';

const LoginContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  if (isLoggedIn) return <Button onClick={handleLogout} text="Logout" />;

  return (
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
          type="text"
          onChange={({ target: { value } }) => {
            setBadCredentials(false);
            setPassword(value);
          }}
        />
      </label>
      <Button text="Sign In" onClick={handleLogin} />
      {badCredentials && <span>Bad credentials</span>}
      <Link to="/signup">
        <Button text="Sign Up" />
      </Link>
    </div>
  );
};

export default LoginContainer;
