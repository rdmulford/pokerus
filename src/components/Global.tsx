import React, {createContext, Dispatch, useContext, useReducer} from 'react';

const defaultViewState = 0;
export const GlobalStateContext = createContext(defaultViewState);
export const DispatchStateContext = createContext({} as Dispatch<any>);

export const useGlobalState = () => [useContext(GlobalStateContext)];
export const useGlobalDispatch = () => [useContext(DispatchStateContext)];

// GlobalStateProvider provides view state value to all child components
const GlobalStateProvider = ({children}: any) => {
  const [viewState, setViewState] = useReducer(
    (state: number, newValue: number) => newValue,
    defaultViewState,
  );

  return (
    <GlobalStateContext.Provider value={viewState}>
      <DispatchStateContext.Provider value={setViewState}>
        {children}
      </DispatchStateContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
