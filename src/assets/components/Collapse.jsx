import React, { useState } from "react";
import "./Collapse.scss";

function Collapse(props) {
  const [isVisible, setIsVisible] = useState(false);

  const openCollapse = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-title">
        <h3>{props.title}</h3>
        <p onClick={openCollapse}>
          {isVisible ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </p>
      </div>
      <div className="collapse-content">
        {isVisible && <p>{props.texte}</p>}
      </div>
    </div>
  );
}

export default Collapse;
