import {Berries} from 'pokenode-ts';
import React from 'react';
import {Text, View} from 'react-native';
import {getBerry} from './src/api/berry';

const App = () => {
  getBerry(Berries.AGUAV);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!</Text>
    </View>
  );
};
export default App;
