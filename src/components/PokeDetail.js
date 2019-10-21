import React from "react";
import "../stylesheets/PokeDetail.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PokeDetail = props => {
  const { routerProps, pokemones } = props;
  const pokeId = parseInt(routerProps.match.params.pokeId);
  const pokemon = pokemones.filter(item => item.id === pokeId);

  if (pokemon[0]) {
    const { name, id, image, height, weight, abilities } = pokemon[0];
    return (
      <React.Fragment>
        <div className="poke--detail">
          <h2 className="poke-detail__name">{name}</h2>
          <p className="poke-detail__id">ID/{id}</p>
          <img src={image} className="poke-detail__image" alt={name} />
          <p className="poke-detail__height">Height: {height} cm</p>
          <p className="poke-detail__weight">Weight: {weight} gr</p>

          <ul className="poke-detail__abilities">
            {" "}
            Abilities:
            {abilities.map((ability, abilityIndex) => {
              return (
                <li className="poke-detail__ability" key={abilityIndex}>
                  {ability}
                </li>
              );
            })}
          </ul>
        </div>

        <Link to="/" className="poke--detail__back">
          {"<"} Volver{" "}
        </Link>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Chacho, ese no lo tienes</p>
        <Link to="/" className="poke--detail__back__error">
          {"<"} Volver{" "}
        </Link>
      </React.Fragment>
    );
  }
};

PokeDetail.propTypes = {
  routerProps: PropTypes.object.isRequired,
  pokemones: PropTypes.arrayOf(PropTypes.object)
};

export default PokeDetail;
