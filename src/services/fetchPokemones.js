const endpoint = "https://pokeapi.co/api/v2/pokemon/?offset=25&limit=25";

// image: Primer fetch a results[i].url
// y encadenar a objeto (sprites.front_default)

const fetchPokemones = () => {
  return fetch(endpoint).then(response => response.json());
};

export { fetchPokemones };
