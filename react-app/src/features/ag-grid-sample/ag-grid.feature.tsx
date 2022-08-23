import { FeatureInterface } from "src/shared/types/feature.interface";
import { Fragment } from "react";
import { Route } from "react-router-dom";
import { AgGridComponent } from "src/features/ag-grid-sample/components/ag-grid.component";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export class AgGridFeature implements FeatureInterface {
  router() {
    return (
      <Fragment key="agGridSample">
        <Route path={"ag-grid-sample"} element={<AgGridComponent />} />
      </Fragment>
    );
  }
}

export const agGridFeature = new AgGridFeature();
