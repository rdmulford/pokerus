import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PokemonList from './PokemonList';
import {Box, IconButton, Text, ThreeDotsIcon} from 'native-base';

const Temp = () => {
  return (
    <Box>
      <Text>Hi</Text>
    </Box>
  );
};

const NavigationManager = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Pokedex"
        component={PokemonList}
        options={{
          headerRight: () => <IconButton icon={<ThreeDotsIcon size="sm" />} />,
        }}
      />
      <Tab.Screen name="Moves" component={Temp} />
      <Tab.Screen name="Type Chart" component={Temp} />
      <Tab.Screen name="Abilities" component={Temp} />
      <Tab.Screen name="Items" component={Temp} />
    </Tab.Navigator>
  );
};

export default NavigationManager;
