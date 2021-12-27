import {useGlobalState} from 'components/Global';
import {Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import PokemonList from 'components/PokemonList';

// ViewManager handles the currently displayed view
const ViewManager = () => {
  const [viewState] = useGlobalState();
  const [displayedView, setDisplayedView] = useState(<Text>Pokedex</Text>);

  // When the view state is updated, get the new view based
  // on the new state and set that value
  useEffect(() => {
    const view = getView(viewState);
    setDisplayedView(view);
  }, [viewState]);

  const getView = (state: number) => {
    switch (state) {
      case 0: {
        return <PokemonList />;
      }
      case 1: {
        return <Text>Moves</Text>;
      }
      case 2: {
        return <Text>Type Chart</Text>;
      }
      case 3: {
        return <Text>Abilities</Text>;
      }
      case 4: {
        return <Text>Items</Text>;
      }
      default: {
        return <Text>Uh Oh!</Text>;
      }
    }
  };

  return displayedView;
};

export default ViewManager;
