import React from "react";
import "../stylesheets/App.scss";
import { fetchPokemones } from "../services/fetchPokemones";
import PokeList from "./PokeList.js";
import Filter from "./Filter.js";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemones: [],
      query: ""
    };
    this.getQuery = this.getQuery.bind(this);
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
  getQuery(event) {
    const query = event.currentTarget.value;
    this.setState({ query: query });
    // meterle aqui una condicional que compare los dos primeros caracteres de query y de myPokemon.name -tendría que subirlo por lifting-
  }

  render() {
    const { pokemones, query } = this.state;
    console.log(pokemones);

    return (
      <div className="app">
        <div className="background__triangle--right"></div>
        <div className="background__triangle--left"></div>
        <div className="background__circle">
          <div className="background__circle--right"></div>
          <div className="background__circle--left"></div>
        </div>
        <Filter getQuery={this.getQuery} query={query} />
        <PokeList pokemones={pokemones} query={query} />
      </div>
    );
  }
}

App.propTypes = {
  pokemones: PropTypes.arrayOf(PropTypes.object),
  query: PropTypes.string
};

export default App;
