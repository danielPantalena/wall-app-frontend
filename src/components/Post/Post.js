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
      <p className="small-letters">Owner: {owner}</p>
      <h2>{title}</h2>
      <p>{body}</p>
      {isLoggedIn && username === owner && (
        <div className="buttons-container">
          <Link to={`/posts/${id}`}>
            <Button text="Edit" backgroundColor="rgb(23, 36, 36)" color="white"/>
          </Link>

          <Button onClick={handleDelete} color="white" backgroundColor="salmon" text="DELETE" />
        </div>
      )}
    </div>
  );
};

export default Post;
