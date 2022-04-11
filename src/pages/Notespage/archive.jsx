import React from 'react'
import {NoteAside} from "components/Notespage/notepage-aside"
import {NoteNav} from "components/Notespage/notepage-navbar"
import { useNotes } from "contexts/notes-contexts"
import {ArchiveNote} from "components/Notespage/archive-note"

export const ArchivePage = () => {
    const { notesState } = useNotes()
    return (
        <>
            <NoteNav/>
            <div className="archive-body">
                <NoteAside/>
                <div className="archive-note-container">
                    { notesState.archive.length === 0 ? <h1 style={{marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto'}}>Archive is Empty</h1> : 
                        notesState.archive.map(note => {
                            const date = [notesState].map((note) => { return note.noteCreated })
                            return <ArchiveNote note={note} key={note.id} title={note.title} content={note.content} date={date} color={note.color} />
                        })
                    }
                </div>
            </div>
        </>
    )
}