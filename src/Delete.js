import React from "react";
import "./Delete.css";

export default function Delete(props) {
  function deleteNote(e) {
    e.preventDefault();
    props.setNotesList(
      props.notesList.filter(function (ele) {
        return ele.title !== props.title;
      })
    );
  }

  return (
    <button className="delete-button" onClick={deleteNote}>
      Delete
    </button>
  );
}
