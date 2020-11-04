import React, { useState, useEffect } from "react";
import api from "./services/api";

import Header from "./Components/Header/header";
import Movie from "./Components/Movie/movie";
import Search from "./Components/Search/search";
import "./global.css";

function App() {
  useEffect(() => {
    async function searchMovie() {
      const response = await api.get("");

      //setMovies(response.data);
    }

    searchMovie();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <Search />
        <Movie />
      </div>
    </div>
  );
}

export default App;
