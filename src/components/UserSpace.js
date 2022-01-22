import React, { useState } from "react";
import CreateForm from "./CreateForm";
import NotesList from "./NotesList";

export default function UserSpace() {
  const [notesList, setNotesList] = useState([]);
  const [note, setNote] = useState({ title: "", description: "" });

  return (
    <div className="user-space">
      <CreateForm
        setNotesList={setNotesList}
        notesList={notesList}
        note={note}
        setNote={setNote}
      />
      <NotesList
        setNotesList={setNotesList}
        notesList={notesList}
        note={note}
        setNote={setNote}
      />
    </div>
  );
}
