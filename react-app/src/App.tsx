import React from "react";
import { NoteAppFeature } from "src/shared/note-app/note-app.feature";

function App() {
  return (
    <div>
      <NoteAppFeature
        notes={[
          {
            content: "123",
            id: "12321",
            pinned: false,
            title: "12312312",
          },
        ]}
        onAdd={() => {}}
      />
    </div>
  );
}

export default App;
