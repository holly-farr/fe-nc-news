import { useContext, useState } from "react";
import UserContext from "./UserContext";

import { postArticleComment } from "../../Utils/api";

import ClipLoader from "react-spinners/ClipLoader";

export default function CommentAdder({ article_id, setComments }) {
  const [newComment, setNewComment] = useState("");
  const { currentUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [commentError, setCommentError] = useState(false);

  function handlePostComment(e) {
    e.preventDefault();

    const body = {
      username: currentUser.username,
      body: newComment,
    };

    postArticleComment(article_id, body)
      .then((newComment) => {
        setNewComment("");
        setComments((currComments) => {
          [newComment, ...currComments];
        });
      })
      .catch((commentError) => {
        setCommentError(true);
      });
  }

  return isLoading ? (
    <div className="loading">
      <h3>Loading comments...</h3>
      <ClipLoader />
    </div>
  ) : (
    <form className="post-comment-form" onSubmit={handlePostComment}>
      <label htmlFor="newComment"></label>
      {commentError && (
        <h4 id="postCommentError">
          Oops! You need to be logged in to post a comment.
        </h4>
      )}
      <input
        type="text"
        placeholder="Your comment..."
        id="newComment"
        aria-multiline="true"
        value={newComment}
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
        required
      ></input>
      <button className="add-comment-button">Add Comment</button>
    </form>
  );
}
