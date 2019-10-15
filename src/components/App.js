import React from "react";
import "../stylesheets/App.scss";
import { fetchPokemones } from "../services/fetchPokemones";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemones: [],
      image: []
    };
  }

  componentDidMount() {
    this.getPokemones();
  }

  getPokemones() {
    fetchPokemones().then(data => {
      this.setState({ pokemones: data.results });
    });
  }

  render() {
    const { pokemones, image } = this.state;

    return (
      <div className="app">
        <ul className="pokemones">
          {pokemones.map((pokemon, index) => {
            fetch(pokemon.url)
              .then(response => response.json())
              .then(url => {
                this.setState({ image: url.sprites.front_default });
              });

            return (
              <li className="pokemon" id={index} key={index}>
                <div className="card">
                  <h2>{pokemon.name}</h2>
                  <div className="card__img--container">
                    <img src={`${image}`} className="card__img" alt={pokemon.name}></img>
                  </div>
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
