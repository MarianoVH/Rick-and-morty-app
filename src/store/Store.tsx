import React, { useReducer, createContext } from 'react';

interface IState {
  episodes: [];
  favourites: [];
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  episodes: [],
  favourites: []
};

//TODO: delete any
export const Store = createContext<IState | any>(initialState);


export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload }
    default:
      return state;
  }
}

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
}

