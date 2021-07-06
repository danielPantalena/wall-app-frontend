import React, { useState, useEffect } from 'react';
import { Post } from '../../components';
import wallAppApi from '../../services/api';

const PostsList = ({ isLoggedIn }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    wallAppApi.get('posts/').then((response) => {
      setPosts(response.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading Posts...</p>;

  return (
    <div>
      {posts.map(({ id, title, body, owner }) => {
        return <Post key={id} id={id} title={title} body={body} owner={owner} isLoggedIn={isLoggedIn} />;
      })}
    </div>
  );
};

export default PostsList;
