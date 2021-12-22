import React from 'react';
import {Box, NativeBaseProvider} from 'native-base';
import Footer from './src/components/Footer';
import GlobalStateProvider from './src/components/Global';
import ViewManager from './src/components/ViewManager';

const App = () => {
  return (
    <NativeBaseProvider>
      <GlobalStateProvider>
        <Box safeAreaTop>
          <ViewManager />
        </Box>
        <Footer />
      </GlobalStateProvider>
    </NativeBaseProvider>
  );
};
export default App;
