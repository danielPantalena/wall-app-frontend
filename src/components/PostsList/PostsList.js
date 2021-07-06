import React, { useState, useEffect } from 'react';
import { Post } from '../../components';
import wallAppApi from '../../services/api';

const PostsList = () => {
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
      {posts.map(({ title, body, owner }, index) => {
        return <Post title={title} body={body} owner={owner} key={title + index} />;
      })}
    </div>
  );
};

export default PostsList;
