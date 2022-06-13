import { CreateNoteAside } from "components/Notespage/createnote-aside";
import {NoteNav} from "components/Notespage/notepage-navbar"
import { useNotes } from "contexts/notes-contexts"
import {ArchiveNote} from "components/Notespage/archive-note"

export const ArchivePage = () => {
    const { notesState: {archive} } = useNotes()
    return (
        <>
            <NoteNav/>
            <div className="archive-body">
                <CreateNoteAside/>
                <div className="archive-note-container">
                    { archive.length === 0 ? <h1 style={{marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto'}}>Archive is Empty</h1> : 
                        archive.map(note => {
                            return <ArchiveNote note={note} key={note._id} />
                        })
                    }
                </div>
            </div>
        </>
    )
}