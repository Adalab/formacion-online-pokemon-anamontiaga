import React from "react";
import "../stylesheets/App.scss";
import { fetchPokemones } from "../services/fetchPokemones";
import Home from "./Home";
import PokeDetail from "./PokeDetail";
// import Background from "./Background";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemones: [],
      query: "",
      pokeDetail: []
    };
    this.getQuery = this.getQuery.bind(this);
    this.getPokemonDetail = this.getPokemonDetail.bind(this);
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
            fetch(pokeInfo.species.url)
              .then(response => response.json())
              .then(species => {
                const types = [];
                for (let item of pokeInfo.types) {
                  types.push(item.type.name);
                }

                const infoPokemon = {
                  name: pokemon.name,
                  image: pokeInfo.sprites.front_default,
                  types: types,
                  id: pokeInfo.id,
                  evolution: species.evolves_from_species ? species.evolves_from_species.name : ""
                };
                this.setState({ pokemones: [...this.state.pokemones, infoPokemon] });
              });
          });
      }
    });
  }

  getPokemonDetail() {
    fetchPokemones().then(data => {
      for (let pokemon of data.results) {
        fetch(pokemon.url)
          .then(response => response.json())
          .then(pokeInfoDetail => {
            fetch(pokeInfoDetail.species.url)
              .then(response => response.json())
              .then(species => {
                fetch(species.evolution_chain.url)
                  .then(response => response.json())
                  .then(evolutions => {
                    const infoAbilities = [];
                    for (let item of pokeInfoDetail.abilities) {
                      infoAbilities.push(item.ability.name);
                    }
                    const pokeDetail = {
                      name: pokeInfoDetail.name,
                      id: pokeInfoDetail.id,
                      image: pokeInfoDetail.sprites.front_default,
                      height: pokeInfoDetail.height,
                      weight: pokeInfoDetail.weight,
                      abilities: infoAbilities,
                      firstEvolutionName: evolutions.chain.species ? evolutions.chain.species.name : "",
                      secondEvolutionName: evolutions.chain.evolves_to[0] ? evolutions.chain.evolves_to[0].species.name : ""

                      // firstEvolutionName: evolutions.chain.evolves_to[0] ? evolutions.chain.evolves_to[0].species.name : "",
                      // secondEvolutionName: evolutions.chain.species ? evolutions.chain.species.name : ""
                    };
                    this.setState({ pokeDetail: [...this.state.pokeDetail, pokeDetail] });
                  });
              });
          });
      }
    });
  }

  getQuery(event) {
    const query = event.currentTarget.value;
    this.setState({ query: query });
  }

  render() {
    const { pokemones, query, pokeDetail } = this.state;

    return (
      <div className="app">
        {/* <Background /> */}

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Home getQuery={this.getQuery} query={query} pokemones={pokemones} getPokemonDetail={this.getPokemonDetail} />;
            }}
          />
          <Route
            path="/poke-detail/:pokeId"
            render={routerProps => {
              return <PokeDetail routerProps={routerProps} pokemones={pokemones} pokeDetail={pokeDetail} />;
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
