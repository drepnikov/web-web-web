import { useReduxStoreSelector } from "src/features/redux-sample/store/redux.store";

export const useNotesSelector = () =>
  useReduxStoreSelector((state) => state.notes.notes);
