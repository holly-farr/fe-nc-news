import axios from "axios";
import { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { useContext } from "react";

export default function Comments({ article_id }) {
  const { currentUser } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://nc-news-backend-wuav.onrender.com/api/articles/${article_id}/comments`
      )
      .then(({ data: { comments } }) => {
        setComments(comments);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <h3>Comments loading...</h3>
  ) : (
    <section>
      <ol className="comments-list">
        {comments.map((comment) => {
          return (
            <li className="comment" key={comment.comment_id}>
              <div className="comment-info">
                <h3 className="comment-author">{comment.author}</h3>
                <h4 className="comment-votes">{comment.votes} Votes</h4>
                <p className="comment-date">
                  {comment.created_at.slice(0, 10)}
                </p>
              </div>
              <p>{comment.body}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
