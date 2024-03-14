import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

export default function ArticlePage() {
  const { article_id } = useParams();

  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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

  return isLoading ? (
    <h2>Loading..</h2>
  ) : (
    <div className="single-article-page">
      <h1>{singleArticle.title}</h1>
      <h2>{singleArticle.author}</h2>
      <h3>{singleArticle.created_at.slice(0, 10)}</h3>
      <img className="single-article-img" src={singleArticle.article_img_url} />
      <p className="single-article-body">{singleArticle.body}</p>
      <div className="article-votes-comments">
        <h3>Votes: {singleArticle.votes}</h3>
        <h3>Comments: {singleArticle.comment_count}</h3>
      </div>
      <Comments
        article_id={singleArticle.article_id}
        key={singleArticle.article_id}
      />
    </div>
  );
}
