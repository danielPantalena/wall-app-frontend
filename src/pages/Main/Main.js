import React, { useState } from 'react';
import { Header, PostsList, PostForm, LoginContainer } from '../../components';

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
