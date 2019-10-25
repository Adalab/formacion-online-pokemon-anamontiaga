import React from "react";
import "../stylesheets/Filter.scss";
import PropTypes from "prop-types";

// Desde app y luego desde Home le pasamos la función que coge el valor del inputy lo sube al estado.

const Filter = props => {
  const { getQuery } = props;
  return (
    <div className="app__filter">
      <input type="text" className="app__filter--input" placeholder="Filtra pokemons por nombre..." onChange={getQuery} />
    </div>
  );
};

Filter.propTypes = {
  getQuery: PropTypes.func.isRequired
};

export default Filter;
