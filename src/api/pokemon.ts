import {APIResource, NamedAPIResource, PokemonClient} from 'pokenode-ts';

// getPokemonList returns a list of all pokemon
// TODO currently just prints stuff to console
export const getPokemonList = async (): Promise<
  void | NamedAPIResource[] | APIResource[]
> => {
  const api = new PokemonClient({
    cacheOptions: {maxAge: 500000, exclude: {query: false}},
  });
  return await api
    .listPokemonSpecies(0, 1200)
    .then(data => {
      return data.results;
    })
    .catch(error => console.error(error));
};
