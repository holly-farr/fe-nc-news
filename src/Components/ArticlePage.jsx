import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import UserContext from "./UserContext";

import { getArticleById, updateArticleVotes } from "../../Utils/api";
import Comments from "./Comments";

import ClipLoader from "react-spinners/ClipLoader";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

export default function ArticlePage() {
  const { article_id } = useParams();
  const { currentUser } = useContext(UserContext);

  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    getArticleById(article_id).then((singleArticle) => {
      setSingleArticle(singleArticle);
      setIsLoading(false);
    });
  }, []);

  const upVote = (e) => {
    e.preventDefault();

    if (!clicked) {
      setClicked(true);
      setSingleArticle(() => {
        return { ...singleArticle, votes: singleArticle.votes + 1 };
      });
      const patchVote = () => {
        const patchBody = { inc_votes: 1 };
        updateArticleVotes(article_id, patchBody)
          .then((singleArticle) => {
            return singleArticle;
          })
          .catch((err) => {
            if (err) {
              setSingleArticle(() => {
                return { ...singleArticle, votes: singleArticle.votes - 1 };
              });
            }
          });
      };
      patchVote();
    } else if (clicked) {
      setClicked(true);
    }
  };

  const downVote = (e) => {
    e.preventDefault();

    if (!clicked) {
      setClicked(true);
      setSingleArticle(() => {
        return { ...singleArticle, votes: singleArticle.votes - 1 };
      });
      const patchVote = () => {
        const patchBody = { inc_votes: -1 };
        updateArticleVotes(article_id, patchBody)
          .then((singleArticle) => {
            return singleArticle;
          })
          .catch((err) => {
            if (err) {
              setSingleArticle(() => {
                return { ...singleArticle, votes: singleArticle.votes + 1 };
              });
            }
          });
      };
      patchVote();
    } else if (clicked) {
      setClicked(true);
    }
  };

  return isLoading ? (
    <div className="loading">
      <h2>Loading...</h2>
      <ClipLoader />
    </div>
  ) : (
    <div id="single-article-page">
      <h1>{singleArticle.title}</h1>
      <h2>{singleArticle.author}</h2>

      <img className="single-article-img" src={singleArticle.article_img_url} />
      <div id="article-body-box">
      <p className="single-article-body">{singleArticle.body}</p>
      </div>
      <h3 className="vote-count">Votes: {singleArticle.votes}</h3>
      <button
        className="article-votes"
        article_id={singleArticle.article_id}
        onClick={upVote}
      >
        <ThumbUpOffAltIcon />
      </button>
      <button className="article-votes" onClick={downVote}>
        <ThumbDownOffAltIcon />
      </button>
      {(() => {
        if (singleArticle.comment_count === 0) {
          return <h3>No comments yet!</h3>;
        } else {
          return <h2>Show Comments ({singleArticle.comment_count})</h2>;
        }
      })()}
      <Comments
        article_id={singleArticle.article_id}
        key={singleArticle.article_id}
      />
    </div>
  );
}
