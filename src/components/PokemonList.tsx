import React from 'react';
import {getPokemonList} from 'api/pokemon';
import {FlatList, Box} from 'native-base';
import {PokemonCard} from 'components/PokemonCard';
import {getImageBasedOnMode, getPokeNum} from 'utils/utils';
import {NamedAPIResource} from 'pokenode-ts';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import Error from 'components/Error';
import {RouteProp} from '@react-navigation/native';
import {PokemonListData} from 'types/pokemon';

export interface PokemonListProps {
  route: RouteProp<any>;
  navigation: NativeStackNavigationProp<any, any>;
}

const PokemonList = (props: PokemonListProps) => {
  const [pokemon, setPokemon] = React.useState([] as Array<NamedAPIResource>);
  const [isLoading, setLoading] = React.useState(true);

  const StyledFlatList = styled(FlatList).attrs(() => ({
    contentContainerStyle: {
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  }))``;

  const fetchPokemon = async () => {
    try {
      const pokemonListData: PokemonListData = await getPokemonList();
      const pokemons: NamedAPIResource[] = (
        pokemonListData.data as NamedAPIResource[]
      ).map(mon => ({
        name: mon.name,
        url: mon.url,
        id: Math.random().toString(12).substring(0),
        img: getImageBasedOnMode(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokeNum(
            mon.url,
          )}.png`,
        ),
      }));
      setPokemon(pokemons);
    } catch (error) {
      console.log(error);
      return;
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchPokemon();
  }, []);

  if (isLoading) {
    return null;
  }

  if (!pokemon) {
    return <Error />;
  }

  return (
    <Box>
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
            navigation={props.navigation}
          />
        )}
      />
      )
    </Box>
  );
};

export default PokemonList;
