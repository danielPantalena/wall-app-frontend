import React from 'react';
import { LoginContainer, Button } from '../index';

const Header = () => {
  const handleLogout = () => {
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('username');
  };
  return (
    <header>
      <h1>Wall App</h1>
      {sessionStorage.userToken ? (
        <Button onClick={handleLogout} text="Logout" />
      ) : (
        <LoginContainer />
      )}
    </header>
  );
};

export default Header;
