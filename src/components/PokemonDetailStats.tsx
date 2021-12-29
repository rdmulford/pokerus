import React from 'react';
import {Stat} from 'types/pokemon';
import {Box, Text, FlatList} from 'native-base';

export const PokemonDetailStats = (props: Array<Stat>) => {
  console.log(props);
  return (
    <Box>
      <FlatList
        data={props.items}
        renderItem={({item}) => (
          <Text>
            {item.name.toUpperCase()}: {item.value} - Min: {item.min} - Max:{' '}
            {item.max}
          </Text>
        )}
      />
    </Box>
  );
};
