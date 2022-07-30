import * as React from "react";
import { NoteAppPropsInterface } from "src/shared/note-app/types/note-app-props.type";
import { NoteEditComponent } from "src/shared/note-app/components/note-edit.component";
import { NoteViewComponent } from "src/shared/note-app/components/note-view.component";

const ListComponent: React.FC<NoteAppPropsInterface> = ({ notes, onAdd }) => {
  return (
    <div className="flex flex-col items-center container mx-auto mt-5">
      <div className="mt-2 w-3/5">
        <NoteEditComponent onAdd={onAdd} />
      </div>

      <div className="mt-2 w-3/5">
        <span>Закрепленные</span>
        {notes
          .filter((note) => note.pinned)
          .map((note) => {
            return <NoteViewComponent key={note.id} note={note} />;
          })}
      </div>

      <div className="mt-2 w-3/5">
        <span>Другие</span>
        {notes
          .filter((note) => !note.pinned)
          .map((note) => {
            return <NoteViewComponent key={note.id} note={note} />;
          })}
      </div>
    </div>
  );
};

export { ListComponent };
