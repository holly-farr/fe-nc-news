import { useEffect, useState } from "react";

import ArticleCard from "./ArticleCard";
import {getAllArticles} from "../../Utils/api";

import ClipLoader from "react-spinners/ClipLoader";

export default function Articles({ articleList, setArticleList }) {
  const [isLoading, setIsLoading] = useState(true);
  const [topic, setTopic] = useState("");

  useEffect(() => {
    getAllArticles().then((articles) => {
      setArticleList(articles);
      setIsLoading(false);
    });
  }, []);

  function handleSetTopic(e) {
    setTopic(e.target.value);
  }

  return isLoading ? (
    <div className="loading">
      <h2>Loading...</h2>
      <ClipLoader />
    </div>
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
