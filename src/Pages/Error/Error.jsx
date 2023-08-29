import React from "react";
import Navbar from "../../assets/components/Navbar";
import Footer from "../../assets/components/Footer";
import "./Error.scss";

function Error() {
  return (
    <div>
      <Navbar />
      <div className="message-error">
        <h5>404</h5>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <div className="message-return">
        <p>Retourner sur la page d'accueil</p>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
