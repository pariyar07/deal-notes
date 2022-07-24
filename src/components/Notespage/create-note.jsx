import { useState } from "react";
import { v4 as uuid } from "uuid";
import { IoMdAdd } from "react-icons/io";
import { Note } from "components/Notespage/note";
import { useNotes } from "contexts/notes-contexts";
import date from "date-and-time";
import useToast from "custom/useToast";

export const CreateNote = () => {
  const {
    notesState: { notes },
    notesDispatch,
    oldestFirst,
  } = useNotes();
  const { showToast } = useToast();

  const [noteData, setNoteData] = useState({
    title: "",
    content: "",
    label: "",
  });
  const [noteColor, setNoteColor] = useState("");

  const AddNote = (e) => {
    e.preventDefault();
    if (!noteData.title || !noteData.content) {
      return;
    }
    const newNote = {
      _id: uuid(),
      title: noteData.title,
      content: noteData.content,
      label: noteData.label,
      color: noteColor,
      created: date.format(new Date(), "HH:mm:ss, YYYY/MM/DD"),
    };
    notesDispatch({ type: "ADD_NOTE", payload: newNote });
    showToast("Note Added", "success");
    setNoteData({ title: "", content: "", label: "" });
    setNoteColor("");
  };

  return (
    <>
      <div className="notes-container">
        <div className="create-note-wrapper">
          <form
            className="create-note-form"
            onSubmit={AddNote}
            style={{ background: noteColor }}
          >
            <input
              type="text"
              placeholder="Title"
              autoComplete="off"
              className="create-note-title"
              required
              title="Add Note Title"
              value={noteData.title}
              onChange={(e) =>
                setNoteData({ ...noteData, title: e.target.value })
              }
            />
            <textarea
              rows="6"
              columns="10"
              placeholder="Add some note..."
              className="create-note-description"
              required
              title="Add Note Description"
              value={noteData.content}
              onChange={(e) =>
                setNoteData({ ...noteData, content: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Label"
              autoComplete="off"
              maxLength="10"
              className="create-note-label"
              required
              title="Add Note Label"
              value={noteData.label}
              onChange={(e) =>
                setNoteData({ ...noteData, label: e.target.value })
              }
            />
            <div className="note-colors">
              Add Colors
              <div
                className="note-green"
                title="Add Green to Note"
                onClick={() => setNoteColor("var(--note-green)")}
              ></div>
              <div
                className="note-blue"
                title="Add Blue to Note"
                onClick={() => setNoteColor("var(--note-blue)")}
              ></div>
              <div
                className="note-yellow"
                title="Add Yellow to Note"
                onClick={() => setNoteColor("var(--note-yellow)")}
              ></div>
              <div
                className="note-red"
                title="Add Red to Note"
                onClick={() => setNoteColor("var(--note-red)")}
              ></div>
              <div
                className="note-purple"
                title="Add Purple to Note"
                onClick={() => setNoteColor("var(--note-purple)")}
              ></div>
            </div>
            <button className="add-note-button" title="Add Note">
              <IoMdAdd className="add-icon" />
            </button>
          </form>
        </div>
        <p className="total-notes">Total Notes: {notes.length}</p>
        <div className="notes-wrapper">
          {oldestFirst
            ? notes
                .map((note) => {
                  return <Note note={note} key={note._id} />;
                })
                .reverse()
            : notes.map((note) => {
                return <Note note={note} key={note._id} />;
              })}
        </div>
      </div>
    </>
  );
};
