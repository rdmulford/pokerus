import {NamedAPIResource, PokemonClient} from 'pokenode-ts';
import {PokemonListData, PokemonData} from 'types/pokemon';

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

export const getPokemon = async (name: string): Promise<PokemonData> => {
  console.log(name);
  const api = new PokemonClient({
    cacheOptions: {maxAge: 500000, exclude: {query: false}},
  });
  return await api
    .getPokemonByName(name)
    .then(data => {
      return data as PokemonData;
    })
    .catch(error => {
      console.error(error);
      return undefined;
    });
};
