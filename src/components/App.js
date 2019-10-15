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
      this.setState({ pokemones: data.results });
    });
  }

  render() {
    const { pokemones } = this.state;

    return (
      <div className="app">
        <ul className="pokemones">
          {pokemones.map((pokemon, index) => {
            return (
              <li className="pokemon" id={index} key={index}>
                <div className="card">
                  <h2>{pokemon.name}</h2>
                  <div className="card__img"></div>
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
