import { FeatureInterface } from "src/shared/types/feature.interface";
import { Fragment } from "react";
import { Route } from "react-router-dom";
import { ReduxSampleComponent } from "src/features/redux-sample/components/redux-sample.component";
import { Provider } from "react-redux";
import { reduxStore } from "src/features/redux-sample/store/redux.store";

export class ReduxSampleFeature implements FeatureInterface {
  router() {
    return (
      <Fragment key="reduxSample">
        <Route
          path={"redux-sample"}
          element={
            <Provider store={reduxStore}>
              <ReduxSampleComponent />
            </Provider>
          }
        />
      </Fragment>
    );
  }
}

export const reduxSampleFeature = new ReduxSampleFeature();
