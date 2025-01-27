import { useEffect, useState } from "react";
import { getPosts, deletePost, likePost } from "../services/postServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPosts().then((res) => setPosts(res.data));
  }, []);

  const handleLike = (id) => {
    likePost(id)
      .then(() => {
        setPosts(
          posts.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
        );
        toast.success("Post liked successfully!");
      })
      .catch((error) => {
        toast.error("Error liking the post!");
      });
  };

  const handleDelete = (id) => {
    deletePost(id)
      .then(() => {
        setPosts(posts.filter((p) => p.id !== id));
        toast.success("Post deleted successfully!");
      })
      .catch((error) => {
        toast.error("Error deleting the post!");
      });
  };

  const handleUpdate = (id) => {
    navigate(`/post/update/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Twitter Clone</h1>
        <button
          onClick={() => navigate("/create")}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        >
          New Post
        </button>

        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3
              className="text-lg font-semibold cursor-pointer hover:text-blue-600"
              onClick={() => navigate(`/post/${post.id}`)}
            >
              {post.name}
            </h3>
            <p className="text-gray-700">{post.description}</p>
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt=""
                className="w-full h-40 object-cover mt-2 rounded-md"
              />
            )}
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600">Likes: {post.likes}</span>
              <div>
                <button
                  onClick={() => handleLike(post.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded-md mr-2"
                >
                  Like
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md mr-2"
                >
                  Delete
                </button>
                {/* Update Button */}
                <button
                  onClick={() => handleUpdate(post.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
