import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { NotesProvider } from "contexts/notes-contexts";
import { makeServer } from "./server";
import { NotesPage } from "pages/Notespage/index";
import { TrashPage } from "pages/Notespage/trash";
import { ArchivePage } from "pages/Notespage/archive";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <NotesProvider>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/notes" element={<NotesPage />} />
      <Route path="/trash" element={<TrashPage />} />
      <Route path="/archive" element={<ArchivePage />} />
    </Routes>
      </BrowserRouter>
    </NotesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
