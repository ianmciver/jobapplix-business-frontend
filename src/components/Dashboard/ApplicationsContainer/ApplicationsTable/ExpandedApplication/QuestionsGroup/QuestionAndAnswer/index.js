import React from "react";

import { QuestionContainer, Question, Answer, SubQuestion } from "../../styles";

export default function QuestionAndAnswer(props) {
  const questionType = props.question.type;
  const answer =
    questionType === "bool"
      ? props.question.answer_bool
        ? "Yes"
        : "No"
      : props.question.answer_text || "No Answer Given";

  const showSubQuestion =
    questionType === "bool"
      ? props.question.answer_bool
        ? true
        : false
      : props.question.answer_text || false;

  const subQuestionType = props.question.subType;
  const subAnswer =
    subQuestionType === "bool"
      ? props.question.sub_question_ans_bool
        ? "Yes"
        : "No"
      : props.question.sub_question_ans_text || "No Answer Given";
  return (
    <QuestionContainer>
      <Question>{props.question.question}</Question>
      <Answer>{answer}</Answer>
      {props.question.subQuestion && showSubQuestion && (
        <div>
          <SubQuestion>{props.question.subQuestion}</SubQuestion>
          <Answer>{subAnswer}</Answer>
        </div>
      )}
    </QuestionContainer>
  );
}
