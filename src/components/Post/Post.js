import React from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../../helpers';
import Button from '../Button/Button';
import './style.css';

const Post = (props) => {
  const {
    id,
    title = 'Missing Title',
    body = 'Missing Body',
    owner,
    isLoggedIn = false,
    setRefreshPosts,
  } = props;

  const handleDelete = () => {
    deletePost(id).then(() => setRefreshPosts(id));
  };

  const { username } = sessionStorage;
  return (
    <div className="post-container">
      <h2>{title}</h2>
      <p>{body}</p>
      <p>{owner}</p>
      {isLoggedIn && username === owner && (
        <div>
          <Link to={`/posts/${id}`}>Edit</Link>
          <Button onClick={handleDelete} />
        </div>
      )}
    </div>
  );
};

export default Post;
