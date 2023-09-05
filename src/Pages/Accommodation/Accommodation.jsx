import React from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import accommodations from "@/assets/data";
import "./Accommodation.scss";

function Accommodation() {
  const { id } = useParams();

  // search for the id in data
  const data = accommodations.find((a) => a.id === id);

  const ratingsRed = [];
  for (let i = 0; i < parseInt(data.rating) - 1; i++) {
    ratingsRed.push(
      <span key={i}>
        <img src="/red-star.png" alt="étoile rouge" />
      </span>
    );
  }

  const ratingsgrey = [];
  for (let i = parseInt(data.rating) - 1; i < 5; i++) {
    ratingsgrey.push(
      <span key={i}>
        <img src="/grey-star.png" alt="étoile grise" />
      </span>
    );
  }

  const equipements = data.equipments.join(", ");

  return (
    <div>
      <Navbar />
      <div>
        <div className="carrousel">
          {data.pictures.map((picture) => (
            <img src={picture} alt="Image du carroussel" key={picture} />
          ))}
        </div>
        <div className="title-and-location">
          <div className="title-and-info">
            <h3>{data.title}</h3>
            <p>{data.location}</p>
            <div className="info">
              {data.tags.map((tag) => (
                <p className="tag" key={tag}>
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className="star-host">
            <div className="star-position">
              {ratingsRed}
              {ratingsgrey}
            </div>
            <div className="info-host">
              <p>{data.host.name}</p>
              <img src={data.host.picture} alt="photo de l'hote" />
            </div>
          </div>
        </div>
        <div className="description-and-equipements">
          <div>
            <Collapse title="Description" texte={data.description} />
          </div>
          <div>
            <Collapse title="Equipements" texte={equipements} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Accommodation;
