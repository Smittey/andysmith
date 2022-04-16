import React from 'react';
import PropTypes from 'prop-types';

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  theme: 'light',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_THEME': {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case 'TOGGLE_THEME': {
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    }
    default:
      throw new Error('Bad Action Type');
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalContextProvider;
