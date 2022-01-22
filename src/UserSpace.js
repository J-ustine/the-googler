import React, { useState } from "react";
import Form from "./Form";
import NotesList from "./NotesList";

export default function UserSpace() {
  const [notesList, setNotesList] = useState([]);

  return (
    <div className="user-space">
      <Form setNotesList={setNotesList} notesList={notesList} />
      <NotesList notesList={notesList} />
    </div>
  );
}
