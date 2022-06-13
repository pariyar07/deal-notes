import React from "react";
import { BsArchive } from "react-icons/bs";
import { FiTrash, FiEdit2 } from "react-icons/fi";
import { useNotes } from "contexts/notes-contexts";
import useToast from "custom/useToast";

export const Note = ({ note }) => {
  const { notesDispatch } = useNotes();
  const { showToast } = useToast();

  const deleteNoteHandler = () => {
    notesDispatch({ type: "DELETE_NOTE", payload: note });
    showToast("Note Deleted", "success");
  };

  const archiveNoteHandler = () => {
    notesDispatch({ type: "ARCHIVE_NOTE", payload: note });
    showToast("Note Archived", "success");
  };

  return (
    <div className="note-wrapper" style={{ background: note.color }}>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <p className="note-label">{note.label}</p>
      <div>
        <p>{note.created}</p>
        <button title="Edit Note">
          <FiEdit2 />
        </button>
        <button title="Add to Archive" onClick={archiveNoteHandler}>
          <BsArchive />
        </button>
        <button title="Delete" onClick={deleteNoteHandler}>
          <FiTrash />
        </button>
      </div>
    </div>
  );
};
