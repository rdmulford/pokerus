import {NamedAPIResource, Pokemon} from 'pokenode-ts';

export interface PokemonListData {
  data?: NamedAPIResource[];
  error?: string;
}

export interface PokemonData {
  data?: Pokemon;
  error?: string;
}
