import { useContext } from "react";
import UserContext from "./UserContext";

export default function UserCard({user}) {

  const { setCurrentUser } = useContext(UserContext);

  return (
    <li key="user" className="user" >
      <img className="user-img" src={user.avatar_url}/>
      <h3>{user.username}</h3>
      <h4>{user.name}</h4>
      <button
        className="user-login-button"
        onClick={() => {setCurrentUser(user)}}>
        Login {user.username}
      </button>
    </li>
  );
}
