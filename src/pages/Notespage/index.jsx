import { NoteNav } from "components/Notespage/notepage-navbar";
import { CreateNote } from "components/Notespage/create-note";
import { CreateNoteAside } from "components/Notespage/createnote-aside";

export const NotesPage = () => {
  return (
    <>
      <NoteNav />
      <div className="notes-body">
        <CreateNoteAside />
        <CreateNote />
      </div>
    </>
  );
};
