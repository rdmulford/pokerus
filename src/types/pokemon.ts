import {NamedAPIResource, Pokemon} from 'pokenode-ts';

export interface PokemonListData {
  data?: NamedAPIResource[];
}

export interface PokemonData {
  data?: Pokemon;
}
