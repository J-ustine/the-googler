import React from "react";
import Form from "./Form";
import NotesList from "./NotesList";

export default function UserSpace() {
  return (
    <div className="user-space">
      <Form />
      <NotesList />
    </div>
  );
}
