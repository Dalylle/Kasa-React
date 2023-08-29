import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="card">
      <Link to="accommodation">
        <div className="card-title">Titre de la location</div>
      </Link>
    </div>
  );
}

export default Card;
