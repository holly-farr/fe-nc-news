import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "./UserContext";

export default function CommentAdder({ article_id, setComments }) {
  const [newComment, setNewComment] = useState("");
  const { currentUser } = useContext(UserContext);

  function handlePostComment(e) {
    e.preventDefault();

    const body = {
      username: currentUser.username,
      body: newComment,
    };

    axios
      .post(
        `https://nc-news-backend-wuav.onrender.com/api/articles/${article_id}/comments`,
        body
      )
      .then(({ newPostedComment }) => {
        setNewComment("");
        setComments((currComments) => {
          [newPostedComment, ...currComments];
        });
      })
      .catch((err) => {
        console.log(err)
        setNewComment((e.target.value = "Login to add comment"));
      });
  }

  return (
    <div className="post-comment-section">
      <h3>Add comment...</h3>
      <form className="post-comment-form" onSubmit={handlePostComment}>
        <label htmlFor="newComment"></label>
        <input
          type="text"
          id="newComment"
          value={newComment}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
          required
        ></input>
        <button className="add-comment-button">Add Comment</button>
      </form>
    </div>
  );
}
