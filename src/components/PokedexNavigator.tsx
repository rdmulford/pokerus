import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotImpl from 'components/NotImplmented';
import PokemonList from 'components/PokemonList';

const PokedexNavigator = () => {
  const PokedexStack = createNativeStackNavigator();
  return (
    <PokedexStack.Navigator>
      <PokedexStack.Screen
        name="PokemonList"
        component={PokemonList}
        options={{headerShown: false}}
      />
      <PokedexStack.Screen name="PokemonDetails" component={NotImpl} />
    </PokedexStack.Navigator>
  );
};

export default PokedexNavigator;
