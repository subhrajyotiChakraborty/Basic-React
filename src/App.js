import React from "react";

import { Routes, Route } from "react-router-dom";

import Main from "./views/Main";
import { CountProvider } from "./reducers/countReducer";
import "./style.css";

export default function App() {
  return (
    <CountProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="*"
          element={
            <div>
              <h1>Page Not Found...</h1>
            </div>
          }
        />
      </Routes>
    </CountProvider>
  );
}
