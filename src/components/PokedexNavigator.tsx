import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import NotImpl from 'components/NotImplemented';
import PokemonList from 'components/PokemonList';
import PokemonDetail from './PokemonDetail';

const PokedexNavigator = () => {
  const PokedexStack = createNativeStackNavigator();
  return (
    <PokedexStack.Navigator>
      <PokedexStack.Screen
        name="PokemonList"
        component={PokemonList}
        options={{headerShown: false}}
      />
      <PokedexStack.Screen
        name="PokemonDetails"
        component={PokemonDetail}
        options={{headerShown: false}}
      />
    </PokedexStack.Navigator>
  );
};

export default PokedexNavigator;
