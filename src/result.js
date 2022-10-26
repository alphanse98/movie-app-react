import React from "react";
import "./result.css";

function Result(props) {
  let imgurl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="box">
      <img src={`${imgurl}${props.ele.backdrop_path}`}></img>
      <h2>{props.ele.title}</h2>
      <h5>
        {props.ele.release_date}
        <span>Viwes{props.ele.vote_count} </span>
      </h5>
    </div>
  );
}

export default Result;
