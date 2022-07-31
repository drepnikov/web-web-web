import { configureStore } from "@reduxjs/toolkit";
import { notesReducer } from "src/features/redux-sample/store/notes.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const reduxStore = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof reduxStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof reduxStore.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useReduxStoreDispatch: () => AppDispatch = useDispatch;
export const useReduxStoreSelector: TypedUseSelectorHook<RootState> =
  useSelector;
