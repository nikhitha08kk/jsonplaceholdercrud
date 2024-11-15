
import React, { useState, useEffect } from "react";
import "./style.css"

const PostForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Populate the form fields with initialData if available
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setBody(initialData.body || "");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      // Call onSubmit with the form data (title and body)
      onSubmit({ title, body });
      setTitle(""); // Reset title field
      setBody(""); // Reset body field
    } else {
      alert("Please fill out both fields.");
    }
  };

  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <div >
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button className=" create" type="submit">{initialData.id ? "Update Post" : "Create Post"}</button>
    </form>
  );
};

export default PostForm;

