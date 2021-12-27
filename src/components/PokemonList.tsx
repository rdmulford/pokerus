import React from 'react';
import {getPokemonList} from '../api/pokemon';
import {FlatList, Pressable, Center, Box, Text, Image} from 'native-base';
import { PokemonCard } from './PokemonCard';
import {getPokeNum, titleCaseWord} from '../utils/utils';
import {PokemonListData} from '../types/pokemon';
import {NamedAPIResource} from 'pokenode-ts';
import styled from 'styled-components/native';
import { ItemClick } from 'native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types';

const PokemonList = () => {
  const [pokemon, setPokemon] = React.useState([] as Array<NamedAPIResource>);

  const StyledFlatList = styled(FlatList).attrs(() => ({
    contentContainerStyle: {
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  }))``;

  const fetchPokemon = async () => {
    const data: PokemonListData = await getPokemonList();
    if (data === undefined) {
      return;
    }
    const pokemons: NamedAPIResource[] = data.map(mon => ({
      name: mon.name,
      url: mon.url,
      id: Math.random().toString(12).substring(0),
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokeNum(
        mon.url,
      )}.png`,
    }));
    setPokemon(pokemons);
  };

  React.useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <Box>
      {pokemon ? (
        <StyledFlatList
          numColumns={3}
          m={'8px'}
          data={pokemon}
          renderItem={({item}) => 
            <PokemonCard name={item.name} url={item.url} img={item.img} id={item.id}/>
          }
        />
      ) : (
        <Text>Uh Oh!</Text>
      )}
    </Box>
  );
};

export default PokemonList;
