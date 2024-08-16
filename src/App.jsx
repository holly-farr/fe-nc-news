import { Route, Routes } from "react-router-dom";
import "./App.css";

import { useState } from "react";
import UserContext from "./Components/UserContext";

import HomePage from "./Components/HomePage";
import NavigationBar from "./Components/NavigationBar";
import ArticlesList from "./Components/ArticlesList";
import ArticlePage from "./Components/ArticlePage";
import Users from "./Components/Users";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <>
      <UserContext.Provider
        value={{ currentUser: currentUser, setCurrentUser: setCurrentUser }}
      >
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
