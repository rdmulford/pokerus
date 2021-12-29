import {Box, Center, Image} from 'native-base';
import React from 'react';
import {Image as NativeImage} from 'react-native';

export interface ErrorProps {
  err: string;
}

const Error = (props: ErrorProps) => {
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
        Error: {props.err}
      </Center>
    </Box>
  );
};

export default Error;
