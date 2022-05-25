import React from "react";
import MovieCard from "./MovieCard";
import "./style.css";
function MovieList({ film, search, searchByRate }) {
  return (
    <div className="list-movie">
      {film
        .filter(
          (e) =>
            e.title.toLowerCase().includes(search) && e.rate >= searchByRate
        )
        .map((el, i) => (
          <MovieCard el={el} />
        ))}
    </div>
  );
}

export default MovieList;