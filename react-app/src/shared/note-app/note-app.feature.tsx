import * as React from "react";
import { NoteAppPropsInterface } from "src/shared/note-app/types/note-app-props.type";
import { HeaderComponent } from "src/shared/note-app/components/header.component";
import { ListComponent } from "src/shared/note-app/components/list.component";

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
