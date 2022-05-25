import React from "react";
import "./style.css";
function Rate({ rate, setRats, searchByRate }) {
  const Rate = (x) => {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        arr.push(<span onClick={() => setRats(i)}> ★</span>);
      } else {
        arr.push(<span onClick={() => setRats(i)}>☆</span>);
      }
    }
    return arr;
  };

  return <div>{Rate(rate)}</div>;
}

export default Rate;