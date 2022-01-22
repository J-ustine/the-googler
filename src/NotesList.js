import React from "react";
import Note from "./Note";
import Delete from "./Delete";

export default function NotesList() {
  return (
    <div>
      <ul>
        <li>
          <Note />
        </li>
      </ul>
      <Delete />
    </div>
  );
}
