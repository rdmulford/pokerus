import {Berries} from 'pokenode-ts';
import React from 'react';
import {
  NativeBaseProvider,
  useColorMode,
  useColorModeValue,
  Center,
  Button,
} from 'native-base';
import {getBerry} from './src/api/berry';
import Footer from './src/components/Footer';

function UseColorMode() {
  const {toggleColorMode} = useColorMode();
  return (
    <Center flex="1" bg={useColorModeValue('warmGray.50', 'coolGray.800')}>
      <Button onPress={toggleColorMode}>Toggle</Button>
    </Center>
  );
}

const App = () => {
  getBerry(Berries.AGUAV);

  return (
    <NativeBaseProvider>
      <UseColorMode />
      <Footer />
    </NativeBaseProvider>
  );
};
export default App;
