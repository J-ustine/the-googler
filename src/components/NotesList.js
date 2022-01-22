import React, { useState } from "react";
import Delete from "./Delete";
import Tags from "./Tags";

import "../style/NotesList.css";

export default function NotesList(props) {
  const [isEditable, setIsEditable] = useState(false);

  function editNote(e) {
    setIsEditable(!isEditable);
  }

  function saveEdit() {
    setIsEditable(!isEditable);
  }

  return props.notesList.length === 0 ? (
    <h3>You don't have notes yet</h3>
  ) : (
    <div>
      <ul className="notes-list">
        {props.notesList.map((item, index) => {
          return (
            <li key={index} className="list-item">
              {!isEditable ? (
                <div>
                  <h2>{item.title}</h2>{" "}
                  <i
                    className="far fa-edit"
                    title={item.title}
                    description={item.description}
                    onClick={editNote}
                  ></i>
                  <p className="note-description">{item.description}</p>
                </div>
              ) : (
                <div>
                  <h2>{item.title}</h2>{" "}
                  <textarea
                    type="text"
                    row="4"
                    name="description"
                    onChange={(e) => (item.description = e.target.value)}
                    className="note-description"
                    defaultValue={item.description}
                  />
                  <button className="save-edit" onClick={saveEdit}>
                    Save
                  </button>
                </div>
              )}
              <Tags />
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
