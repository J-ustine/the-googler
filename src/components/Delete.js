import React from "react";
import "../style/Delete.css";

export default function Delete(props) {
  function deleteNote(e) {
    e.preventDefault();
    props.setNotesList(
      props.notesList.filter(function (e) {
        return e.title !== props.title;
      })
    );
  }

  return (
    <button className="delete-button" onClick={deleteNote}>
      Delete
    </button>
  );
}
