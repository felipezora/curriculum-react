import React from "react";
import "../styles/styles.css";

const TextCard = ({ title, text }) => {
  return (
    <div className="bg-gray-200 rounded-lg border-2 border-black justify-self-center w-3/4 my-1">
      <span className="fuenteTitulo">{title}</span>
      <p className="fuenteBase">{text}</p>
    </div>
  );
};

export default TextCard;