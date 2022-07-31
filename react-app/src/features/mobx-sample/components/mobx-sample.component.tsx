import * as React from "react";
import { NoteAppComponent } from "src/shared/components/note-app/note-app.component";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { mobxStore } from "src/features/mobx-sample/store/mobx.store";

interface MobxSampleComponentPropsInterface {}

const MobxSampleComponent: React.FC<MobxSampleComponentPropsInterface> =
  observer(() => {
    useEffect(() => {
      mobxStore.getNotes();
    }, []);

    return (
      <>
        <NoteAppComponent
          /* Прокидиываю через .map массив, чтобы целевой компонент где выводится список в observer не оборачивать:\ А без пробега по массиву ререндер не происходит текущего компонента */
          notes={mobxStore.notes.map((note) => note)}
          onAdd={(note) => {
            mobxStore.addNote(note);
          }}
        />
      </>
    );
  });

export { MobxSampleComponent };
