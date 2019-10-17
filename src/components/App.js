import React from "react";
import "../stylesheets/App.scss";
import PokeList from "./PokeList.js";
import { fetchPokemones } from "../services/fetchPokemones";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemones: [],
      query: ""
    };
  }

  componentDidMount() {
    this.getPokemones();
  }

  getPokemones() {
    fetchPokemones().then(data => {
      for (let pokemon of data.results) {
        fetch(pokemon.url)
          .then(response => response.json())
          .then(pokeInfo => {
            const types = [];
            for (let item of pokeInfo.types) {
              types.push(item.type.name);
            }
            const infoPokemon = {
              name: pokemon.name,
              image: pokeInfo.sprites.front_default,
              types: types
            };
            this.setState({ pokemones: [...this.state.pokemones, infoPokemon] });
            // si pokemones está vacío, para qué repetirlo? ¿porque estamos metiendo un objeto dentro de un array?
          });
      }
    });
  }

  render() {
    const { pokemones, query } = this.state;

    return (
      <div className="app">
        <PokeList pokemones={pokemones} query={query} />
      </div>
    );
  }
}

App.propTypes = {
  pokemones: PropTypes.arrayOf(PropTypes.object),
  query: PropTypes.string.isRequired
};

export default App;
