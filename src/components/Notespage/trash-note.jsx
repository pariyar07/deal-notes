import { BiUndo } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";
import { useNotes } from "contexts/notes-contexts";
import useToast from "custom/useToast";

export const TrashNote = ({ note }) => {
  const { notesDispatch } = useNotes();
  const { showToast } = useToast();

  const deleteTrashNoteHandler = () => {
    notesDispatch({ type: "DELETE_TRASH_NOTE", payload: note });
    showToast("Note Deleted Forever", "success");
  };

  const undoTrashNoteHandler = () => {
    notesDispatch({ type: "UNDO_TRASH_NOTE", payload: note });
    showToast("Note Retrieved", "success");
  };

  return (
    <div className="trash-note-wrapper" style={{ background: note.color }}>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <p className="note-label">{note.label}</p>
      <div>
        <p>{note.created}</p>
        <button
          title="Undo"
          className="undo-btn"
          onClick={undoTrashNoteHandler}
        >
          <BiUndo />
        </button>
        <button title="Delete" onClick={deleteTrashNoteHandler}>
          <FiTrash />
        </button>
      </div>
    </div>
  );
};
