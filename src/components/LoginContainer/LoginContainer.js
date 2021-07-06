import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../';

const LoginContainer = () => {
  return (
    <div>
      <input type="text" />
      <input type="text" />
      <Button text="Sign in" />
      <Link to="/signup">
        <Button text="Sign up" />
      </Link>
    </div>
  );
};

export default LoginContainer;
