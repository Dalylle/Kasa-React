import React from "react";
import Footer from "../../assets/components/Footer";
import Navbar from "../../assets/components/Navbar";
import "./Accommodation.scss";

function Accommodation() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="carrousel">
          <img src="./public/Background.jpg" alt="Image du carroussel" />
        </div>
        <div className="title-and-location">
          <div className="title-and-info">
            <h3>Paris center, on the romantic canal Saint-Martin</h3>
            <p>Paris, Ile-de-France</p>
            <div className="info">
              <p className="tag">Cozy</p>
              <p className="tag">Canal</p>
              <p className="tag">Paris 10</p>
            </div>
          </div>
          <div className="star-host">
            <div className="star-position">
              <span>
                <img src="./public/red-star.png" alt="étoile rouge" />
              </span>
              <span>
                <img src="/public/red-star.png" alt="étoile rouge" />
              </span>
              <span>
                <img src="/public/red-star.png" alt="étoile rouge" />
              </span>
              <span>
                <img src="/public/grey-star.png" alt="étoile grise" />
              </span>
              <span>
                <img src="/public/grey-star.png" alt="étoile grise" />
              </span>
            </div>
            <div className="info-host">
              <p>Alexandre Dumas</p>
              <img src="./public/Host.png" alt="photo de l'hote" />
            </div>
          </div>
        </div>
        <div className="description-and-equipements">
          <div className="title-content">
            <h4 className="title">Description</h4>
            <img
              src="/public/arrow-back.png"
              alt="fleche pour rabbatre ou deployer"
            />
          </div>
          <p className="description-and-equipements-content">
            bhfvb jhd ihe hv h irejc iejc iej idjv idjvid jvfk dfvifj kdj dvid
            kjcd vid vi bhfvb jhd ihe hv h irejc iejc iej idjv idjvid jvfk
            dfvifj kdj dvid kjcd vid vi bhfvb jhd ihe hv h irejc iejc iej idjv
            idjvid jvfk dfvifj kdj dvid kjcd vid vi
          </p>
          <div className="title-content">
            <h4 className="title">Equipements</h4>
            <img
              src="./public/arrow-back.png"
              alt="fleche pour rabbatre ou deployer"
            />
          </div>
          <p className="description-and-equipements-content">
            bhfvb jhd ihe hv h irejc iejc iej idjv idjvid jvfk dfvifj kdj dvid
            kjcd vid vi bhfvb jhd ihe hv h irejc iejc iej idjv idjvid jvfk
            dfvifj kdj dvid kjcd vid vi bhfvb jhd ihe hv h irejc iejc iej idjv
            idjvid jvfk dfvifj kdj dvid kjcd vid vi
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Accommodation;
