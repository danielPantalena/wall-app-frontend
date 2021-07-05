import React, { useState, useEffect } from 'react';
import { Post, LoginContainer } from '../../components';
import wallAppApi from '../../services/api';

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    wallAppApi.get('posts/').then((response) => setPosts(response.data));
    return () => {};
  }, []);
  return (
    <div>
      <LoginContainer />
      {posts.length &&
        posts.map(({ title, body, owner }, index) => {
          return <Post title={title} body={body} owner={owner} key={title + index} />;
        })}
    </div>
  );
};

export default Main;
