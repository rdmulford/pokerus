import {NamedAPIResource, Pokemon} from 'pokenode-ts';

export type PokemonListData = NamedAPIResource[] | undefined;
export type PokemonData = Pokemon | undefined;
export interface Stat {
  name: string;
  value: number;
  max: number;
  min: number;
}
