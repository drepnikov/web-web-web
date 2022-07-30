import * as React from "react";

interface IHeaderComponentProps {}

const HeaderComponent: React.FC<IHeaderComponentProps> = () => {
  return (
    <div className="border-b border-whiteMilk px-10 py-3">
      <div className="flex items-center">
        <img alt="logo" src="/images/keep.png" className="pr-2"></img>
        <span>Notes</span>
      </div>
    </div>
  );
};

export { HeaderComponent };
