import { NotesStateInterface } from "src/features/redux-sample/store/types/redux-state.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getNotesThunk } from "src/features/redux-sample/store/thunks/get-notes.thunk";
import { NoteInterface } from "src/shared/components/note-app/types/note.interface";

const notesInitialState: NotesStateInterface = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState: notesInitialState,
  reducers: {
    addNote(state, action: PayloadAction<NoteInterface>) {
      state.notes.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotesThunk.pending, () => {
        console.log("Запрашиваем сохраненные записи...");
      })
      .addCase(getNotesThunk.fulfilled, (state, action) => {
        state.notes = action.payload;
      })
      .addCase(getNotesThunk.rejected, () => {
        console.error("Ошибка при запросе сохраненных заметок!");
      });
  },
});

export const { addNote } = notesSlice.actions;
export const notesReducer = notesSlice.reducer;
