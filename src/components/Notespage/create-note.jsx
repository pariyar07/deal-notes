import React, { useState, useRef } from 'react'
import { v4 as uuid } from 'uuid';
import { IoMdAdd } from "react-icons/io"
import { Note } from 'components/Notespage/note'
import { useNotes } from "contexts/notes-contexts"
import date from 'date-and-time';

export const CreateNote = () => {
    const { notesState: { notes }, notesDispatch } = useNotes();
    const [noteTitle, setNoteTitle] = useState("");
    const [noteLabel, setNoteLabel] = useState("");
    const [noteContent, setNoteContent] = useState("");
    const [noteColor, setNoteColor] = useState("");
    const [editNoteInfo, setEditNoteInfo] = useState({eid:'', etitle: '', econtent: '', elabel: '' });
console.log(editNoteInfo.etitle);
    const AddNote = (e) => {
        e.preventDefault();
        if (!noteTitle || !noteContent) {
            return
        }
        const newNote = {
            id: uuid(),
            title: noteTitle,
            content: noteContent,
            label: noteLabel,
            color: noteColor,
            noteCreated: date.format(new Date(), 'YYYY/MM/DD HH:mm:ss'),
        }
        notesDispatch({ type: "ADD_NOTE", payload: newNote })
        setNoteTitle('')
        setNoteContent('')
        setNoteColor('')
        setNoteLabel('')
    }

    const ref = useRef(null)
    const refClose = useRef(null)
    const editNote = (notes) => {
        ref.current.click()
        setEditNoteInfo({ eid: notes.id, etitle: notes.title, econtent: notes.content, elabel: notes.label })
    }

    const handleEditNote = (e) => {
        e.preventDefault()
        const editedNote = {
            id: editNoteInfo.id,
            noteTitle: editNoteInfo.etitle,
            noteContent: editNoteInfo.econtent,
            noteLabel: editNoteInfo.elabel,
        }
        notesDispatch({ type: "EDIT_NOTE", payload: editedNote })
        refClose.current.click()
    }

    return (<>
        {/* Modal */}
        <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
            Launch demo modal
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <form className="edit-note-form">
                            <input
                                type="text"
                                autoComplete="off"
                                className="create-note-title"
                                required
                                title="Add Note Title"
                                value={editNoteInfo.etitle}
                                onChange={(e) => setEditNoteInfo(e.target.value)}
                            />
                            <textarea
                                rows="2"
                                columns="8"
                                className="create-note-description"
                                required
                                title="Edit Note Description"
                                value={editNoteInfo.econtent}
                                onChange={(e) => setEditNoteInfo(e.target.value)}
                            />
                            <input
                                type="text"
                                autoComplete="off"
                                maxLength="10"
                                className="create-note-label"
                                required
                                title="Edit Note Label"
                                value={editNoteInfo.elabel}
                                onChange={(e) => setEditNoteInfo(e.target.value)}
                            />
                            <button ref={refClose} type="button" className="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="edit-btn btn-primary" onClick={handleEditNote}>Edit Note</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


        <div className="notes-container">
            <div className="create-note-wrapper">
                <form className="create-note-form" onSubmit={AddNote} style={{ background: noteColor }}>
                    <input
                        type="text"
                        placeholder="Title"
                        autoComplete="off"
                        className="create-note-title"
                        required
                        title="Add Note Title"
                        value={noteTitle}
                        onChange={(e) => setNoteTitle(e.target.value)}
                    />
                    <textarea
                        rows="6"
                        columns="10"
                        placeholder="Add some note..."
                        className="create-note-description"
                        required
                        title="Add Note Description"
                        value={noteContent}
                        onChange={(e) => setNoteContent(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Label"
                        autoComplete="off"
                        maxLength="10"
                        className="create-note-label"
                        required
                        title="Add Note Label"
                        value={noteLabel}
                        onChange={(e) => setNoteLabel(e.target.value)}
                    />
                    <div className="note-colors">
                        Add Colors
                        <div className="note-green" title="Add Green to Note" onClick={() => setNoteColor("var(--note-green)")}></div>
                        <div className="note-blue" title="Add Blue to Note" onClick={() => setNoteColor("var(--note-blue)")}></div>
                        <div className="note-yellow" title="Add Yellow to Note" onClick={() => setNoteColor("var(--note-yellow)")}></div>
                        <div className="note-red" title="Add Red to Note" onClick={() => setNoteColor("var(--note-red)")}></div>
                        <div className="note-purple" title="Add Purple to Note" onClick={() => setNoteColor("var(--note-purple)")}></div>
                    </div>
                    <button
                        className="add-note-button"
                        title="Add Note"
                    ><IoMdAdd className="add-icon" /></button>
                </form>
            </div>
            <div className="notes-wrapper">
                {notes.map((note) => {
                    return <Note note={note} key={note.id} title={note.title} content={note.content} label={note.label} date={note.noteCreated} color={note.color} editNote={editNote} ref={ref} />
                })}
            </div>
        </div>
    </>
    )
}