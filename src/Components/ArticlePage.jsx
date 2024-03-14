import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

export default function ArticlePage() {
  const { article_id } = useParams();

  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [articleVotes, setArticleVotes] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://nc-news-backend-wuav.onrender.com/api/articles/${article_id}`
      )
      .then(
        ({
          data: {
            article: [singleArticle],
          },
        }) => {
          setSingleArticle(singleArticle);
          setIsLoading(false);
        }
      );
  }, []);

  const upVote = (e) => {
    e.preventDefault();

    setSingleArticle(() => {
      return { ...singleArticle, votes: singleArticle.votes + 1 };
    });

    const patchVote = () => {
      const patchBody = { inc_votes: 1 };
      axios
        .patch(
          `https://nc-news-backend-wuav.onrender.com/api/articles/${singleArticle.article_id}`,
          patchBody
        )
        .then((article) => {
          return article;
        });
    };
    patchVote();
  };

  const downVote = (e) => {
    e.preventDefault();

    setSingleArticle(() => {
      return { ...singleArticle, votes: singleArticle.votes - 1 };
    });
    const patchVote = () => {
      const patchBody = { inc_votes: -1 };
      axios
        .patch(
          `https://nc-news-backend-wuav.onrender.com/api/articles/${singleArticle.article_id}`,
          patchBody
        )
        .then((article) => {
          return article;
        });
    };
    patchVote();
  };

  return isLoading ? (
    <h2>Loading..</h2>
  ) : (
    <div className="single-article-page">
      <h1>{singleArticle.title}</h1>
      <h2>{singleArticle.author}</h2>
      <h3>{singleArticle.created_at.slice(0, 10)}</h3>
      <img className="single-article-img" src={singleArticle.article_img_url} />
      <p className="single-article-body">{singleArticle.body}</p>
      <h3 className="vote-count">Votes: {singleArticle.votes}</h3>
      <button
        className="article-votes"
        article_id={singleArticle.article_id}
        onClick={upVote}
      >
        🔼
      </button>
      <button className="article-votes" onClick={downVote}>
        🔽
      </button>
      {(() => {
        if (singleArticle.comment_count === 0) {
          return <h3>No comments yet!</h3>;
        } else {
          return <h3>Comments: {singleArticle.comment_count}</h3>;
        }
      })()}
      <Comments
        article_id={singleArticle.article_id}
        key={singleArticle.article_id}
      />
    </div>
  );
}
