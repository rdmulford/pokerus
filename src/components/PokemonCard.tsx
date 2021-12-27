import React from 'react';
import {Center, Image, Pressable} from 'native-base';
import {titleCaseWord} from '../utils/utils';

export interface PokemonCardProps {
  name: string;
  url: string;
  id: string;
  img: string;
}

export class PokemonCard extends React.PureComponent<PokemonCardProps> {
  render() {
    const {name, url, id, img} = this.props;

    return (
      <Pressable
        onPress={() => {
          console.log(url);
        }}>
        <Center
          p="2"
          m="1"
          w="109"
          h="109px"
          rounded="5"
          bg="#d4d4d4"
          borderColor="737373"
          key={id}>
          <Image
            source={{uri: img}}
            style={{width: 90, height: 90}}
            alt={name}
          />
          {titleCaseWord(name)}
        </Center>
      </Pressable>
    );
  }
}
