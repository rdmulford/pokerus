import React from 'react';
import {Pokemon} from 'pokenode-ts';
import {Box, Text} from 'native-base';
import {getPokemon} from 'api/pokemon';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export interface PokemonDetailProps {
  route: RouteProp<any>;
  navigation: NativeStackNavigationProp<any, any>;
}

const PokemonDetail = (props: PokemonDetailProps) => {
  const [pokemon, setPokemon] = React.useState([]);

  React.useEffect(() => {
    const fetchPokemonDetail = async () => {
      const data: Pokemon = await getPokemon(props.route.params.name);
      if (data === undefined) {
        return;
      }
      console.log(data);
      setPokemon(data);
    };
    fetchPokemonDetail();
  }, [props.route.params.name]);

  return (
    <Box>{pokemon ? <Text>{pokemon.weight}</Text> : <Text>Uh Oh!</Text>}</Box>
  );
};

export default PokemonDetail;
