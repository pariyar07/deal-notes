import React from "react";
import { NoteNav } from "components/Notespage/notepage-navbar";
import { CreateNoteAside } from "components/Notespage/createnote-aside";
import { TrashNote } from "components/Notespage/trash-note";
import { useNotes } from "contexts/notes-contexts";

export const TrashPage = () => {
  const { notesState } = useNotes();
  return (
    <>
      <NoteNav />
      <div className="trash-body">
        <CreateNoteAside />
        <div className="trash-note-container">
          {notesState.delete.length === 0 ? (
            <h1
              style={{
                marginBottom: "auto",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Trash is Empty
            </h1>
          ) : (
            notesState.delete.map((note) => {
              return <TrashNote note={note} key={note._id} />;
            })
          )}
        </div>
      </div>
    </>
  );
};
