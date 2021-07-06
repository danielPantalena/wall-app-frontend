import React, { useState, useEffect } from 'react';
import { Header, PostsList, PostForm, LoginContainer } from '../../components';
import { getAllPosts } from '../../helpers';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.userToken);

  return (
    <div>
      <Header />
      <LoginContainer isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {isLoggedIn && <PostForm />}
      <PostsList isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default Main;
