import React from 'react'
import { createContext, useContext, useReducer} from 'react'
import {NotesReducer} from 'reducers/notes-reducer'

const NotesContext = createContext(null);

const initialState = {
    noteCreated: null,
    totalNotes: 0,
    notes: [],
    archive: [],
    delete: []
}

const NotesProvider = ({children}) => {
    const [notesState, notesDispatch] = useReducer(NotesReducer, initialState);

    return (
        <NotesContext.Provider value={{notesState, notesDispatch}}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export {NotesProvider, useNotes}