import React, { useState } from "react";
import "./Form.css";

export default function Form(props) {
  const [note, setNote] = useState({ title: "", description: "" });

  function createNote(e) {
    e.target.name === "title"
      ? setNote({ ...note, title: e.target.value })
      : setNote({ ...note, description: e.target.value });
  }

  function addNote(e) {
    e.preventDefault();
    props.setNotesList([...props.notesList, note]);
    setNote({ title: "", description: "" });
  }

  return (
    <form action="" className="form-create" onSubmit={addNote}>
      <h3>New Note</h3>
      <label htmlFor="">Title</label>
      <input
        type="text"
        placeholder="Enter your note title"
        className="createForm-input"
        name="title"
        onChange={createNote}
        value={note.title}
      />
      <label htmlFor="">Description</label>
      <textarea
        placeholder="Enter your note description"
        className="createForm-input"
        name="description"
        onChange={createNote}
        value={note.description}
      ></textarea>
      <button className="createForm-button">Create</button>
    </form>
  );
}
