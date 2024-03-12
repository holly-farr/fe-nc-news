import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Articles from "./Components/Articles";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
