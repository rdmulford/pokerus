import React from 'react';
import {getPokemonList} from '../api/pokemon';
import {FlatList, Center} from 'native-base';
import {Pressable} from 'react-native';
import {titleCaseWord} from '../utils/capitalize';

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
          <Pressable
            onPress={() => {
              console.log(item.name);
            }}>
            <Center
              p="2"
              m="1"
              w="109"
              h="109px"
              rounded="5"
              bg="#d4d4d4"
              borderColor="737373"
              key={item.id}>
              {titleCaseWord(item.name)}
            </Center>
          </Pressable>
        );
      }}
    />
  );
};

export default PokemonList;
