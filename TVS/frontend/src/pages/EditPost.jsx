import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Naudojame useNavigate
import axios from "axios";
import "./editpost.scss";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Pakeista iš useHistory į useNavigate
  const [post, setPost] = useState({ title: "", content: "" });

  useEffect(() => {
    axios
      .get(`/api/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/posts/${id}`, post)
      .then(() => {
        navigate("/"); // Pakeista iš history.push į navigate
      })
      .catch((error) => console.error("Error updating post:", error));
  };

  return (
    <div>
      <h1>Redaguoti straipsnį</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Pavadinimas"
        />
        <textarea
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
          placeholder="Turinys"
        />
        <button type="submit">Išsaugoti</button>
      </form>
    </div>
  );
};

export default EditPost;
