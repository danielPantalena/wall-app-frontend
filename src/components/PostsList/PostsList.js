import React, { useState, useEffect } from 'react';
import { Post } from '../../components';
import wallAppApi from '../../services/api';
import './style.css'

const PostsList = ({ isLoggedIn }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [refreshPosts, setRefreshPosts] = useState(0);

  useEffect(() => {
    wallAppApi.get('posts/').then(
      (response) => {
        setPosts(response.data);
        setIsLoading(false);
      },
      (err) => {
        console.error(err.message);
        setIsLoading(false);
      },
    );
  }, [refreshPosts]);

  if (isLoading)
    return (
      <div className="posts-container">
        <p>Loading Posts...</p>
      </div>
    );

  if (posts.length === 0 && !sessionStorage.userToken)
    return (
      <div className="posts-container">
        <p>No posts yet. Sign up to be able to create a Post </p>
      </div>
    );

  return (
    <div className="posts-container">
      {posts.map(({ id, title, body, owner }) => {
        return (
          <Post
            key={id}
            id={id}
            title={title}
            body={body}
            owner={owner}
            isLoggedIn={isLoggedIn}
            setPosts={setPosts}
            setRefreshPosts={setRefreshPosts}
          />
        );
      })}
    </div>
  );
};

export default PostsList;
