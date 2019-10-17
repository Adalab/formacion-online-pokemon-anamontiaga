import React from "react";
import "../stylesheets/App.scss";
import { fetchPokemones } from "../services/fetchPokemones";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemones: []
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
    const { pokemones } = this.state;

    return (
      <div className="app">
        <ul className="pokemones">
          {pokemones.map((pokemon, index) => {
            return (
              <li className="pokemon" id={index + 1} key={index + 1}>
                <div className="card">
                  <div className="card__img--container">
                    <p className="id">ID /{index + 1} </p>
                    <img src={pokemon.image} className="card__img" alt={pokemon.name}></img>
                  </div>
                  <h2>{pokemon.name}</h2>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
