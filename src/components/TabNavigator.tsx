import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconButton, ThreeDotsIcon} from 'native-base';
import NotImpl from 'components/NotImplmented';
import PokedexNavigator from 'components/PokedexNavigator';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigator}
        options={{
          headerRight: () => <IconButton icon={<ThreeDotsIcon size="sm" />} />,
        }}
      />
      <Tab.Screen name="Moves" component={NotImpl} />
      <Tab.Screen name="Type Chart" component={NotImpl} />
      <Tab.Screen name="Abilities" component={NotImpl} />
      <Tab.Screen name="Items" component={NotImpl} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
