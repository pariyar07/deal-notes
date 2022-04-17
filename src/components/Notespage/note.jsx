import React from 'react'
import { BsArchive} from "react-icons/bs"
import { FiTrash, FiEdit2 } from "react-icons/fi"
import { useNotes} from 'contexts/notes-contexts'

export const Note = ({title, content, date, color, note, label, editNote}) => {
    const {notesDispatch} = useNotes()
    return (
        <div className="note-wrapper" style={{ background: color }}>
            <h1>{title}</h1>
            <p>{content}</p>
            <p className="note-label">{label}</p>
            <div>
                <p>{date}</p>
                <button title="Edit Note" onClick={() => {editNote(note)}}><FiEdit2/></button>
                <button title="Add to Archive" onClick={() => notesDispatch({type: "ARCHIVE_NOTE", payload: note})}><BsArchive /></button>
                <button title="Delete" onClick={() => notesDispatch({type: "REMOVE_NOTE", payload: note})}><FiTrash /></button>
            </div>
        </div>
    )
}