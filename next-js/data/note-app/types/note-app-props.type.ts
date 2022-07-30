import { NoteInterface } from "data/note-app/types/note.type";

export interface NoteAppPropsInterface {
  notes: NoteInterface[];
  onAdd(note: NoteInterface): void;
}
