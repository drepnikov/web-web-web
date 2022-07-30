import { FeatureInterface } from "src/shared/types/feature.interface";
import { Fragment } from "react";
import { Route } from "react-router-dom";
import { MobxSampleComponent } from "src/features/mobx-sample/components/mobx-sample.component";

export class MobxSampleFeature implements FeatureInterface {
  router() {
    return (
      <Fragment key="mobxSample">
        <Route path={"mobx-sample"} element={<MobxSampleComponent />} />
      </Fragment>
    );
  }
}

export const mobxSampleFeature = new MobxSampleFeature();
