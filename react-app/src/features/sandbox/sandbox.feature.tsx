import { FeatureInterface } from "src/shared/types/feature.interface";
import { Fragment } from "react";
import { Route } from "react-router-dom";
import { SandboxComponent } from "src/features/sandbox/components/sandbox.component";

export class SandboxFeature implements FeatureInterface {
  router() {
    return (
      <Fragment key="sandbox">
        <Route path={"sandbox"} element={<SandboxComponent />} />
      </Fragment>
    );
  }
}

export const sandboxFeature = new SandboxFeature();
