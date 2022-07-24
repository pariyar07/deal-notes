import { NavLink, Link } from "react-router-dom";
import { AiOutlineBulb } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiLabel } from "react-icons/bi";
import { BsArchive } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import { useNotes } from "contexts/notes-contexts";
import useToast from "custom/useToast";

export const CreateNoteAside = () => {
  const { setOldestFirst } = useNotes();
  const { showToast } = useToast();

  const sortLatestNoteHandler = () => {
    setOldestFirst(false);
    showToast("Sorted to latest note first", "success");
  };

  const sortOldestNoteHandler = () => {
    setOldestFirst(true);
    showToast("Sorted to oldest note first", "success");
  };

  function navActive({ isActive }) {
    return {
      background: isActive ? "var(--notes-primary)" : "",
      color: isActive ? "var(--primary-clr)" : "var(--primary-bg)",
    };
  }

  return (
    <div className="note-aside-wrapper">
      <div className="note-aside-list-wrapper">
        <NavLink
          to="/notes"
          style={navActive}
          className="note-aside-list"
          title="Notes"
        >
          <AiOutlineBulb />
          &nbsp; Notes
        </NavLink>
        <Link to="/reminders" className="note-aside-list" title="Reminders">
          <IoMdNotificationsOutline />
          &nbsp; Reminders
        </Link>
        <Link to="/labels" className="note-aside-list" title="Labels">
          <BiLabel /> &nbsp; Labels
        </Link>
        <NavLink
          to="/archive"
          style={navActive}
          className="note-aside-list"
          title="Archive"
        >
          <BsArchive />
          &nbsp; Archive
        </NavLink>
        <NavLink
          to="/trash"
          style={navActive}
          className="note-aside-list"
          title="Trash"
        >
          <FiTrash />
          &nbsp; Trash
        </NavLink>
      </div>
      <div className="sort-container">
        <h2>Sort By:</h2>
        <ul className="date-sort">
          <li>
            <input type="radio" id="latest" name="sort-selector" />
            <label htmlFor="latest" onClick={sortLatestNoteHandler}>
              Notes - Latest First
            </label>
          </li>
          <li>
            <input type="radio" id="oldest" name="sort-selector" />
            <label htmlFor="oldest" onClick={sortOldestNoteHandler}>
              Notes - Oldest First
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};
