import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserContext from "./Components/UserContext";
import Header from "./Components/Header";
import Articles from "./Components/Articles";
import ArticlePage from "./Components/ArticlePage";
import Users from "./Components/Users";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <>
      <UserContext.Provider
        value={{ currentUser: currentUser, setCurrentUser: setCurrentUser }}
      >
        <Header />
        <Routes>
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
