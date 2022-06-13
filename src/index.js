import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { NotesProvider } from "contexts/notes-contexts";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "contexts/authContext";
import { makeServer } from "./server";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NotesProvider>
          <App />
          <ToastContainer
            position="bottom-right"
            autoClose="3000"
            hideProgressBar="false"
            closeOnClick="true"
            pauseOnHover="true"
            draggable="true"
            progress="undefined"
          />
        </NotesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
