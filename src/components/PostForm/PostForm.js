import React, { useState } from 'react';
import { createPost } from '../../helpers';
import './style.css';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = () => {
    createPost({ title, body });
  };

  return (
    <form onSubmit={handleSubmit} className="post-form-container">
      <h3>Create a Post</h3>
      <label>
        <p>Title:</p>
        <input
          type="text"
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
          name="title"
          required
          maxLength={255}
        />
      </label>
      <label>
        <p>Body:</p>
        <textarea
          type="text"
          value={body}
          onChange={({ target: { value } }) => setBody(value)}
          name="body"
          required
        />
      </label>
      <input type="submit" value="Create Post" className="submit-button"/>
    </form>
  );
};

export default PostForm;
