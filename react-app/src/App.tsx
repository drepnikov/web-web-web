import React from "react";
import { mobxSampleFeature } from "src/features/mobx-sample/mobx-sample.feature";
import { Navigate, Route, Routes } from "react-router-dom";
import { reduxSampleFeature } from "src/features/redux-sample/redux-sample.feature";

const App: React.FC = () => {
  const routes = [mobxSampleFeature.router(), reduxSampleFeature.router()];

  return (
    <Routes>
      <Route path={"/"} element={<div>Оно живое!!!</div>} />

      {routes}

      <Route path={"*"} element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export { App };
