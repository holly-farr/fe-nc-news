import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <h3>{singleArticle.created_at}</h3>
      <img className="single-article-img" src={singleArticle.article_img_url} />
      <p className="single-article-body">{singleArticle.body}</p>
    </div>
  );
}
