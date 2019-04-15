import React from "react";
import { format } from "date-fns";
import {
  ExtendedAppGroup,
  GroupTitle,
  QuestionContainer,
  Question,
  Answer
} from "../styles";
import { titles } from "../index";
export default function GeneralInformation(props) {
  const { questionGroup, position } = props;
  const firstName = questionGroup.questions.find(q => q.id === 1);
  const middleName = questionGroup.questions.find(q => q.id === 3);
  const lastName = questionGroup.questions.find(q => q.id === 2);
  const suffix = questionGroup.questions.find(q => q.id === 4);
  const phone = questionGroup.questions.find(q => q.id === 5);
  const email = questionGroup.questions.find(q => q.id === 6);
  const city = questionGroup.questions.find(q => q.id === 7);
  const zip = questionGroup.questions.find(q => q.id === 8);
  return (
    <ExtendedAppGroup>
      <GroupTitle>{titles["basic"]}:</GroupTitle>
      <QuestionContainer>
        <Question>Position:</Question>
        <Answer>{position}</Answer>
      </QuestionContainer>
      <QuestionContainer>
        <Question>Applied On:</Question>
        <Answer>{format(props.applied, "MM/DD/YYYY")}</Answer>
      </QuestionContainer>
      <QuestionContainer>
        <Question>Name:</Question>
        <Answer>
          {firstName && firstName.answer_text
            ? `${firstName.answer_text} `
            : ""}
          {middleName && middleName.answer_text
            ? `${middleName.answer_text[0]} `
            : ""}
          {lastName && lastName.answer_text ? `${lastName.answer_text} ` : ""}
          {suffix && suffix.answer_text ? suffix.answer_text : ""}
        </Answer>
      </QuestionContainer>
      <QuestionContainer>
        <Question>Phone Number:</Question>
        <Answer>
          {phone && phone.answer_text ? phone.answer_text : "None Provided"}
        </Answer>
      </QuestionContainer>
      <QuestionContainer>
        <Question>Email:</Question>
        <Answer>
          {email && email.answer_text ? email.answer_text : "None Provided"}
        </Answer>
      </QuestionContainer>
      <QuestionContainer>
        <Question>City:</Question>
        <Answer>
          {city && city.answer_text ? city.answer_text : "None Provided"}
        </Answer>
      </QuestionContainer>
      <QuestionContainer>
        <Question>Zip:</Question>
        <Answer>
          {zip && zip.answer_text ? zip.answer_text : "None Provided"}
        </Answer>
      </QuestionContainer>
    </ExtendedAppGroup>
  );
}
