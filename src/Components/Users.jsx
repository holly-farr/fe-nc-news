import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

export default function Users() {
  const [users, setSingleUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://nc-news-backend-wuav.onrender.com/api/users")
      .then(({ data: { users } }) => {
        setSingleUser(users);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <h3>Loading users...</h3>
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
