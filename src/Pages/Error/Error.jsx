import React from "react";
import Navbar from "../../assets/components/Navbar";
import Footer from "../../assets/components/Footer";
import "./Error.scss";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div>
      <Navbar />
      <div className="message-error">
        <h5>404</h5>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <NavLink to="/" className="message-return">
        <p>Retourner sur la page d'accueil</p>
      </NavLink>
      <Footer />
    </div>
  );
}

export default Error;
