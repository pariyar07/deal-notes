import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineBulb } from "react-icons/ai"
import { IoMdNotificationsOutline } from "react-icons/io"
import { BiLabel } from "react-icons/bi"
import { BsArchive } from "react-icons/bs"
import { FiTrash } from "react-icons/fi"

export const NoteAside = () => {
    return (
        <div className="note-aside-wrapper">
            <ul className="note-aside-list-wrapper">
                <Link to="/notes"><li className="note-aside-list" title="Notes"><AiOutlineBulb />&nbsp; Notes</li></Link>
                <li className="note-aside-list" title="Reminders"><IoMdNotificationsOutline />&nbsp; Reminders</li>
                <li className="note-aside-list" title="Labels"><BiLabel /> &nbsp; Labels</li>
                <Link to="/archive"><li className="note-aside-list" title="Archive"><BsArchive />&nbsp; Archive</li></Link>
                <Link to="/trash"></Link><Link to="/trash"><li className="note-aside-list" title="Trash" to="/trash"><FiTrash />&nbsp; Trash</li></Link>
            </ul>
        </div>
    )
}