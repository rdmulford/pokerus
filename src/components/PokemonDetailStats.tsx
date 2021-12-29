import React from 'react';
import {Stat} from 'types/pokemon';
import {Box, Text, FlatList} from 'native-base';
import {formatStatName} from 'api/pokemon';

export const PokemonDetailStats = (props: Array<Stat>) => {
  console.log(props);
  return (
    <Box>
      <FlatList
        data={props.items}
        renderItem={({item}) => (
          <Text>
            {formatStatName(item.name)}: {item.value} - Min: {item.min} - Max:{' '}
            {item.max}
          </Text>
        )}
      />
    </Box>
  );
};
