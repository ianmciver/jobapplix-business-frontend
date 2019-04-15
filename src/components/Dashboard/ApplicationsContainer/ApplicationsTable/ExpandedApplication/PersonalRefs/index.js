import React from "react";

import {
  ExtendedAppGroup,
  GroupTitle,
  QuestionContainer,
  Question,
  Answer
} from "../styles";

export default function PersonalRefs(props) {
  return (
    <ExtendedAppGroup>
      <GroupTitle>Personal References:</GroupTitle>
      {props.references.length ? (
        props.references.map((reference, index) => {
          return (
            <div key={index}>
              <QuestionContainer>
                <Question>Name:</Question>
                <Answer>{reference.name || "None Given"}</Answer>
              </QuestionContainer>
              <QuestionContainer>
                <Question>Phone Number:</Question>
                <Answer>{reference.phone || "None Given"}</Answer>
              </QuestionContainer>
              <QuestionContainer>
                <Question>Email:</Question>
                <Answer>{reference.email || "None Given"}</Answer>
              </QuestionContainer>
              <QuestionContainer>
                <Question>Address:</Question>
                <Answer>{reference.address || "None Given"}</Answer>
              </QuestionContainer>
              <QuestionContainer>
                <Question>Relationship:</Question>
                <Answer>{reference.relationship || "None Given"}</Answer>
              </QuestionContainer>
              <QuestionContainer>
                <Question>Years Known:</Question>
                <Answer>{reference.years_known || "None Given"}</Answer>
              </QuestionContainer>
            </div>
          );
        })
      ) : (
        <GroupTitle>No References Given</GroupTitle>
      )}
    </ExtendedAppGroup>
  );
}
