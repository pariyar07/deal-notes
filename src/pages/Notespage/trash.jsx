import React from 'react'
import { NoteNav } from "components/Notespage/notepage-navbar"
import { NoteAside } from "components/Notespage/notepage-aside"
import { TrashNote } from "components/Notespage/trash-note"
import { useNotes } from "contexts/notes-contexts"

export const TrashPage = () => {
    const { notesState } = useNotes()
    return (
        <>
            <NoteNav />
            <div className="trash-body">
                <NoteAside />
                <div className="trash-note-container">
                { notesState.delete.length === 0 ? <h1 style={{marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto'}}>Trash is Empty</h1> : 
                        notesState.delete.map(note => {
                            const date = [notesState].map((note) => { return note.noteCreated })
                            return <TrashNote note={note} key={note.id} title={note.title} content={note.content} date={date} color={note.color} />
                        })
                    }
                </div>
            </div>
        </>
    )
}