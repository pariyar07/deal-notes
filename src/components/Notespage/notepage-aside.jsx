import React from 'react'
import {AiOutlineBulb} from "react-icons/ai"
import {IoMdNotificationsOutline} from "react-icons/io"
import {BiLabel} from "react-icons/bi"
import {BsArchive} from "react-icons/bs"
import {FiTrash} from "react-icons/fi"

export const NoteAside = () => {
    return (
        <div className="note-aside-wrapper">
            <ul className="note-aside-list-wrapper">
                <li className="note-aside-list" title="Notes"><AiOutlineBulb/>&nbsp; Notes</li>
                <li className="note-aside-list" title="Reminders"><IoMdNotificationsOutline/>&nbsp; Reminders</li>
                <li className="note-aside-list" title="Labels"><BiLabel/> &nbsp; Labels</li>
                <li className="note-aside-list" title="Archive"><BsArchive/>&nbsp; Archive</li>
                <li className="note-aside-list" title="Trash"><FiTrash/>&nbsp; Trash</li>
            </ul>
        </div>
    )
}