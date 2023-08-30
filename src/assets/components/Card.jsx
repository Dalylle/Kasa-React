import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card">
      <Link to="accommodation">
        <img src={props.cover} alt="" />
        <div className="card-title">{props.title}</div>
      </Link>
    </div>
  );
}

export default Card;
