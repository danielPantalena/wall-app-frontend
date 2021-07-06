import React, { useState } from 'react';
import { createPost } from '../../helpers';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = () => {
    createPost({ title, body });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
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
        body:
        <input
          type="text"
          value={body}
          onChange={({ target: { value } }) => setBody(value)}
          name="body"
          required
        />
      </label>
      <input type="submit" value="Create Post" />
    </form>
  );
};

export default PostForm;
