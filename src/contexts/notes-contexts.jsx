import { createContext, useContext, useReducer, useState} from 'react'
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
    const [oldestFirst, setOldestFirst] = useState(false)

    return (
        <NotesContext.Provider value={{notesState, notesDispatch, oldestFirst, setOldestFirst}}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export {NotesProvider, useNotes}