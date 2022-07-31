import { NoteInterface } from "src/shared/components/note-app/types/note.interface";

export interface NoteAppPropsInterface {
  label: string;
  notes: NoteInterface[];
  onAdd(note: NoteInterface): void;
}
