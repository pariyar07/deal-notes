import React from 'react'
import { MdNoteAdd } from "react-icons/md"
import {Note} from 'components/Notespage/note'

export const CreateNote = () => {
    return (
        <div className="notes-container">
            <div className="create-note-wrapper">
                <form className="create-note-form">
                    <input type="text" placeholder="Title" autocomplete="off" className="create-note-title" title="Add Title" />
                    <textarea rows="7" columns="10" placeholder="Add some note..." className="create-note-description" title="Add Description" />
                    <button className="add-note-button" title="Add Note"><MdNoteAdd /></button>
                </form>
            </div>
            <div className="notes-wrapper">
                <Note/>
            </div>
        </div>
    )
}