import { Link } from "react-router-dom";

import UserContext from "./UserContext";
import { useContext } from "react";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

export default function NavigationBar() {
  const { currentUser } = useContext(UserContext);

  return (
    <nav>
      <ul className="menu">
        <li className="nav-list-item">
          <Link to="/">NC News </Link>
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
          <Link to="/users" id="user-login">
            <PersonIcon id="user-icon" />
            <h5>{currentUser.username}</h5>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
