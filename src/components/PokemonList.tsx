import React from 'react';
import {getPokemonList} from '../api/pokemon';
import {Box, ScrollView, HStack, VStack, Text} from 'native-base';

const PokemonList = () => {
  const [pokemon, setPokemon] = React.useState([]);

  const fetchPokemon = async () => {
    const data: any = await getPokemonList();
    const pokemons = data.map(mon => ({
      name: mon.name,
      url: mon.url,
      id: Math.random().toString(12).substring(0),
    }));
    setPokemon(pokemons);
  };

  React.useEffect(() => {
    console.log('no');
    fetchPokemon();
  }, []);

  return (
    <ScrollView>
      <Box flex={1}>
        <VStack space={3} w="90%">
          {pokemon.map(mon => (
            <HStack justifyContent="space-between">
              <Text key={mon.id}>{mon.name}</Text>
            </HStack>
          ))}
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default PokemonList;
