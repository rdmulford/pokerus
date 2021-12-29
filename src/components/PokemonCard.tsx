import React from 'react';
import {Center, Image, Pressable} from 'native-base';
import {titleCaseWord} from 'utils/utils';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styled from 'styled-components/native';

export interface PokemonCardProps {
  name: string;
  url: string;
  id: string;
  img: string;
  navigation: NativeStackNavigationProp<any, any>;
}

const StyledImage = styled(Image)`
  width: 90px;
  height: 90px;
`;

export class PokemonCard extends React.PureComponent<PokemonCardProps> {
  render() {
    const {name, url, id, img, navigation} = this.props;

    return (
      <Pressable
        onPress={() => {
          navigation.navigate('PokemonDetails', {
            name: name,
            url: url,
            id: id,
            img: img,
          });
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
          <StyledImage source={{uri: img}} alt={name} />
          {titleCaseWord(name)}
        </Center>
      </Pressable>
    );
  }
}
