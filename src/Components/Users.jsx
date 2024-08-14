import { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { useContext } from "react";

import UserCard from "./UserCard";
import { getAllUsers } from "../../Utils/api";

import ClipLoader from "react-spinners/ClipLoader";

export default function Users() {
  const [users, setSingleUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useContext(UserContext);


  useEffect(() => {
    getAllUsers().then((users) => {
      setSingleUser(users);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <div className="loading">
      <h2>Loading...</h2>
      <ClipLoader />
    </div>
  ) : (
    <div>
      <h1>All Users</h1>
      <ul className="user-list">
        {users.map((user) => (
          <UserCard user={user} key={user.username} />
        ))}
      </ul>
    </div>
  );
}
