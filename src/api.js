
import axios from 'axios';

const jsonPlaceholderAPI = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
  });
  
  const jsonServerAPI = axios.create({
    baseURL: 'http://localhost:3001/posts',
  });
  
  // Create
  const createPost = async (post) => {
    try {
      await jsonPlaceholderAPI.post('/', post);
      const response = await jsonServerAPI.post('/', post);
      return response.data; // Return the created post data
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  };
  
  // Read
  const fetchPosts = async () => {
    try {
      const response = await jsonPlaceholderAPI.get('/');
      return response.data; // Return fetched posts
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  };
// update

const updatePost = async (id, updatedPost) => {
    try {
      console.log('Updating post with ID:', id); // Debugging log
      const response = await jsonPlaceholderAPI.put(`/${id}`, updatedPost);
      console.log('Post updated:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  };

  
  
  // Delete
  const deletePost = async (id) => {
    try {
      await jsonPlaceholderAPI.delete(`/${id}`);
      await jsonServerAPI.delete(`/${id}`);
      return id; // Return the id of the deleted post
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  };
  
  export { jsonPlaceholderAPI, jsonServerAPI, createPost, fetchPosts, updatePost, deletePost };
  