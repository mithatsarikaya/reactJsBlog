import { Link } from "react-router-dom";

export default function Post({ title, text, id }) {
  return (
    <>
      <Link to={`/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{text.length > 100 ? `${text.slice(0, 100)}...` : text}</p>
    </>
  );
}
