import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";

export default function Articles({ articleList, setArticleList }) {
  const [isLoading, setIsLoading] = useState(true);
  const [topic, setTopic] = useState("");

  useEffect(() => {
    axios
      .get("https://nc-news-backend-wuav.onrender.com/api/articles")
      .then(({ data: { articles } }) => {
        setArticleList(articles);
        setIsLoading(false);
      });
  }, []);

  function handleSetTopic(e) {
    setTopic(e.target.value);
  }

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      <h1>Catch up with the latest news</h1>
      <div className="topic-filters">
        <label>Filter by topic</label>
        <select value={topic} onChange={handleSetTopic}>
          <option value="">-all-</option>
          <option value="Cooking">Cooking</option>
          <option value="Coding">Coding</option>
          <option value="Football">Football</option>
        </select>{" "}
        <button
          className="filter-articles-button"
          onClick={() => {
            setTopic("");
          }}
        >
          Clear Filters
        </button>
      </div>
      <ul className="articles-list">
        {articleList.map((article) => (
          <ArticleCard
            article={article}
            key={article.article_id}
            topic={topic}
          />
        ))}
      </ul>
    </div>
  );
}
