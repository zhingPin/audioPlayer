import { Library, Feed, Trending, Player, Favourites } from "../pages";
import { Sidebar } from "../components/componentsIndex";
import React from "react";
import "../styles/home.module.css";

export default function Home() {
  return (
    <div className="main-body">
      <Sidebar />

      <Library />

      <Feed />

      <Trending />

      <Player />

      <Favourites />
    </div>
  );
}
