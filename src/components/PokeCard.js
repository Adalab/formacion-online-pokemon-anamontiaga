import React from "react";
import "../stylesheets/PokeCard.scss";
import PropTypes from "prop-types";

const PokeCard = props => {
  const { pokemon, index } = props;
  return (
    <div className="card">
      <div className="card__img--container">
        <p className="id">ID /{index + 1} </p>
        <img src={pokemon.image} className="card__img" alt={pokemon.name}></img>
      </div>
      <h2>{pokemon.name}</h2>
      <ul className="card__types">
        {pokemon.types.map((type, typeIndex) => {
          return (
            <li className="card__type" key={typeIndex}>
              {type}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

PokeCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
  type: PropTypes.string,
  index: PropTypes.number.isRequired,
  typeIndex: PropTypes.number
};

export default PokeCard;
