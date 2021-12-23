import React from 'react';
import {getPokemonList} from '../api/pokemon';
import {Box, Text, FlatList} from 'native-base';

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
    <FlatList
      numColumns={3}
      m={'8px'}
      columnWrapperStyle={{justifyContent: 'space-around'}}
      data={pokemon}
      renderItem={({item}) => {
        return (
          <Box p="5" m="1" rounded="8" bg="green.700">
            <Text key={item.id}>{item.name}</Text>
          </Box>
        );
      }}
    />
  );
};

export default PokemonList;
