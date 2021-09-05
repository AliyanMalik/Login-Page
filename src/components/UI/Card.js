import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div className="container">
      <div className="card">{props.children}</div>
    </div>
  );
};

export default Card;
