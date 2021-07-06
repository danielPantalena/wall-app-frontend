import React from 'react';
import { useParams } from 'react-router-dom'
import { NotFound } from '../';

const PostDetail = () => {

  const { id } = useParams();

  if (!sessionStorage.userToken) return <NotFound />;

  return <div></div>;
};

export default PostDetail;
