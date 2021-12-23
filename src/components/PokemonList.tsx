import React from 'react';
import {getPokemonList} from '../api/pokemon';
import {Box, Text, FlatList, Center} from 'native-base';
import {Pressable} from 'react-native';
import {titleCaseWord} from '../utils/capitalize';

const PokemonList = () => {
  const [pokemon, setPokemon] = React.useState([]);

  const fetchPokemon = async () => {
    const data: any = await getPokemonList();
    const pokemons = data.map(mon => ({
      name: titleCaseWord(mon.name),
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
          <Pressable
            onPress={() => {
              console.log(item.name);
            }}>
            <Box
              p="2.5"
              m="1"
              w="109"
              rounded="5"
              bg="#d4d4d4"
              borderColor="737373">
              <Center>
                <Text key={item.id}>{item.name}</Text>
              </Center>
            </Box>
          </Pressable>
        );
      }}
    />
  );
};

export default PokemonList;
