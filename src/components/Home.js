import React, { Fragment } from "react";
import Logo from "../images/Logo.png";
import "../stylesheets/Home.scss";
import Filter from "./Filter";
import PokeList from "./PokeList";
import Footer from "./Footer";
import PropTypes from "prop-types";

const Home = props => {
  const { getQuery, query, pokemones, getPokemonDetail } = props;

  return (
    <Fragment>
      <img src={Logo} alt="" className="home-logo"></img>
      <Filter getQuery={getQuery} />
      <PokeList pokemones={pokemones} query={query} getPokemonDetail={getPokemonDetail} />
      <Footer />
    </Fragment>
  );
};

Home.propTypes = {
  getQuery: PropTypes.func.isRequired,
  pokemones: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string
};

export default Home;
