import {Berries} from 'pokenode-ts';
import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {getBerry} from './src/api/berry';
import styled from 'styled-components/native';

const Title = styled.Text`
  color: palevioletred;
`;

const Wrapper = styled.View`
  background: papayawhip;
`;

const App = () => {
  getBerry(Berries.AGUAV);

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Wrapper>
          <Title>Pokerus</Title>
        </Wrapper>
      </Box>
    </NativeBaseProvider>
  );
};
export default App;
