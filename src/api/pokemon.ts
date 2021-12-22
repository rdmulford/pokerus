import {PokemonClient} from 'pokenode-ts';

// getBerry returns berry info
// TODO currently just prints stuff to console
export const getPokemonList = async () => {
  const api = new PokemonClient({
    cacheOptions: {maxAge: 5000, exclude: {query: false}},
  });
  await api
    .listPokemons(0, 1200)
    .then(data => {
      return data.results;
    })
    .catch(error => console.error(error));
};
