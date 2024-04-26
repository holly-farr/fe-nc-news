import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function NavigationBar() {
  const { currentUser } = useContext(UserContext);
  return (
    <nav>
      <ul className="menu">
        <li className="nav-list-item">
          <Link to="/">NC News </Link>
        </li>
        <li className="nav-list-item">
          <Link to="/topics">Topics </Link>
        </li>
        <li>
          <form id="search-form" className="nav-list-item">
            <label htmlFor="search">
              <SearchIcon id="search-icon" />
            </label>
            <input
              id="search"
              type="text"
              placeholder=" search NC News..."
            ></input>
          </form>
        </li>
        <li className="nav-list-item">
          <Link to="/users">Current User: {currentUser.username}</Link>
        </li>
      </ul>
    </nav>
  );
}
