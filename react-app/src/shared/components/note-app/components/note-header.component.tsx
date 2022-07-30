import * as React from "react";
import logo from "src/shared/components/note-app/assets/images/keep.png";

interface IHeaderComponentProps {}

const NoteHeaderComponent: React.FC<IHeaderComponentProps> = () => {
  return (
    <div className="border-b border-whiteMilk px-10 py-3">
      <div className="flex items-center">
        <img alt="logo" src={logo} className="pr-2"></img>
        <span>Notes</span>
      </div>
    </div>
  );
};

export { NoteHeaderComponent };
