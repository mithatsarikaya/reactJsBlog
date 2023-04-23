import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

export default function ShowPost({ postDatas, setPostDatas }) {
  const { id } = useParams();
  const post = postDatas.find((postData) => postData.id.toString() === id);

  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    setPostDatas((prevPostDatas) =>
      prevPostDatas.filter((prevPostData) => prevPostData.id.toString() !== id)
    );
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
