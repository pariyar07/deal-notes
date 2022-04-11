import React from 'react'
import { BsPersonCircle } from "react-icons/bs"

export const NoteNav = () => {
    return (
        <>
            <div className="nav-wrapper">
                <img className="home-nav-img" src="/assets/DEAl.png" alt="logo" title="DEAL" />
                <input className="nav-search" type="search" placeholder="🔍 Search Note"></input>
                <div className="nav-person" title="Account">
                    <BsPersonCircle />
                    <p>Welcome, User</p>
                </div>
            </div>
        </>
    )
}