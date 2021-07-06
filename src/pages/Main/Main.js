import React, { useState, useEffect } from 'react';
import { Header, PostsList, PostForm, LoginContainer } from '../../components';
import wallAppApi from '../../services/api';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    wallAppApi.get('posts/').then((response) => setPosts(response.data));
  }, []);

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
