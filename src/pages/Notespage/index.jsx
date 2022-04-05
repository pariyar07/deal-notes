import React from 'react'
import {NoteNav} from "components/Notespage/notepage-navbar"
import {CreateNote} from "components/Notespage/create-note"
import {NoteAside} from "components/Notespage/notepage-aside"

export const Notespage = () => {
    return (
        <>
            <NoteNav/>
            <div className="notes-body">
                <NoteAside/>
                <CreateNote/>
            </div>
        </>
    )
}