import { useEffect, useState } from "react";
import { getTopics } from "../../Utils/api";
import { Link } from "react-router-dom";

export default function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics()
      .then((topics) => {
        setTopics(topics);
      })
      .catch((topicsErr) => {
        console.log(topicsErr);
      });
  }, []);

  function getTopicArticles() {
    e.target.preventDefault();
  }

  return (
    <div>
      <h2>Explore Topics</h2>
      <ul className="topics-list">
        {topics.map((topic) => {
          return (
            <div className="topic-card">
              <li key="topic-card">
                <h3>{topic.slug}</h3>
                <h4>{topic.description}</h4>
                <button className="topic-button" onClick={getTopicArticles}>
                  View Articles
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
