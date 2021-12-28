import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Box, Button, Center} from 'native-base';
import React from 'react';

// TODO add strong typing
export interface NotImplProps {
  route: RouteProp<any>;
  navigation: NativeStackNavigationProp<any, any>;
}

const NotImpl = (props: NotImplProps) => {
  return (
    <Box>
      <Center>
        This feature has not been implemented yet.
        {props.route.params?.name}
        <Button onPress={() => props.navigation.goBack()}>Go Back</Button>
      </Center>
    </Box>
  );
};

export default NotImpl;
