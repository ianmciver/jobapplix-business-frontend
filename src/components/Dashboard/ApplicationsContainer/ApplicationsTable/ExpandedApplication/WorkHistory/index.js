import React from "react";
import { format } from "date-fns";

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
      <GroupTitle>Work History:</GroupTitle>
      {props.history.length ? (
        props.history.map((hist, index) => {
          return (
            <div style={{ marginTop: 10 }} key={index}>
              <QuestionContainer>
                <Question>Employer Name:</Question>
                <Answer>{hist.employer_name || "None Given"}</Answer>
              </QuestionContainer>
              <QuestionContainer>
                <Question>Job Title:</Question>
                <Answer>{hist.title || "None Given"}</Answer>
              </QuestionContainer>
              <QuestionContainer>
                <Question>Job Duties:</Question>
                <Answer>{hist.duties || "None Given"}</Answer>
              </QuestionContainer>
              <QuestionContainer>
                <Question>Dates Employed:</Question>
                <Answer>
                  {format(hist.start_date, "MM/DD/YYYY")} -
                  {format(hist.end_date, "MM/DD/YYYY")}
                </Answer>
              </QuestionContainer>
              <QuestionContainer>
                <Question>Reason For Leaving:</Question>
                <Answer>{hist.reason_for_leaving || "None Given"}</Answer>
              </QuestionContainer>
              <QuestionContainer>
                <Question>Location:</Question>
                <Answer>{hist.address || "None Given"}</Answer>
              </QuestionContainer>
              <QuestionContainer>
                <Question>Supervisors Name:</Question>
                <Answer>{hist.supervisors_name || "None Given"}</Answer>
              </QuestionContainer>
              <QuestionContainer>
                <Question>Phone Number:</Question>
                <Answer>{hist.phone || "None Given"}</Answer>
              </QuestionContainer>
              <QuestionContainer>
                <Question>May We Contact:</Question>
                <Answer>{hist.can_contact ? "Yes" : "No"}</Answer>
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
