import {NamedAPIResource, PokemonClient, PokemonStat} from 'pokenode-ts';
import {PokemonListData, PokemonData, Stat} from 'types/pokemon';

// initialize our client
const api = new PokemonClient({
  cacheOptions: {maxAge: 500000, exclude: {query: false}},
});

// getPokemonList returns a list of all pokemon
export const getPokemonList = async (): Promise<PokemonListData> => {
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

// getPokemon returns individual pokemon data
export const getPokemon = async (id: number): Promise<PokemonData> => {
  console.log(id);
  return await api
    .getPokemonById(id)
    .then(data => {
      return data as PokemonData;
    })
    .catch(error => {
      console.error(error);
      return undefined;
    });
};

export const formatStats = (stats_array: Array<PokemonStat>): Object => {
  var stats: Stat[] = [];
  for (let stat of stats_array) {
    var stat_formatted: Stat = {name: 'not_found', value: 0, max: 0, min: 0};

    stat_formatted.name = stat.stat.name;
    stat_formatted.value = stat.base_stat;
    if (stat_formatted.name === 'hp') {
      stat_formatted.min = Math.trunc(
        0.01 * Math.trunc(2 * stat.base_stat * 100) + 110,
      );
      stat_formatted.max = Math.trunc(stat.base_stat * 2 + 204);
    } else {
      stat_formatted.min = Math.trunc(
        (0.01 * Math.trunc(2 * stat.base_stat * 100) + 5) * 0.9,
      );
      stat_formatted.max = Math.trunc((stat.base_stat * 2 + 99) * 1.1);
    }

    stats.push(stat_formatted);
  }
  return stats;
};

export const formatStatName = (statname: String) => {
  switch (statname) {
    case 'hp':
      return 'HP';
    case 'attack':
      return 'Attack';
    case 'defense':
      return 'Defense';
    case 'special-attack':
      return 'Sp. Atk';
    case 'special-defense':
      return 'Sp. Def';
    case 'speed':
      return 'Speed';
    default:
      return 'Unknown!';
  }
};
