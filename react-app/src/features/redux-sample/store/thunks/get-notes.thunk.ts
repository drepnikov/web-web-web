import { createAsyncThunk } from "@reduxjs/toolkit";
import { noteAppService } from "src/shared/components/note-app/note-app.service";

export const getNotesThunk = createAsyncThunk("notes/getNotes", async () => {
  const notes = await noteAppService.getNotesFromBackend();

  return notes;
});
