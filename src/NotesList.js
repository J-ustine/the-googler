import React from "react";
import Delete from "./Delete";

export default function NotesList(props) {
  return (
    <div>
      <ul>
        {props.notesList.map((item, index) => {
          return (
            <li key={index}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <Delete />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
