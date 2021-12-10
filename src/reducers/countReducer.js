import React, { useReducer } from "react";

import * as actions from "./actions";

const INITIAL_STATE = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case actions.INCREMENT: {
      const updatedCount = state.count + 1;
      state.count = updatedCount;
      return { ...state };
    }
    case actions.DECREMENT: {
      const updatedCount = state.count - 1;
      state.count = updatedCount;
      return { ...state };
    }
    default:
      return { ...state };
  }
}

export const CountContext = React.createContext(INITIAL_STATE);

export const CountProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CountContext.Provider>
  );
};
