import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Library, Feed, Trending, Player, Favourites } from "../screensIndex";
import "./home.module.css";
import { Sidebar } from "../../components/componentsIndex";

function Home() {
  return (
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
