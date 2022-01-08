import {Box, Center, Image} from 'native-base';
import React from 'react';
import {Image as NativeImage} from 'react-native';

const Error = () => {
  return (
    <Box>
      <Center>
        <Image
          alt="sad-pikachu"
          size={200}
          source={{
            uri: NativeImage.resolveAssetSource(
              require('../assets/sad-pikachu.png'),
            ).uri,
          }}
        />
        We encountered an error!
      </Center>
    </Box>
  );
};

export default Error;
