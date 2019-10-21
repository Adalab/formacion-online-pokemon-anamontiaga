import React from "react";
import "../stylesheets/PokeCard.scss";
import PropTypes from "prop-types";

const PokeCard = props => {
  const { pokemon } = props;
  return (
    <div className="card">
      <div className="card__img--container">
        <p className="card__id">ID /{pokemon.id} </p>
        <img src={pokemon.image} className="card__img" alt={pokemon.name}></img>
      </div>
      <div className="card__info--container">
        <h2 className="card__info--name">{pokemon.name}</h2>
        <ul className="card__info--types">
          {pokemon.types.map((type, typeIndex) => {
            return (
              <li className="card__info--type" key={typeIndex}>
                {type}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

PokeCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
  type: PropTypes.string,
  typeIndex: PropTypes.number
};

export default PokeCard;
