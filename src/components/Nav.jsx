import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <input
        type="search"
        name=""
        id=""
        placeholder="Check if we have related blog, most probably we dont ^^"
      />
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/new">
          <li>Post</li>
        </Link>
        <li>About</li>
      </ul>
    </nav>
  );
}
