import React from 'react'
import { BiUndo } from "react-icons/bi"
import { FiTrash } from "react-icons/fi"
import { useNotes} from 'contexts/notes-contexts'

export const TrashNote = ({title, content, color, note, label}) => {
    const {notesDispatch} = useNotes()
    return (
        <div className="trash-note-wrapper" style={{ background: color }}>
            <h1>{title}</h1>
            <p>{content}</p>
            <p className="note-label">{label}</p>
            <div>
                <p>{note.noteCreated}</p>
                    <button title="Undo" className="undo-btn"><BiUndo /></button>
                    <button title="Delete" onClick={() => notesDispatch({type: "REMOVE_NOTE", payload: note})}><FiTrash /></button>
            </div>
        </div>
    )
}