import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import { IoMdAdd } from "react-icons/io"
import { Note } from 'components/Notespage/note'
import {useNotes} from "contexts/notes-contexts"
import date from 'date-and-time';

export const CreateNote = () => {
    const {notesState: {notes}, notesDispatch, notesDispatch:{sort}} = useNotes();
    const [noteTitle, setNoteTitle] = useState("");
    const [noteContent, setNoteContent] = useState("");
    const [noteColor, setNoteColor] = useState("");

    const AddNote = (e) => {
        e.preventDefault();
        if(!noteTitle || !noteContent) {
            return
        }
        const newNote = {
            id: uuid(),
            title: noteTitle,
            content: noteContent,
            color: noteColor,
            noteCreated: date.format(new Date(), 'YYYY/MM/DD HH:mm:ss'),
        }
        notesDispatch({ type: "ADD_NOTE", payload: newNote})
        setNoteTitle('')
        setNoteContent('')
        setNoteColor('')
    }

    const transformNotes = () => {
        let sortedNotes = notes;
        if (sort) {
            sortedNotes = sortedNotes.sort((a, b) =>
                sort === "latest" ? a.noteCreated - b.noteCreated : b.noteCreated - a.noteCreated
            );
        }
        return sortedNotes;
    };


    return (
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
                    ><IoMdAdd /></button>
                </form>
            </div>
            <div className="notes-wrapper">
                {transformNotes().map((note) => {
                    return <Note note={note} key={note.id} title={note.title} content={note.content} date={note.noteCreated} color={note.color}/>
                })}
            </div>
        </div>
    )
}