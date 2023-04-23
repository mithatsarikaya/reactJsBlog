import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
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
