import { NoteInterface } from "src/shared/components/note-app/types/note.type";

export interface NoteAppPropsInterface {
  notes: NoteInterface[];
  onAdd(note: NoteInterface): void;
}
