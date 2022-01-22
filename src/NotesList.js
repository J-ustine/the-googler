import React from "react";
import Delete from "./Delete";
import "./NotesList.css";

export default function NotesList(props) {
  return props.notesList.length === 0 ? (
    <h3>"You don't have notes yet"</h3>
  ) : (
    <div>
      <ul className="notes-list">
        {props.notesList.map((item, index) => {
          return (
            <li key={index} className="list-item">
              <h2>{item.title}</h2>
              <p className="note-description">{item.description}</p>
              <p>Edit</p>
              <p>Tags</p>
              <Delete
                title={item.title}
                description={item.description}
                notesList={props.notesList}
                setNotesList={props.setNotesList}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
