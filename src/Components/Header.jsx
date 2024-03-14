import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useContext } from "react";

export default function Header() {
  const { currentUser } = useContext(UserContext);
  return (
    <nav>
      <ul className="menu">
        <li className="nav-list-item">
          <Link>NC News </Link>
        </li>
        <li className="nav-list-item">
          <Link to="/users">Current User: {currentUser.username}</Link>
        </li>
      </ul>
      <form className="menu">
        <li className="nav-list-item">
          <label htmlFor="search">Search NC News: </label>
          <input id="search" type="text" placeholder="search..."></input>
        </li>
      </form>
      <ul className="menu">
        <li className="nav-list-item">
          <Link to="/articles">Articles</Link>
        </li>
        <li className="nav-list-item">Topics</li>
        <li className="nav-list-item">
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}
