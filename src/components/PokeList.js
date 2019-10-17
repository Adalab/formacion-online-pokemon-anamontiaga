import React from "react";
import "../stylesheets/PokeList.scss";
import PropTypes from "prop-types";
import PokeCard from "./PokeCard.js";

const PokeList = props => {
  const { pokemones } = props;
  return (
    <ul className="pokemones">
      {pokemones.map((pokemon, index) => {
        return (
          <li className="pokemon" id={index + 1} key={index + 1}>
            <PokeCard pokemon={pokemon} index={index} />
          </li>
        );
      })}
    </ul>
  );
};

PokeList.propTypes = {
  pokemones: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PokeList;
