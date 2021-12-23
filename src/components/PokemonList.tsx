import React from 'react';
import {getPokemonList} from '../api/pokemon';
import {FlatList, Pressable, Center, Box, Text} from 'native-base';
import {titleCaseWord} from '../utils/capitalize';
import {PokemonListData} from '../types/pokemon';
import {NamedAPIResource} from 'pokenode-ts';

const PokemonList = () => {
  const [pokemon, setPokemon] = React.useState([] as Array<NamedAPIResource>);

  const fetchPokemon = async () => {
    const data: PokemonListData = await getPokemonList();
    if (data === undefined) {
      return;
    }
    const pokemons: NamedAPIResource[] = data.map(mon => ({
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
    <Box>
      {pokemon ? (
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
      ) : (
        <Text>Uh Oh!</Text>
      )}
    </Box>
  );
};

export default PokemonList;
