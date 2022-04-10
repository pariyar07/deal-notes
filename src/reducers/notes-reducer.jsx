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
        case "REMOVE_NOTE": {
            const newState = {
                ...state,
                totalNotes: state.notes.length - 1,
                notes: state.notes.filter(note => note.id !== action.payload.id),
                delete:[...state.notes.filter(deleted => deleted.id === action.payload.id)]
            }
            console.log('Removing', newState)
            return newState
        }
        case "ARCHIVE_NOTE": {
            const newState = {
                ...state,
                totalNotes: state.notes.length - 1,
                notes: state.notes.filter(note => note.id !== action.payload.id),
                archive: [...state.notes.filter(archived => archived.id === action.payload.id)]
            }
            console.log('Archived', newState)
            return newState
        }
        case "SORT_NOTE": {
            const newState = {
                ...state,
                sort: action.payload 
            }
            console.log('Sorted', newState)
            return newState
        }
        default: {
            return state
        }
    }
}