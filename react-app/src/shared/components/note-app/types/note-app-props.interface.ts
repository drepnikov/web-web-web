import { NoteInterface } from "src/shared/components/note-app/types/note.interface";

export interface NoteAppPropsInterface {
  notes: NoteInterface[];
  onAdd(note: NoteInterface): void;
}
