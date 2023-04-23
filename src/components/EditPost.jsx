import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost({ postDatas, setPostDatas }) {
  const { id } = useParams();
  const post = postDatas.find((postData) => postData.id.toString() === id);

  const [editedPost, setEditedPost] = useState(post);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEditedPost((prevPost) => ({
      ...prevPost,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setPostDatas((prevPostDatas) =>
      prevPostDatas.map((prevPostData) =>
        prevPostData.id.toString() === id ? editedPost : prevPostData
      )
    );
    navigate("/");
  };

  return (
    <>
      <form action="" method="post">
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          id=""
          required
          value={editedPost.title}
          onChange={handleChange}
        />
        <textarea
          value={editedPost.text}
          name="text"
          id=""
          cols="30"
          rows="10"
          placeholder="Write your blog"
          required
          onChange={handleChange}
        ></textarea>
        <button onClick={handleEdit}>Edit</button>
      </form>
    </>
  );
}
