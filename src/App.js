
import React, { useEffect, useState } from "react";
import PostForm from "./Components/PostForm";
import { deletePost, fetchPosts, updatePost, createPost } from "./api";
import PostList from "./Components/PostList";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts); // Update state with fetched posts
      } catch (error) {
        console.error("Error loading posts:", error);
      }
    };
    loadPosts();
  }, []);

  const handleCreatePost = async (post) => {
    try {
      const newPost = await createPost(post);
      setPosts((prevPosts) => [...prevPosts, newPost]); // Add new post to state
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleUpdatePost = async (post) => {
    try {
      const updatedPost = await updatePost(editingPost.id, post);
      setPosts((prevPosts) =>
        prevPosts.map((p) => (p.id === updatedPost.id ? updatedPost : p))
      ); // Update state with edited post
      setEditingPost(null);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      await deletePost(id);
      setPosts((prevPosts) => prevPosts.filter((p) => p.id !== id)); // Remove deleted post from state
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="App">
      <h1>CRUD App with JSONPlaceholder</h1>
      <PostForm
        onSubmit={editingPost ? handleUpdatePost : handleCreatePost}
        initialData={editingPost || {}}
      />
      <PostList posts={posts} onEdit={setEditingPost} onDelete={handleDeletePost} />
    </div>
  );
};

export default App;

