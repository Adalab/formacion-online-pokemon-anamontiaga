import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/PokeList.scss";
import PropTypes from "prop-types";
import PokeCard from "./PokeCard.js";

const PokeList = props => {
  const { pokemones, query, getPokemonDetail } = props;
  return (
    <ul className="pokemones">
      {pokemones
        .filter(myPokemon => {
          return query === "" ? true : myPokemon.name.substr(0, 2).toUpperCase() === query.substr(0, 2).toUpperCase();
        })
        .slice(0, 25)
        .map((pokemon, index) => {
          return (
            <li className="pokemones__item" id={pokemon.id} key={index + 1}>
              <Link to={`/poke-detail/${pokemon.id}`} className="pokemon__link" onClick={getPokemonDetail}>
                <PokeCard pokemon={pokemon} index={index} />
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

PokeList.propTypes = {
  pokemones: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string
};

export default PokeList;
