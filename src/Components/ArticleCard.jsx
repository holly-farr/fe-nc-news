export default function ArticleCard({ article }) {
  const { article_id, author, title, topic, votes, article_img_url } = article;

  return (
    <li className="article-card">
      <img src={article_img_url} />
      <h3> {title}</h3>
      <h4> {author}</h4>
      <p> {topic}</p>
      <p>{votes}</p>
    </li>
  );
}