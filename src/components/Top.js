import React from "react";

import { useData } from "../hooks/useData";

const Top = ({ id }) => {
  const { todo } = useData(id);
  return (
    <div>
      {todo && todo.id ? (
        <>
          <h1>Hello {todo.title}</h1>
          <p>Start clicking to see some magic happen :)</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Top;
