import * as React from "react";
import { NoteInterface } from "src/shared/components/note-app/types/note.interface";
import { useOutsideClick } from "src/shared/components/note-app/hooks/useOutsideClick";
import { useRef, useState } from "react";
import { InputTextComponent } from "src/shared/components/note-app/components/ui/input-text.component";

interface INoteEditComponentProps {
  note?: NoteInterface;
  onAdd(note: NoteInterface): void;
}

const NoteEditComponent: React.FC<INoteEditComponentProps> = ({
  note,
  onAdd,
}) => {
  const isNew = !Boolean(note);

  const [title, setTitle] = useState(note?.title ?? "");
  const [content, setContent] = useState(note?.content ?? "");
  const [pinned, setPinned] = useState(note?.pinned ?? false);
  const [id, setId] = useState(note?.id ?? String(Date.now()));

  const [inputMode, setInputMode] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => {
    if (inputMode) {
      onAdd({
        title,
        pinned,
        content,
        id,
      });

      setInputMode(false);
    }
  });

  return (
    <div ref={ref} className="mt-2 p-2 border border-whiteMilk">
      {inputMode && (
        <>
          <div className="p-1">
            <InputTextComponent
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder={"Введите заголовок"}
            />
          </div>
          <div className="p-1">
            <InputTextComponent
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder={"Заметка..."}
            />
          </div>
        </>
      )}

      {!inputMode && (
        <div
          onClick={(e) => {
            e.stopPropagation();

            setInputMode(true);
          }}
        >
          Новая заметка...
        </div>
      )}
    </div>
  );
};

export { NoteEditComponent };
