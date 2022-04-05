import React from 'react'

export const HomeNav = () => {
    return (
        <>
            <div className="nav-wrapper">
                <img className="home-nav-img" src="/assets/DEAl.png" alt="logo" title="DEAL"/>
                <div className="nav-btn-wrapper">
                    <button className="nav-login">Log in</button>
                    <button className="nav-signup">Sign up</button>
                </div>
            </div>
        </>
    )
}