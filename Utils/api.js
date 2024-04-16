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

export const updateArticleVotes = (article_id, patchBody) => {
  return api
    .patch(`/articles/${article_id}`, patchBody)
    .then(({ data: { article } }) => {
      return article[0]
    });
};

export const getAllUsers = () => {
  return api.get("/users").then(({ data: { users } }) => {
    return users;
  });
};
