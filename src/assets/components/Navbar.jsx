import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src="Logo.png" alt="Logo Kasa" />
        </div>
        {/* TODO apply relevant class */}
        <Link to="/" className={location.pathname == "/" ? "active" : ""}>
          <div>Accueil</div>
        </Link>
        {/* TODO conditional active class here as well */}
        <Link to={"/about"}>
          <div>A propos</div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
