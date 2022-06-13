import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "pages/Landingpage/index";
import { NotesPage } from "pages/Notespage/index";
import { TrashPage } from "pages/Notespage/trash";
import { ArchivePage } from "pages/Notespage/archive";
import { RequiresAuth } from "services/requiresAuth.jsx";
import Login from "pages/login/login.jsx";
import SignUp from "pages/signup/signup.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/notes" element={<RequiresAuth><NotesPage/></RequiresAuth>} />
        <Route path="/trash" element={<RequiresAuth><TrashPage/></RequiresAuth>} />
        <Route path="/archive" element={<RequiresAuth><ArchivePage/></RequiresAuth>} />
        <Route
          path="*"
          element={
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1 style={{ fontSize: "5rem" }}>Page Not Found!</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
