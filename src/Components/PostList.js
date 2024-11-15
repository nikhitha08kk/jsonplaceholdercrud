
import React from "react";
import "./style.css"

const PostList = ({ posts, onEdit, onDelete }) => {
  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button className="edit" onClick={() => onEdit(post)}>Edit</button>
            <button className="delete" onClick={() => onDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

