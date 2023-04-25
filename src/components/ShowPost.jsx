import { useParams, useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import BlogContext from "../context/BlogContext";

export default function ShowPost() {
  const { postDatas, setPostDatas } = useContext(BlogContext);
  const { id } = useParams();
  const post = postDatas.find((postData) => postData.id.toString() === id);
  const url = "http://localhost:3500/posts/";
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    setPostDatas((prevPostDatas) =>
      prevPostDatas.filter((prevPostData) => prevPostData.id.toString() !== id)
    );

    fetch(`${url}${id}`, {
      method: "DELETE",
    });
    console.log(`${url}${id}`);
    navigate("/");
  };

  return (
    <>
      <h3>{post.title}</h3>
      <p>
        {/* {post.text.length > 100 ? `${post.text.slice(0, 100)}...` : post.text} */}
        {post.text}
      </p>
      <Link to={`/edit/${post.id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
