import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";

export default function Articles() {
  const [isLoading, setIsLoading] = useState(true);
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    axios
      .get("https://nc-news-backend-wuav.onrender.com/api/articles")
      .then(({ data: { articles } }) => {
        setArticleList(articles);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      <h1>Catch up with the latest news</h1>
      <ul className="articles">
        {articleList.map((article) => (
          <ArticleCard article={article} key={article.article_id} />
        ))}
      </ul>
    </div>
  );
}
