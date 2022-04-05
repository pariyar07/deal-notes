import React from 'react'
import { BiLabel } from "react-icons/bi"
import { BsArchive, BsPin } from "react-icons/bs"
import { FiTrash } from "react-icons/fi"

export const Note = () => {
    return (
        <div className="note-wrapper">
            <h1>Title</h1>
            <p>Description: Some information about the project.</p>
            <button className="pin-note" title="Pin Note"><BsPin/></button>
            <div>
                <button title="Add Label"><BiLabel /></button>
                <button title="Add to Archive"><BsArchive /></button>
                <button title="Delete"><FiTrash /></button>
            </div>
        </div>
    )
}