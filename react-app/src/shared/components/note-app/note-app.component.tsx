import * as React from "react";
import { NoteAppPropsInterface } from "src/shared/components/note-app/types/note-app-props.interface";
import { NoteListComponent } from "src/shared/components/note-app/components/note-list.component";
import { NoteHeaderComponent } from "src/shared/components/note-app/components/note-header.component";

const NoteAppComponent: React.FC<NoteAppPropsInterface> = (props) => {
  return (
    <section className="text-whiteMilk h-screen bg-lightBlack">
      {/* Header */}
      <NoteHeaderComponent />

      {/* Render list */}
      <NoteListComponent {...props} />
    </section>
  );
};

export { NoteAppComponent };
