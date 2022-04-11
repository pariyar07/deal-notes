import React from 'react'
import { BiLabel } from "react-icons/bi"
import { BsArchive} from "react-icons/bs"
import { FiTrash, FiEdit2 } from "react-icons/fi"
import { useNotes} from 'contexts/notes-contexts'

export const Note = ({title, content, date, color, edit, note}) => {
    const {notesDispatch} = useNotes()
    return (
        <div className="note-wrapper" style={{ background: color }}>
            <h1>{title}</h1>
            <p>{content}</p>
            <button className="edit-note" title="Edit Note" onClick={() => edit}><FiEdit2/></button>
            <div>
                <p>{date}</p>
                <button title="Add Label"><BiLabel /></button>
                <button title="Add to Archive" onClick={() => notesDispatch({type: "ARCHIVE_NOTE", payload: note})}><BsArchive /></button>
                <button title="Delete" onClick={() => notesDispatch({type: "REMOVE_NOTE", payload: note})}><FiTrash /></button>
            </div>
        </div>
    )
}