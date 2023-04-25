import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogContext from "../context/BlogContext";

export default function NewPost() {
  //id title text

  const { setPostDatas, newIdForNewPost } = useContext(BlogContext);

  const navigate = useNavigate();

  const [newPost, setNewPost] = useState({
    id: newIdForNewPost,
    title: "",
    text: "",
  });

  const handleChange = (e) => {
    setNewPost((prevPost) => ({
      ...prevPost,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostDatas((prevPostDatas) => [...prevPostDatas, newPost]);
    fetch("http://localhost:3500/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    navigate("/");
  };

  return (
    <div>
      <form action="" method="post">
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          id=""
          required
          onChange={handleChange}
        />
        <textarea
          name="text"
          id=""
          cols="30"
          rows="10"
          placeholder="Write your blog"
          required
          onChange={handleChange}
        ></textarea>
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  );
}
