import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById, likePost } from "../services/postServices";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getPostById(id);
        setPost(resp.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleLike = () => {
    likePost(id).then(() => {
      setPost({ ...post, likes: post.likes + 1 });
    });
  };

  if (loading)
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-10">{error.message}</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold">{post.name}</h1>
        <p className="text-gray-700">{post.description}</p>
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt=""
            className="w-full h-60 object-cover mt-3 rounded-md"
          />
        )}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-600">Likes: {post.likes}</span>
          <button
            onClick={handleLike}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Like
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
