import React from "react";
import "../stylesheets/PokeList.scss";
import PropTypes from "prop-types";
import PokeCard from "./PokeCard.js";
import { Link } from "react-router-dom";

// Le pasamos el estado y filtramos el array de Pokemones del estado para que si el valor del input está vacío me devuelva true (todos) y si no me devuelva aquellos pokemones (Mypokemon) cuyos dos primeros caracteres coincidan con los dos caracteres de la búsqueda.
// Para pintar, recortamos 25 elementos y los mapeamos para pintarlos.
const PokeList = props => {
  const { pokemones, query } = props;
  return (
    <ul className="pokemones">
      {pokemones
        .filter(myPokemon => {
          return query === "" ? true : myPokemon.name.substr(0, 2).toUpperCase() === query.substr(0, 2).toUpperCase();
        })
        .slice(0, 25)
        .map(pokemon => {
          return (
            <li className="pokemones__item" id={pokemon.id} key={`key${pokemon.id}`}>
              <Link to={`/poke-detail/${pokemon.id}`} className="pokemon__link">
                <PokeCard pokemon={pokemon} />
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
