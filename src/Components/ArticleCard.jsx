import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  const { article_id, author, title, topic, votes, article_img_url } = article;

  return (
    <li className="article-card">
      <img className="article-card-img" src={article_img_url} />
      <h3> {title}</h3>
      <h4> {author}</h4>
      <h5> {topic}</h5>
      <h4>{votes}</h4>
      <Link to={`/articles/${article_id}`}>
        <button className="read-article-button">Read Article</button>
      </Link>
    </li>
  );
}
