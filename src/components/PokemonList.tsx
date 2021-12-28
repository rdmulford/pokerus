import React from 'react';
import {getPokemonList} from '../api/pokemon';
import {FlatList, Box, Text} from 'native-base';
import {PokemonCard} from './PokemonCard';
import {getPokeNum} from '../utils/utils';
import {PokemonListData} from '../types/pokemon';
import {NamedAPIResource} from 'pokenode-ts';
import styled from 'styled-components/native';
import {Image} from 'react-native';
// @ts-ignore
import {DEV_MODE} from 'react-native-dotenv';

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
    console.log(DEV_MODE);
    const pokemons: NamedAPIResource[] = data.map(mon => ({
      name: mon.name,
      url: mon.url,
      id: Math.random().toString(12).substring(0),
      img:
        DEV_MODE === 'true'
          ? Image.resolveAssetSource(require('../assets/1.png')).uri
          : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokeNum(
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
          renderItem={({item}) => (
            <PokemonCard
              name={item.name}
              url={item.url}
              img={item.img}
              id={item.id}
            />
          )}
        />
      ) : (
        <Text>Uh Oh!</Text>
      )}
    </Box>
  );
};

export default PokemonList;
