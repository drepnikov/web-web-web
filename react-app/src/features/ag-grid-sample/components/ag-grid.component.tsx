import * as React from "react";
import { POCKEMONS } from "src/features/ag-grid-sample/assets/pockemons";
import { AgGridReact } from "ag-grid-react";

interface AgGridComponentPropsInterface {}

const columns = [{ field: "id" }, { field: "name" }, { field: "typeList" }];
const rows = POCKEMONS.map((p) => {
  return {
    id: p.id,
    name: p.name,
    typeList: p.typeList.join(", "),
  };
});

const AgGridComponent: React.FC<AgGridComponentPropsInterface> = () => {
  return (
    <div
      className="ag-theme-alpine"
      style={{ height: "100vh", width: "100vw" }}
    >
      <AgGridReact
        defaultColDef={{ flex: 1, sortable: true, filter: true }}
        rowData={rows}
        columnDefs={columns}
      />
    </div>
  );
};

export { AgGridComponent };
