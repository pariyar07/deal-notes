import { useState } from "react";
import { useNotes } from "contexts/notes-contexts";
import useToast from "custom/useToast";

const EditNoteModal = ({ note, showModal, setShowModal }) => {
  const [updateNoteTitle, setUpdateNoteTitle] = useState("");
  const [updateNoteContent, setUpdateNoteContent] = useState("");
  const [updateNoteLabel, setUpdateNoteLabel] = useState("");

  const {
    notesState: { notes },
  } = useNotes();
  const { showToast } = useToast();

  const updateNoteHandler = () => {
    setShowModal(false);
    let toUpdateNote = notes.findIndex((elem) => elem._id === note._id);
    notes[toUpdateNote].title = updateNoteTitle;
    notes[toUpdateNote].content = updateNoteContent;
    notes[toUpdateNote].label = updateNoteLabel;
    showToast("Note Updated", "success");
  };

  return (
    <>
      {showModal && (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-transparent">
          <div className="relative w-1/2 my-6 m-auto">
            <div className="border-0 rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex p-5 border-b border-solid border-grey rounded-t w-full">
                <h3 className="text-2xl font-semibold">Edit Note</h3>
              </div>
              <div className="p-6 flex-auto">
                <form className="rounded px-8 pt-6 pb-8 w-full">
                  <label className="block text-black text-sm font-bold mb-1">
                    Update Title
                  </label>
                  <input
                    className="shadow appearance-none rounded w-full py-2 px-1 text-black mb-8"
                    defaultValue={note.title}
                    onChange={(e) => setUpdateNoteTitle(e.target.value)}
                  />
                  <label className="block text-black text-sm font-bold mb-1">
                    Update Content
                  </label>
                  <input
                    className="shadow appearance-none rounded w-full py-2 px-1 text-black mb-8"
                    defaultValue={note.content}
                    onChange={(e) => setUpdateNoteContent(e.target.value)}
                  />
                  <label className="block text-black text-sm font-bold mb-1">
                    Update Label
                  </label>
                  <input
                    className="shadow appearance-none rounded w-full py-2 px-1 text-black"
                    defaultValue={note.label}
                    onChange={(e) => setUpdateNoteLabel(e.target.value)}
                  />
                </form>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-grey rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="text-black bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={updateNoteHandler}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditNoteModal;
