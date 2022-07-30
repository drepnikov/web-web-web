import * as React from "react";
import { HeaderComponent } from "data/note-app/components/header.component";
import { ListComponent } from "data/note-app/components/list.component";
import { NoteAppPropsInterface } from "data/note-app/types/note-app-props.type";

const NoteAppFeature: React.FC<NoteAppPropsInterface> = (props) => {
  return (
    <section className="text-whiteMilk h-screen bg-lightBlack">
      {/* Header */}
      <HeaderComponent />

      {/* Render list */}
      <ListComponent {...props} />
    </section>
  );
};

export { NoteAppFeature };
