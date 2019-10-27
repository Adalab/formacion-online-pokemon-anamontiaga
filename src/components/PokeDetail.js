import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/PokeDetail.scss";

const PokeDetail = props => {
  const { routerProps, pokeDetail } = props;
  const pokeId = parseInt(routerProps.match.params.pokeId);
  const pokemon = pokeDetail.filter(item => item.id === pokeId);

  if (pokemon[0]) {
    const { name, id, image, height, weight, abilities, firstEvolutionName } = pokemon[0];
    return (
      <React.Fragment>
        <div className="poke--detail">
          <p className="poke-detail__id">ID/{id}</p>
          <div className="poke-detail__evolution--container">
            <div className="poke-detail__evolution--start">
              <img src={image} className="poke-detail__image" alt={name} />
              <p>{name}</p>
            </div>
            <div className="poke-detail__evolution--first">
              <img src={image} className="poke-detail__image-first-evolution" alt={firstEvolutionName} />
              <p>{firstEvolutionName}</p>
            </div>
            {/* <img src={} className="poke-detail__image-second-evolution" alt={} /> */}
          </div>
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
