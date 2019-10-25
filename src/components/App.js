import React from "react";
import "../stylesheets/App.scss";
import { fetchPokemones } from "../services/fetchPokemones";
import Home from "./Home";
import PokeDetail from "./PokeDetail";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemones: [],
      images: [],
      query: ""
    };
    this.getQuery = this.getQuery.bind(this);
  }

  componentDidMount() {
    this.getPokemones();
  }

  // Recorrro el array y hago fetch en los url que tienen el resto de la información.
  // A su vez, al llegar a los types, como puede haber varios, los guardo en un array.
  // en el objeto infoPokemon guardo el resto de información y la formateo en propidades del objeto que luego subo al estado. Como es un objeto, abro el estado con un spread y lo meto dentro.
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
            const infoAbilities = [];
            for (let item of pokeInfo.abilities) {
              infoAbilities.push(item.ability.name);
            }
            const infoPokemon = {
              name: pokemon.name,
              image: pokeInfo.sprites.front_default,
              types: types,
              id: pokeInfo.id,
              height: pokeInfo.height,
              weight: pokeInfo.weight,
              abilities: infoAbilities
            };
            const images = {
              defaultImage: pokeInfo.sprites.back_default,
              backFemale: pokeInfo.sprites.back_female,
              backShinny: pokeInfo.sprites.back_shiny,
              backShinnyFemale: pokeInfo.sprites.back_shiny_female,
              frontDefault: pokeInfo.sprites.front_default,
              frontFemale: pokeInfo.sprites.front_female,
              frontShinny: pokeInfo.sprites.front_shiny,
              frontShinyFemale: pokeInfo.sprites.front_shiny_female
            };

            this.setState({ pokemones: [...this.state.pokemones, infoPokemon], images: [...this.state.images, images] });
          });
      }
    });
  }

  // Función que coge el valor que escribo en el input y lo sube al estado (string=string).
  getQuery(event) {
    const query = event.currentTarget.value;
    this.setState({ query: query });
  }

  // Desestructuring con el estado.
  // Pintamos el fondo de la app.
  // Metemos la ruta a la Home.
  render() {
    const { pokemones, query } = this.state;

    return (
      <div className="app">
        <div className="background__triangle">
          <div className="background__triangle--right"></div>
          <div className="background__triangle--left"></div>
        </div>
        <div className="background__circle">
          <div className="background__circle--right"></div>
          <div className="background__circle--left"></div>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Home getQuery={this.getQuery} query={query} pokemones={pokemones} />;
            }}
          />
          <Route
            path="/poke-detail/:pokeId"
            render={routerProps => {
              return <PokeDetail routerProps={routerProps} pokemones={pokemones} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  pokemones: PropTypes.arrayOf(PropTypes.object),
  query: PropTypes.string
};

export default App;
