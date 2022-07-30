import { NoteInterface } from "src/shared/note-app/types/note.type";

export interface NoteAppPropsInterface {
  notes: NoteInterface[];
  onAdd(note: NoteInterface): void;
}
