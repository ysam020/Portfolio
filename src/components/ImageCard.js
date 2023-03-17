import React from "react";

function ImageCard(props) {
  return (
    <div>
      <div className="card-img"></div>
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default ImageCard;
