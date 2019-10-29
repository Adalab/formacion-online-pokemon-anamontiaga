import React from "react";
import "../stylesheets/Filter.scss";
import PropTypes from "prop-types";

const Filter = props => {
  const { getQuery } = props;
  return (
    <div className="app__filter">
      <input type="text" className="app__filter--input" onChange={getQuery} />
    </div>
  );
};

Filter.propTypes = {
  getQuery: PropTypes.func.isRequired
};

export default Filter;
