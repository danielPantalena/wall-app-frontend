import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { NotFound } from '../';
import { Button } from '../../components';
import { getPostById, updatePost } from '../../helpers';

const PostDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [postData, setPostData] = useState({});
  const [newPostData, setNewPostData] = useState({});

  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    getPostById(id)
      .then(
        (response) => {
          setPostData(response.data);
          setNewPostData(response.data);
        },
        () => setNotFound(true),
      )
      .then(() => setIsLoading(false));
  }, []);

  const handleChange = ({ target: { value, name } }) => {
    setNewPostData({ ...postData, [name]: value });
  };

  const handleUpdate = () => {
    updatePost(newPostData, id).then(
      () => history.push('/'),
      (err) => console.error(err.message),
    );
  };

  if (isLoading) return <p>Loading Post...</p>;

  if (notFound) return <NotFound />;

  return (
    <div>
      <label>
        Title:
        <input type="text" value={newPostData.title} name="title" onChange={handleChange} />
      </label>
      <label>
        Body:
        <input type="text" value={newPostData.body} name="body" onChange={handleChange} />
      </label>
      <Button onClick={() => handleUpdate()} text="Update Post" />
    </div>
  );
};

export default PostDetail;
