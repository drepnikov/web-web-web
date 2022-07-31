import * as React from "react";
import logo from "src/shared/components/note-app/assets/images/keep.png";

interface IHeaderComponentProps {
  label: string;
}

const NoteHeaderComponent: React.FC<IHeaderComponentProps> = ({ label }) => {
  return (
    <div className="flex items-center border-b border-whiteMilk px-10 py-3">
      <div className="flex items-center">
        <img alt="logo" src={logo} className="pr-2"></img>
        <span>Notes</span>
      </div>
      <div className="text-2xl m-auto -translate-x-1/2">{label}</div>
    </div>
  );
};

export { NoteHeaderComponent };
