import React from 'react';
import {getPokemonList} from 'api/pokemon';
import {FlatList, Pressable, Center, Box, Text, Image} from 'native-base';
import {getPokeNum, titleCaseWord} from 'utils/utils';
import {PokemonListData} from 'types/pokemon';
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
                  <Image
                    source={{uri: item.img}}
                    style={{width: 90, height: 90}}
                    alt={item.name}
                  />
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
