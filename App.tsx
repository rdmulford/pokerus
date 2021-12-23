import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Footer from './src/components/Footer';
import GlobalStateProvider from './src/components/Global';
import ViewManager from './src/components/ViewManager';
import Header from './src/components/Header';

const App = () => {
  return (
    <NativeBaseProvider>
      <GlobalStateProvider>
        <Header />
        <ViewManager />
        <Footer />
      </GlobalStateProvider>
    </NativeBaseProvider>
  );
};
export default App;
