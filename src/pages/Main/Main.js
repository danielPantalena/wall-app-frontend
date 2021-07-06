import React, { useState } from 'react';
import { PostsList, PostForm, LoginContainer } from '../../components';
import './style.css';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.userToken);

  return (
    <div>
      <header className="flex-row">
        <h1>Wall App</h1>
        <LoginContainer isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      {isLoggedIn && <PostForm />}
      <PostsList isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default Main;
