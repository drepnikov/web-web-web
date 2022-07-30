import * as React from "react";
import { NoteAppComponent } from "src/shared/components/note-app/note-app.component";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { store } from "src/features/mobx-sample/store/store";

interface MobxSampleComponentPropsInterface {}

const MobxSampleComponent: React.FC<MobxSampleComponentPropsInterface> =
  observer(() => {
    useEffect(() => {
      store.getNotes();
    }, []);

    return (
      <>
        <NoteAppComponent
          /* Возвращаю через map массив, чтобы целевой компонент где выводится список в observer не оборачивать:\ А без пробега по массиву ререндер не происходит текущего компонента */
          notes={store.notes.map((note) => note)}
          onAdd={(note) => {
            store.addNote(note);
          }}
        />
      </>
    );
  });

export { MobxSampleComponent };
