import React from "react";
import "./style.css";
import Rate from "./Rate";
function MovieCard({ el: { posterUrl, title, description, rate } }) {
  return (
    <div className="Card">
      <img src={posterUrl} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <Rate rate={rate} />
      <span> {rate} </span>
    </div>
  );
}
export default MovieCard;