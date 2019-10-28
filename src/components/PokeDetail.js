import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/PokeDetail.scss";

const PokeDetail = props => {
  const { routerProps, pokeDetail, pokemones } = props;
  const pokeId = parseInt(routerProps.match.params.pokeId);

  const pokemon = pokeDetail.filter(item => item.id === pokeId);

  if (pokemon[0]) {
    const { name, id, image, height, weight, abilities, firstEvolutionName, secondEvolutionName } = pokemon[0];
    const itemFirst = Evolution => (pokemones.find(item => item.name === Evolution) ? pokemones.find(item => item.name === Evolution).image : null);
    const nullEvolves = firstEvolutionName === "" ? "hide" : "";
    return (
      <React.Fragment>
        <Link to="/" className="poke--detail__back">
          {"<"}{" "}
        </Link>
        <div className="poke--detail">
          <div className="poke-detail__intro">{name}</div>
          <img src={image} className="poke-detail__image" alt={name} />
          <div className="poke-detail__profile--intro">Profile</div>
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
          <p className="poke-detail__id">ID/{id}</p>
          <div className="poke-detail__evolution--intro">Evolutions</div>
          <div className="poke-detail__evolution--container">
            <div className={`poke-detail__evolution--first ${nullEvolves}`}>
              <img src={itemFirst(firstEvolutionName)} className="poke-detail__image-first-evolution" alt={firstEvolutionName} />
              <p>{firstEvolutionName}</p>
            </div>
            <div className="poke-detail__evolution--second">
              <img src={itemFirst(secondEvolutionName)} className="poke-detail__image-second-evolution" alt={secondEvolutionName} />
              <p>{secondEvolutionName}</p>
            </div>
            <div className="poke-detail__evolution--start">
              <img src={image} className="poke-detail__image" alt={name} />
              <p>{name}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Paciencia que ya llego</p>
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
