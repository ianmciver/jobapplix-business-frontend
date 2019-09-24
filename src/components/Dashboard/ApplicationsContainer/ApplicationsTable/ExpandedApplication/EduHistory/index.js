import React from "react";

import {
  ExtendedAppGroup,
  GroupTitle,
  QuestionContainer,
  Question,
  Answer
} from "../styles";

export default function EduHistory(props) {
  return (
    <ExtendedAppGroup>
      <GroupTitle>Educational History:</GroupTitle>
      {props.history.length ? (
        props.history.map((hist, index) => {
          return (
            <div style={{ marginTop: 10 }} key={index}>
              <QuestionContainer>
                <Question>School Name:</Question>
                <Answer>{hist.school_name || "None Given"}</Answer>
              </QuestionContainer>
              <QuestionContainer>
                <Question>School Type:</Question>
                <Answer>{hist.school_type || "None Given"}</Answer>
              </QuestionContainer>
              <QuestionContainer>
                <Question>Field Of Study:</Question>
                <Answer>{hist.field_of_study || "None Given"}</Answer>
              </QuestionContainer>
              <QuestionContainer>
                <Question>Years Completed:</Question>
                <Answer>{hist.years_completed || "None Given"}</Answer>
              </QuestionContainer>
              <QuestionContainer>
                <Question>Degree Earned:</Question>
                <Answer>{hist.degree || "None Given"}</Answer>
              </QuestionContainer>
              <QuestionContainer>
                <Question>Location:</Question>
                <Answer>{hist.location || "None Given"}</Answer>
              </QuestionContainer>
              <QuestionContainer>
                <Question>Phone Number:</Question>
                <Answer>{hist.phone || "None Given"}</Answer>
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
