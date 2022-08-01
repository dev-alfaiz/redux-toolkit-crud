import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const AXIOS_INSTANCE = axios.create({
  baseURL: BASE_URL,
});

export const getAllPost = async () => {
  try {
    const response = await AXIOS_INSTANCE.get(`/posts`);
    return response;
  } catch (error) {
    return error.message;
  }
};

export const getPost = async (id) => {
  try {
    const response = await AXIOS_INSTANCE.get(`/posts/${id}`);
    return response;
  } catch (error) {
    return error.message;
  }
};

export const deletePostById = async (id) => {
  try {
    const response = await AXIOS_INSTANCE.delete(`/posts/${id}`);
    return response;
  } catch (error) {
    return error.message;
  }
};

export const createPostAPI = async (data) => {
  try {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const response = await AXIOS_INSTANCE.post(`/posts`, data, { headers });
    return response;
  } catch (error) {
    return error.message;
  }
};

export const updatePostAPI = async (updatableData) => {
  try {
    const { id, title, body } = updatableData;
    const response = await AXIOS_INSTANCE.put(`/posts/${id}`, { title, body });
    return response;
  } catch (error) {
    return error.message;
  }
};
