import * as React from "react";
import { useReduxStoreDispatch } from "src/features/redux-sample/store/redux.store";
import { NoteAppComponent } from "src/shared/components/note-app/note-app.component";
import { useEffect } from "react";
import { getNotesThunk } from "src/features/redux-sample/store/thunks/get-notes.thunk";
import { useNotesSelector } from "src/features/redux-sample/store/notes.selector";
import { addNote } from "src/features/redux-sample/store/notes.slice";

interface ReduxSampleComponentPropsInterface {}

const ReduxSampleComponent: React.FC<
  ReduxSampleComponentPropsInterface
> = () => {
  const dispatch = useReduxStoreDispatch();
  const notes = useNotesSelector();

  useEffect(() => {
    dispatch(getNotesThunk());

    return () => {
      console.log("размонтируемся...");
    };
  }, [dispatch]);

  return (
    <NoteAppComponent
      label={"redux-sample"}
      notes={notes}
      onAdd={(note) => {
        dispatch(addNote(note));
      }}
    />
  );
};

export { ReduxSampleComponent };
