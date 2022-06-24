import React, { useContext } from "react";

import Comp from "../components/Comp";
import Top from "../components/Top";
import Chart from "../components/Chart";
import { CountContext } from "../reducers/countReducer";

export default function Main() {
  const { state } = useContext(CountContext);

  return (
    <div>
      <Top id={Math.abs(state.count) === 0 ? 1 : Math.abs(state.count)} />
      <p>{state.count}</p>
      <Comp name="One" />
      <hr />
      <Comp name="Two" />
      <hr />
      <Chart />
    </div>
  );
}
