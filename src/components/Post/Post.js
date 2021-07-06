import React from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../../helpers';
import Button from '../Button/Button';
import './style.css';

const Post = (props) => {
  const { id, title = 'Missing Title', body = 'Missing Body', owner, isLoggedIn = false } = props;

  const { username } = sessionStorage;
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>{owner}</p>
      {isLoggedIn && username === owner && (
        <div>
          <Link to={`/posts/${id}`}>Edit</Link>
          <Button onClick={() => deletePost(id)} />
        </div>
      )}
    </div>
  );
};

export default Post;
