import wallAppApi from '../services/api';

const generateHeaders = () => ({
  Authorization: `Token ${sessionStorage.userToken}`,
});

export const createUser = (userData) => wallAppApi.post('users/', userData);

export const createPost = (postData) => {
  const headers = generateHeaders();
  wallAppApi.post('posts/', postData, headers);
};

export const updatePost = (postData) => {
  const headers = generateHeaders();
  wallAppApi.put('posts/', postData, headers);
};

export const deletePost = (postId) => {
  const headers = generateHeaders();
  wallAppApi.delete(`posts/${postId}`, headers);
};

export const getUserToken = (username, password) =>
  wallAppApi.post('api-token-auth/', { username, password });
