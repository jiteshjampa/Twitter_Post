import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../services/postServices";
import { toast } from "react-toastify";
function CreatePost() {
  const [post, setPost] = useState({
    name: "",
    description: "",
    imageUrl: "",
    creatorName: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createPost(post); // Assuming createPost is an async function
      toast.success("Post created successfully!"); // Success toast
      navigate("/"); // Navigate to home or another page after successful creation
    } catch (error) {
      toast.error("Error creating the post!"); // Error toast
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Post Title"
            value={post.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="description"
            placeholder="Post Description"
            value={post.description}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL (Optional)"
            value={post.imageUrl}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="creatorName"
            placeholder="Your Name"
            value={post.creatorName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
