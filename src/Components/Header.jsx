import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul className="menu">
        <li className="nav-list-item">
          <Link>NC News </Link>
        </li>
        <li className="nav-list-item">
          <label htmlFor="search">Search NC News: </label>
          <input id="search" type="text" placeholder="search..."></input>
        </li>
        <li className="nav-list-item">Current User</li>
      </ul>
      <ul className="menu">
        <li className="nav-list-item">
          <Link to="/articles">Articles</Link>
        </li>
        <li className="nav-list-item">Topics</li>
        <li className="nav-list-item">Users</li>
      </ul>
    </nav>
  );
}
