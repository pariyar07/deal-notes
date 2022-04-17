export const NotesReducer = (state, action) => {
    switch (action.type) {
        case "ADD_NOTE": {
            const newState = {
                totalNotes: state.notes.length + 1,
                notes: [...state.notes, action.payload],
                archive: [],
                delete: []
            }
            return newState
        }
        case "EDIT_NOTE": {
            const newState = {
                notes: [...state.notes, action.payload],
            }
            return newState
        }
        case "REMOVE_NOTE": {
            const newState = {
                ...state,
                totalNotes: state.notes.length - 1,
                notes: state.notes.filter(note => note.id !== action.payload.id),
                delete:[...state.notes.filter(deleted => deleted.id === action.payload.id)]
            }
            return newState
        }
        case "ARCHIVE_NOTE": {
            const newState = {
                ...state,
                totalNotes: state.notes.length - 1,
                notes: state.notes.filter(note => note.id !== action.payload.id),
                archive: [...state.notes.filter(archived => archived.id === action.payload.id)]
            }
            return newState
        }
        default: {
            return state
        }
    }
}