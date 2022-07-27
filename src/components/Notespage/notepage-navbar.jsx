import React from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

export const NoteNav = () => {
  const user = JSON.parse(localStorage.getItem("dealUser"));

  return (
    <>
      <div className="nav-wrapper">
        <Link to="/">
          <img
            className="home-nav-img"
            src="/assets/DEAl.png"
            alt="logo"
            title="DEAL"
          />
        </Link>
        <input
          className="nav-search"
          type="search"
          placeholder="🔍 Search Note"
        ></input>
        <div className="nav-person" title="Account">
          <BsPersonCircle />
          <p>Welcome, {user.username}</p>
        </div>
      </div>
    </>
  );
};
