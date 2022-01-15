import React from 'react';
import {PokemonData} from 'types/pokemon';
import {Box, VStack, Text, Image, Center} from 'native-base';
import {getPokemon} from 'api/pokemon';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import Error from 'components/Error';
import {getImageBasedOnMode, titleCaseWord} from 'utils/utils';
import {Pokemon} from 'pokenode-ts';

export interface PokemonDetailProps {
  route: RouteProp<any>;
  navigation: NativeStackNavigationProp<any, any>;
}

const PokemonDetail = (props: PokemonDetailProps) => {
  const [isLoading, setLoading] = React.useState(true);
  const [pokemon, setPokemon] = React.useState<Pokemon>();

  React.useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const pokemonData: PokemonData = await getPokemon(
          props.route?.params?.name,
        );
        setPokemon(pokemonData.data as Pokemon);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        return;
      }
    };
    fetchPokemonDetail();
  }, [props.route.params]);

  if (isLoading) {
    return null;
  }

  if (!pokemon) {
    return <Error />;
  }

  return (
    <Box>
      <VStack space={2}>
        <Center>
          <Image
            source={{
              uri: getImageBasedOnMode(
                pokemon.sprites.other['official-artwork']
                  .front_default as string,
              ),
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
    </Box>
  );
};

export default PokemonDetail;
