import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineBulb } from "react-icons/ai"
import { IoMdNotificationsOutline } from "react-icons/io"
import { BiLabel } from "react-icons/bi"
import { BsArchive } from "react-icons/bs"
import { FiTrash } from "react-icons/fi"

export const CreateNoteAside = () => {
    return (
        <div className="note-aside-wrapper">
            <ul className="note-aside-list-wrapper">
                <Link to="/notes"><li className="note-aside-list" title="Notes"><AiOutlineBulb />&nbsp; Notes</li></Link>
                <li className="note-aside-list" title="Reminders"><IoMdNotificationsOutline />&nbsp; Reminders</li>
                <li className="note-aside-list" title="Labels"><BiLabel /> &nbsp; Labels</li>
                <Link to="/archive"><li className="note-aside-list" title="Archive"><BsArchive />&nbsp; Archive</li></Link>
                <Link to="/trash"></Link><Link to="/trash"><li className="note-aside-list" title="Trash" to="/trash"><FiTrash />&nbsp; Trash</li></Link>
            </ul>
            <div className="sort-container">
                <h2>Sort By:</h2>
                <ul className="date-sort">
                    <li>
                        <input type="radio" id="latest" name="sort-selector"/>
                        <label htmlFor="latest">Notes - Latest First</label>
                    </li>
                    <li>
                        <input type="radio" id="oldest" name="sort-selector"/>
                        <label htmlFor="oldest">Notes - Oldest First</label>
                    </li>
                </ul>
            </div>
            <button className="filter-clear">Clear Filters</button>
        </div>
    )
}