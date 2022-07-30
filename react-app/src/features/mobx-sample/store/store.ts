import { NoteInterface } from "src/shared/components/note-app/types/note.interface";
import { makeAutoObservable, runInAction } from "mobx";
import { noteAppService } from "src/shared/components/note-app/note-app.service";

class Store {
  notes: NoteInterface[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  async getNotes() {
    const notes = await noteAppService.getNotesFromBackend();

    runInAction(() => {
      this.notes = notes;
    });
  }

  addNote(note: NoteInterface) {
    this.notes.unshift(note);
  }
}

export const store = new Store();
