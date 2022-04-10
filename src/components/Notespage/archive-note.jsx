import React from 'react'
import { BiUndo } from "react-icons/bi"
import { FiTrash } from "react-icons/fi"
import { useNotes} from 'contexts/notes-contexts'

export const ArchiveNote = ({title, content, date, color, note}) => {
    const {notesDispatch} = useNotes()
    return (
        <div className="archive-note-wrapper" style={{ background: color }}>
            <h1>{title}</h1>
            <p>{content}</p>
            <div>
                <p>{date}</p>
                    <button title="Undo" className="undo-btn"><BiUndo /></button>
                    <button title="Delete" onClick={() => notesDispatch({type: "ARCHIVE_NOTE", payload: note})}><FiTrash /></button>
            </div>
        </div>
    )
}