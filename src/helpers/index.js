import wallAppApi from '../services/api';

export const createUser = (userData) => wallAppApi.post('users/', userData);

export const createPost = (postData, headers) => wallAppApi.post('posts/', postData, headers);

export const getUserToken = (username, password) =>
  wallAppApi.post('api-token-auth/', { username, password });