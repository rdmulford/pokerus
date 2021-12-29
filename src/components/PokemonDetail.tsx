import React from 'react';
import {PokemonData} from 'types/pokemon';
import {Box, VStack, Text, Image, Center} from 'native-base';
import {getPokemon} from 'api/pokemon';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {titleCaseWord} from 'utils/utils';

export interface PokemonDetailProps {
  route: RouteProp<any>;
  navigation: NativeStackNavigationProp<any, any>;
}

const PokemonDetail = (props: PokemonDetailProps) => {
  const [pokemon, setPokemon] = React.useState<PokemonData>();

  React.useEffect(() => {
    const fetchPokemonDetail = async () => {
      const data: PokemonData = await getPokemon(props.route.params.name);
      if (data === undefined) {
        return;
      }
      console.log(data.sprites);
      setPokemon(data);
    };
    fetchPokemonDetail();
  }, [props.route.params.name]);

  return (
    <Box>
      {pokemon ? (
        <VStack space={2}>
          <Center>
            <Image
              source={{
                uri: pokemon.sprites.other['official-artwork']
                  .front_default as any,
              }}
              size={200}
              alt={pokemon.forms[0].name}
            />
            <Center>
              <Text>
                No. {pokemon.id} - {titleCaseWord(pokemon.name)}
              </Text>
              <Text>Weight: {pokemon.weight / 10} Kg</Text>
              <Text>Height: {pokemon.height / 10} m</Text>
            </Center>
          </Center>
        </VStack>
      ) : (
        <Text>Uh Oh!</Text>
      )}
    </Box>
  );
};

export default PokemonDetail;
