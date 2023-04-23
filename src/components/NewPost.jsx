import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPost({ setPostDatas, newIdForNewPost }) {
  //id title text

  const navigate = useNavigate();

  const [newPost, setNewPost] = useState({
    id: newIdForNewPost,
    title: "",
    text: "",
  });

  console.log(newPost);
  const handleChange = (e) => {
    setNewPost((prevPost) => ({
      ...prevPost,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostDatas((prevPostDatas) => [...prevPostDatas, newPost]);
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