import React from "react";
import Navbar from "../../assets/components/Navbar";
import Footer from "../../assets/components/Footer";
import "./About.scss";

function About() {
  return (
    <div>
      <Navbar />
      <div className="photo">
        <img src="about-image.jpg" alt="image page About" />
      </div>
      <div className="about-container">
        <div className="about">
          <div className="title-about">
            <h4>Fiabilité</h4>
            <img
              src="./public/arrow-back.png"
              alt="fleche pour rabbatre ou deployer"
            />
          </div>
          <p className="about-content">
            jojoooo jojooo jojojojo jooooojoooooo jojojooooo jojojojojooooo
            jojojojo
          </p>
        </div>
        <div className="about">
          <div className="title-about">
            <h4>Respect</h4>
            <img
              src="./public/arrow-back.png"
              alt="fleche pour rabbatre ou deployer"
            />
          </div>
          <p className="about-content">
            jojoooo jojooo jojojojo jooooojoooooo jojojooooo jojojojojooooo
            jojojojo
          </p>
        </div>
        <div className="about">
          <div className="title-about">
            <h4>Service</h4>
            <img
              src="./public/arrow-back.png"
              alt="fleche pour rabbatre ou deployer"
            />
          </div>
          <p className="about-content">
            jojoooo jojooo jojojojo jooooojoooooo jojojooooo jojojojojooooo
            jojojojo
          </p>
        </div>
        <div className="about">
          <div className="title-about">
            <h4>Sécurité</h4>
            <img
              src="./public/arrow-back.png"
              alt="fleche pour rabbatre ou deployer"
            />
          </div>
          <p className="about-content">
            jojoooo jojooo jojojojo jooooojoooooo jojojooooo jojojojojooooo
            jojojojo
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
