import React from "react";
import "./CardsContainer.scss";
import Card from "./Card";
import { useEffect, useState } from "react";
import data from "../../../public/data";

function CardsContainer() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    setMyData(data);
  }, []);

  return (
    <div className="cards-container">
      {myData.map((card) => (
        <Card title={card.title} cover={card.cover} />
      ))}
    </div>
  );
}

export default CardsContainer;
