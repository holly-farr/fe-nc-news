import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-backend-wuav.onrender.com/api",
});

export const getAllArticles = () => {
  return api.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};

export const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data: { article } }) => {
    return article[0];
  });
};

export const getArticleComments = (article_id) => {
  return api
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const postArticleComment = (article_id, body) => {
  return api
    .post(`/articles/${article_id}/comments`, body)
    .then(({ data: { comment } }) => {
      return comment.body;
    });
};

export const updateArticleVotes = (article_id, patchBody) => {
  return api
    .patch(`/articles/${article_id}`, patchBody)
    .then(({ data: { article } }) => {
      return article[0];
    });
};

export const getAllUsers = () => {
  return api.get("/users").then(({ data: { users } }) => {
    return users;
  });
};

export const getArticlesByTopic = (topic) => {
  return api.get(`/articles?topic=${topic}`)
  .then(({ data: { articles } }) => {
    return articles;
  });
};
