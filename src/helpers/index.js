import wallAppApi from '../services/api';

const generateHeaders = () => ({
  Authorization: `Token ${sessionStorage.userToken}`,
});

export const createUser = (userData) => wallAppApi.post('users/', userData);

export const getAllPosts = () => wallAppApi.get('posts');

export const getPostById = (id) => wallAppApi.get(`posts/${id}`);

export const createPost = (postData) => {
  const headers = generateHeaders();
  return wallAppApi.post('posts/', postData, headers);
};

export const updatePost = (postData, postId) => {
  const headers = generateHeaders();
  return wallAppApi.put(`posts/${postId}`, postData, headers);
};

export const deletePost = (postId) => {
  const headers = generateHeaders();
  return wallAppApi.delete(`posts/${postId}`, headers);
};

export const getUserToken = (username, password) =>
  wallAppApi.post('api-token-auth/', { username, password });
