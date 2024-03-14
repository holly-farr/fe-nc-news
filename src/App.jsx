import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Articles from "./Components/Articles";
import ArticlePage from "./Components/ArticlePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        </Routes> 
    </>
  );
}

export default App;
