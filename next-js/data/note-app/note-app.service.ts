import { NoteInterface } from "data/note-app/types/note.type";

class NoteAppService {
  async getNotesFromBackend(): Promise<NoteInterface[]> {
    return [
      {
        id: "312sad",
        title: "Привет мир",
        content: "Просто тестирую",
        pinned: false,
      },
      {
        id: "31122sdasad",
        title: "Привет мир2",
        content: "Просто тестирую2",
        pinned: false,
      },
      {
        id: "sdsa123123",
        title: "Особый привет мир",
        content: "Особый просто тестирую",
        pinned: true,
      },
    ];
  }
}

export const noteAppService = new NoteAppService();
