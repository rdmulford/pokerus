import React from 'react';
import {getPokemonList} from '../api/pokemon';
import {Box, List, Center, useColorModeValue, ScrollView} from 'native-base';

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
    fetchPokemon();
  }, []);

  return (
    <ScrollView>
      <Box flex={1}>
        <Center
          flex={1}
          bg={useColorModeValue('warmGray.50', 'coolGray.800')}
        />
        <List>
          {pokemon.map(mon => (
            <List.Item key={mon.id}>{mon.name}</List.Item>
          ))}
        </List>
      </Box>
    </ScrollView>
  );
};

export default PokemonList;
