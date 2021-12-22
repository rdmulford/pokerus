import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Footer from './src/components/Footer';
import GlobalStateProvider from './src/components/Global';
import ViewManager from './src/components/ViewManager';

const App = () => {
  return (
    <NativeBaseProvider>
      <GlobalStateProvider>
        <ViewManager />
        <Footer />
      </GlobalStateProvider>
    </NativeBaseProvider>
  );
};
export default App;
