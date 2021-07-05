import React, { useEffect } from 'react';
import { Post, LoginContainer } from '../../components';
import wallAppApi from '../../services/api';

const Main = () => {
  useEffect(() => {
    wallAppApi.get('posts/').then(response => console.log(response));
    return () => {};
  }, []);
  return (
    <div>
      <LoginContainer />
      <Post />
    </div>
  );
};

export default Main;
