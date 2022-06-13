import {Link } from "react-router-dom";

export const LandingNav = () => {
    return (
        <>
            <div className="nav-wrapper">
                <img className="home-nav-img" src="/assets/DEAl.png" alt="logo" title="DEAL"/>
                <div className="nav-btn-wrapper">
                    <Link to="/login" className="nav-login">Log in</Link>
                    <Link to="/signup" className="nav-signup">Sign up</Link>
                </div>
            </div>
        </>
    )
}