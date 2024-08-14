import { useContext, useEffect } from "react";
import UserContext from "./UserContext";

export default function UserCard({ user }) {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setCurrentUser(loggedInUser);
    }
  }, []);

  return (
    <li key="user" className="user-card">
      <img className="user-img" src={user.avatar_url} />
      <h3>{user.username}</h3>
      <h4>{user.name}</h4>
      <button
        className="card-button"
        onClick={() => {
          setCurrentUser(user);
          localStorage.setItem("user", JSON.stringify(user));
        }}
      >
        Login {user.username}
      </button>
      {(() => {
        if (currentUser === user)
          return (
            <button
              className="card-button"
              id="logout-button"
              onClick={() => {
                setCurrentUser({});
                localStorage.clear();
              }}
            >
              Log Out
            </button>
          );
      })()}
    </li>
  );
}
