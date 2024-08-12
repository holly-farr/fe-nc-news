import { useEffect, useState, useContext } from "react";
import UserContext from "./UserContext";
import { useParams } from "react-router-dom";

import CommentAdder from "./CommentAdder";
import { getArticleComments, deleteArticleComment } from "../Utils/api";

import ClipLoader from "react-spinners/ClipLoader";

export default function Comments() {
  const { article_id } = useParams();
  const { currentUser } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticleComments(article_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <div className="loading">
      <h3>Loading comments...</h3>
      <ClipLoader />
    </div>
  ) : (
    <section>
      <CommentAdder article_id={article_id} setComments={setComments} />
      <ol className="comments-list">
        {comments.map((comment) => {
          return (
            <li className="comment" key={comment.comment_id}>
              <div className="comment-info">
                <h3 className="comment-author">{comment.author}</h3>
                <p className="comment-date">
                  {comment.created_at.slice(0, 10)}
                </p>
              <button
                  onClick={() => {
                    deleteArticleComment(comment.comment_id);
                  }}
                  className="delete-comment"
                >
                  <h4>Delete Comment</h4>
                </button>
                </div>
              <p>{comment.body}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
