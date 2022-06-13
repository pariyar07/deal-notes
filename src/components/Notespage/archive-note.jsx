import { BiUndo } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";
import { useNotes } from "contexts/notes-contexts";
import useToast from "custom/useToast";

export const ArchiveNote = ({ note }) => {
  const { notesDispatch } = useNotes();
  const { showToast } = useToast();

  const deleteArchiveNoteHandler = () => {
    notesDispatch({ type: "DELETE_ARCHIVE_NOTE", payload: note });
    showToast("Note Deleted", "success");
  };

  const undoArchiveNoteHandler = () => {
    notesDispatch({ type: "UNDO_ARCHIVE_NOTE", payload: note });
    showToast("Note Unarchived", "success");
  };
  return (
    <div className="archive-note-wrapper" style={{ background: note.color }}>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <p className="note-label">{note.label}</p>
      <div>
        <p>{note.created}</p>
        <button
          title="Undo"
          className="undo-btn"
          onClick={undoArchiveNoteHandler}
        >
          <BiUndo />
        </button>
        <button title="Delete" onClick={deleteArchiveNoteHandler}>
          <FiTrash />
        </button>
      </div>
    </div>
  );
};
