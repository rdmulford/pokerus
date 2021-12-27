import {NamedAPIResource, PokemonClient} from 'pokenode-ts';
import {PokemonListData} from 'types/pokemon';

// getPokemonList returns a list of all pokemon
export const getPokemonList = async (): Promise<PokemonListData> => {
  const api = new PokemonClient({
    cacheOptions: {maxAge: 500000, exclude: {query: false}},
  });
  return await api
    .listPokemonSpecies(0, 1200)
    .then(data => {
      return data.results as NamedAPIResource[];
    })
    .catch(error => {
      console.error(error);
      return undefined;
    });
};
