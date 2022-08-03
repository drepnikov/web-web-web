import React from "react";
import { mobxSampleFeature } from "src/features/mobx-sample/mobx-sample.feature";
import { Navigate, Route, Routes } from "react-router-dom";
import { reduxSampleFeature } from "src/features/redux-sample/redux-sample.feature";
import { sandboxFeature } from "src/features/sandbox/sandbox.feature";

const App: React.FC = () => {
  const routes = [
    mobxSampleFeature.router(),
    reduxSampleFeature.router(),
    sandboxFeature.router(),
  ];

  return (
    <main className="min-h-screen bg-lightBlack text-whiteMilk">
      <Routes>
        <Route path={"/"} element={<div>Оно живое!!!</div>} />

        {routes}

        <Route path={"*"} element={<Navigate to={"/"} />} />
      </Routes>
    </main>
  );
};

export { App };
