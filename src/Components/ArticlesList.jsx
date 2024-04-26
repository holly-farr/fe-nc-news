import { useEffect, useState } from "react";

import ArticleCard from "./ArticleCard";
import { getAllArticles } from "../../Utils/api";

import FilterListIcon from "@mui/icons-material/FilterList";
import ClipLoader from "react-spinners/ClipLoader";

export default function ArticlesList() {
  const [isLoading, setIsLoading] = useState(true);
  const [topic, setTopic] = useState("");
  const [articleList, setArticleList] = useState([]);

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
      <div className="topic-filters">
        <label>
          <FilterListIcon id="filters-icon" />{" "}
        </label>
        <select value={topic} onChange={handleSetTopic}>
          <option value="">All Articles</option>
          <option value="Cooking">Cooking</option>
          <option value="Coding">Coding</option>
          <option value="Football">Football</option>
        </select>{" "}
        <button
          id="filter-articles-button"
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
