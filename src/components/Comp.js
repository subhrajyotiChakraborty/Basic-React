import React, { useContext } from "react";

import { CountContext } from "../reducers/countReducer";
import * as actions from "../reducers/actions";

const Comp = ({ name }) => {
  const { dispatch } = useContext(CountContext);
  return (
    <div className="comp">
      <p>This is Comp {name}</p>
      <div>
        <button onClick={() => dispatch({ type: actions.INCREMENT })}>
          Increase
        </button>
        <button onClick={() => dispatch({ type: actions.DECREMENT })}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Comp;
