import React from "react";
import "../stylesheets/PokeType.scss";

const PokeType = props => {
  const { type, typeIndex } = props;
  return (
    <li className={`card__info--type ${type}`} key={typeIndex}>
      {type}
    </li>
  );
};
export default PokeType;
