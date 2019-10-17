const endpoint = "https://pokeapi.co/api/v2/pokemon/?offset=25&limit=25";

const fetchPokemones = () => {
  return fetch(endpoint).then(response => response.json());
};

export { fetchPokemones };
