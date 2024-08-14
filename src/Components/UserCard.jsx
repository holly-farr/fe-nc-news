import { useContext, useEffect } from "react";
import UserContext from "./UserContext";

export default function UserCard({ user }) {
  const { setCurrentUser } = useContext(UserContext);

  return (
    <li key="user" className="user-card">
      <img className="user-img" src={user.avatar_url} />
      <h3>{user.username}</h3>
      <h4>{user.name}</h4>
      <button
        className="card-button"
        onClick={() => {
          setCurrentUser(user);
          window.localStorage.setItem('user', user)
        }}
      >
        Login {user.username}
      </button>
    </li>
  );
}
