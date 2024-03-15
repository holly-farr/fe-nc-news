import { Link } from "react-router-dom";

export default function ArticleCard({ article, topic }) {

  return (
    <li className="article-card">
      <img className="article-card-img" src={article.article_img_url} />
      <h3> {article.title}</h3>
      <h4> {article.author}</h4>
      <h5> {article.topic}</h5>
      <h4> {article.votes}</h4>
      <Link to={`/articles/${article.article_id}`}>
        <button className="read-article-button">Read Article</button>
      </Link>
    </li>
  )
}
