import { useEffect, useState } from "react";

import ArticleCard from "./ArticleCard";
import { getAllArticles, getArticlesByTopic } from "../../Utils/api";

import FilterListIcon from "@mui/icons-material/FilterList";
import ClipLoader from "react-spinners/ClipLoader";

export default function ArticlesList() {
  const [articleList, setArticleList] = useState([]);
  const [topic, setTopic] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((articles) => {
      setArticleList(articles);
      setIsLoading(false);
    });
  }, []);

  function handleSetTopic(e) {
    e.preventDefault();

    const topic = e.target.value;

    setTopic(topic);

    getArticlesByTopic(topic).then((topicArticles) => {
      setIsLoading(true);
      setArticleList(topicArticles);
      setIsLoading(false);
    });
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
          <FilterListIcon id="filters-icon" />
        </label>
        <select
          id="topic-filters"
          onChange={handleSetTopic}
          defaultValue="All Articles"
        >
          <option value="">All Articles</option>
          <option value="cooking">Cooking</option>
          <option value="coding">Coding</option>
          <option value="football">Football</option>
        </select>
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
