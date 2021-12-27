import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import NavigationManager from './src/components/Navigation';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <NavigationManager />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
