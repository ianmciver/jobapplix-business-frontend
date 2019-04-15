import React, { useState, useContext } from "react";
import { format } from "date-fns";
import { ApplicationsContext } from "../../../ApplicationsContext";

// Get own styles
import {
  NoteSubHeader,
  DividerBar,
  NoNotes,
  Note,
  NoteText,
  NoteAuthor,
  NoteBox,
  AddNoteButton
} from "./styles";

// Get styles from ExpandedApplication
import { ExtendedAppGroup, GroupTitle } from "../styles";

export default function Notes(props) {
  const [noteText, setNoteText] = useState("");
  const appContext = useContext(ApplicationsContext);
  const app = appContext.selectedApp;

  const createNewNote = e => {
    setNoteText("");
    appContext.addNote(noteText);
  };
  return (
    <ExtendedAppGroup>
      <DividerBar />
      <GroupTitle>Notes:</GroupTitle>
      <NoteSubHeader>
        All notes are kept internal and will not be shared with the applicant.
      </NoteSubHeader>
      {app.comments.length ? (
        app.comments.map(note => {
          return (
            <Note key={note.id}>
              <NoteText>{note.comment}</NoteText>
              <NoteAuthor>- {format(note.created_at, "MM/DD/YY")}</NoteAuthor>
            </Note>
          );
        })
      ) : (
        <NoNotes>There are no notes yet for this application</NoNotes>
      )}
      <NoteBox
        value={noteText}
        onChange={e => setNoteText(e.target.value)}
        placeholder="Write note here"
      />
      <AddNoteButton onClick={createNewNote}>Save Note</AddNoteButton>
    </ExtendedAppGroup>
  );
}
