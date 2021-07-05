import React from 'react';
import './style.css';

const Post = (props) => {
  const { title = 'Missing Title', body = 'Missing Body', owner } = props;
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>{owner}</p>
    </div>
  );
};

export default Post;
