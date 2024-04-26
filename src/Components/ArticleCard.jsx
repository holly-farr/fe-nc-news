import { Link } from "react-router-dom";

export default function ArticleCard({ article, topic }) {
  return (
    <li className="article-card">
      <img id="article-card-img" src={article.article_img_url} />
      <h3> {article.title}</h3>
      <h4>Written by {article.author}</h4>
      <h4>Topic: {article.topic}</h4>
      <Link to={`/articles/${article.article_id}`}>
        <button className="card-button">Read Article</button>
      </Link>
    </li>
  );
}
