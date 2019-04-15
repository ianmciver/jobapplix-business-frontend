import styled from "styled-components";

import {
  textLight,
  textBlue,
  borderAvailGraph,
  backgroundBlue35percent,
  backgroundNoteBox,
  textUnselected,
  backgroundBlue
} from "../../../../../../constants/colors";

export const DividerBar = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid ${borderAvailGraph};
`;
export const NoteSubHeader = styled.p`
  font-size: 1.2rem;
  color: ${textBlue};
  font-style: italic;
`;

export const NoNotes = styled.div`
  margin: 15px 0;
  font-size: 1.4rem;
  font-style: italic;
`;

export const Note = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

export const NoteText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const NoteAuthor = styled.p`
  font-size: 1.2rem;
  font-style: italic;
`;

export const NoteBox = styled.textarea`
  width: 100%;
  border: 2px solid ${backgroundBlue35percent};
  background-color: ${backgroundNoteBox};
  padding: 7px;
  height: 150px;
  outline: none;
  &::placeholder {
    color: ${textUnselected};
    font-size: 1.2rem;
  }

  &:focus {
    border-color: ${backgroundBlue};
  }
`;

export const AddNoteButton = styled.button`
  font-size: 1.4rem;
  background: ${backgroundBlue};
  /* width: 116px; */
  padding: 13px;
  color: ${textLight};
  text-transform: uppercase;
  outline: none;
  margin: 10px 0;
`;
