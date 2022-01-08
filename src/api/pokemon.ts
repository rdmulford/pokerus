import {NamedAPIResource, PokemonClient} from 'pokenode-ts';
import {PokemonData, PokemonListData} from 'types/pokemon';

// initialize our client
const api = new PokemonClient({
  cacheOptions: {maxAge: 500000, exclude: {query: false}},
});

// getPokemonList returns a list of all pokemon
export const getPokemonList = async (): Promise<PokemonListData> => {
  return await api
    .listPokemonSpecies(0, 1200)
    .then(data => {
      return {
        data: data.results as NamedAPIResource[],
      };
    })
    .catch((error: Error) => {
      console.log(error);
      return {
        error: error.message,
      };
    });
};

// getPokemon returns individual pokemon data
export const getPokemon = async (name: string): Promise<PokemonData> => {
  console.log(name);
  return await api
    .getPokemonByName(name)
    .then(data => {
      return {
        data,
      };
    })
    .catch((error: Error) => {
      console.log(error);
      return {
        error: error.message,
      };
    });
};
