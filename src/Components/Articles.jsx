import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";

export default function Articles() {
  const [articles, setArticles] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://nc-news-backend-wuav.onrender.com/api/articles")
      .then(({ data: { articles } }) => {
        setArticles(articles);
        setIsLoading(false);
      });
  });

  if (isLoading) return <h3>Loading...</h3>;
  return (
    <div>
      <h1>Catch up with the latest news</h1>
      <ul className="articles">
        {articles.map((article) => (
          <ArticleCard article={article} key={article.article_id} />
        ))}
      </ul>
    </div>
  );
}
