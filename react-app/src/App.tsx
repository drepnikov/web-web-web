import React from "react";
import { mobxSampleFeature } from "src/features/mobx-sample/mobx-sample.feature";
import { Navigate, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  const routes = [mobxSampleFeature.router()];

  return (
    <Routes>
      <Route path={"/"} element={<div>Оно живое!!!</div>} />

      {routes}

      <Route path={"*"} element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export { App };
