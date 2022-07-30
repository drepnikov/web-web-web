import * as React from "react";
import { NoteInterface } from "data/note-app/types/note.type";

interface INoteViewComponentProps {
  note: NoteInterface;
}

const NoteViewComponent: React.FC<INoteViewComponentProps> = ({ note }) => {
  return (
    <div className="mt-2 p-2 border border-whiteMilk">
      <div className="p-1">{note.title}</div>
      <div className="p-1">{note.content}</div>
    </div>
  );
};

export { NoteViewComponent };
