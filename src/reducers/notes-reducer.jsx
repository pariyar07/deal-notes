export const NotesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return {
        totalNotes: state.notes.length + 1,
        notes: [...state.notes, action.payload],
        archive: [],
        delete: [],
      };
    }
    case "EDIT_NOTE": {
      return {
        notes: [...state.notes, action.payload],
      };
    }
    case "DELETE_NOTE": {
      return {
        ...state,
        totalNotes: state.notes.length - 1,
        notes: state.notes.filter((note) => note._id !== action.payload._id),
        delete: [...state.delete, { ...action.payload }],
      };
    }
    case "ARCHIVE_NOTE": {
      return {
        ...state,
        totalNotes: state.notes.length - 1,
        notes: state.notes.filter((note) => note._id !== action.payload._id),
        archive: [...state.archive, { ...action.payload }],
      };
    }
    case "DELETE_ARCHIVE_NOTE": {
      return {
        ...state,
        archive: state.archive.filter(
          (note) => note._id !== action.payload._id
        ),
        delete: [...state.delete, { ...action.payload }],
      };
    }
    case "UNDO_ARCHIVE_NOTE": {
      return {
        ...state,
        archive: state.archive.filter(
          (note) => note._id !== action.payload._id
        ),
        totalNotes: state.notes.length + 1,
        notes: [...state.notes, { ...action.payload }],
      };
    }
    case "DELETE_TRASH_NOTE": {
      return {
        ...state,
        delete: state.delete.filter((note) => note._id !== action.payload._id),
      };
    }
    case "UNDO_TRASH_NOTE": {
      return {
        ...state,
        delete: state.delete.filter((note) => note._id !== action.payload._id),
        totalNotes: state.notes.length + 1,
        notes: [...state.notes, { ...action.payload }],
      };
    }
    default: {
      return state;
    }
  }
};
