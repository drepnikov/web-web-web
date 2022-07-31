import { NoteInterface } from "src/shared/components/note-app/types/note.interface";

class NoteAppService {
  async getNotesFromBackend(): Promise<NoteInterface[]> {
    return [
      {
        title: "Привет мир",
        content: "Содержимое заметки",
        pinned: false,
        id: "1",
      },
      {
        title: "Привет мир",
        content: "Содержимое заметки2",
        pinned: false,
        id: "2",
      },
      {
        title: "Привет мир",
        content: "Содержимое заметки3",
        pinned: true,
        id: "3",
      },
      {
        title: "Привет мир",
        content: "Содержимое заметки4",
        pinned: false,
        id: "4",
      },
    ];
  }
}

export const noteAppService = new NoteAppService();
