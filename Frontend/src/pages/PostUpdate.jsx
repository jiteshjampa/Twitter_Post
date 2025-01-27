import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostById, updatePost } from "../services/postServices";
import { toast } from "react-toastify";
const PostUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    name: "",
    description: "",
    imageUrl: "",
    creatorName: "",
    likes: 0,
  });

  useEffect(() => {
    getPostById(id)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching post data", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updatePost(id, post)
      .then((response) => {
        toast.success("Post updated successfully!");
        navigate(`/post/${id}`);
      })
      .catch((error) => {
        toast.error("Error updating post!");
      });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Update Post
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Post Name
          </label>
          <input
            type="text"
            name="name"
            value={post.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter post name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={post.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter post description"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Image URL
          </label>
          <input
            type="text"
            name="imageUrl"
            value={post.imageUrl}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL (optional)"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Creator Name
          </label>
          <input
            type="text"
            name="creatorName"
            value={post.creatorName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter creator name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Likes</label>
          <input
            type="number"
            name="likes"
            value={post.likes}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter likes count"
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update
          </button>

          <button
            type="button"
            onClick={() => navigate(`/post/${id}`)}
            className="bg-gray-400 text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostUpdate;
