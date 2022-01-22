import React from "react";
import "../style/CreateForm.css";

export default function CreateForm(props) {
  function createNote(e) {
    e.target.name === "title"
      ? props.setNote({ ...props.note, title: e.target.value })
      : props.setNote({ ...props.note, description: e.target.value });
  }

  function addNote(e) {
    e.preventDefault();
    props.setNotesList([...props.notesList, props.note]);
    props.setNote({ title: "", description: "" });
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
        value={props.note.title}
      />
      <label htmlFor="">Description</label>
      <textarea
        placeholder="Enter your note description"
        className="createForm-input"
        name="description"
        rows="4"
        onChange={createNote}
        value={props.note.description}
      ></textarea>
      <button className="createForm-button">Create</button>
    </form>
  );
}
