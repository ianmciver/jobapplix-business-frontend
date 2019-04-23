import React, { useState } from "react";

import Question from "../Question";
import {
  QuestionGroupContainer,
  TitleContainer,
  QuestionTitle
} from "./styles";

export default function QuestionGroup(props) {
  const [open, setOpen] = useState(false);
  return (
    <QuestionGroupContainer>
      <TitleContainer>
        <QuestionTitle open={open}>{props.title}</QuestionTitle>
        <svg
          viewBox="0 0 24 24"
          onClick={() => setOpen(!open)}
          className={open ? "selected" : ""}
        >
          <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
        </svg>
      </TitleContainer>
      {open
        ? props.questions &&
          props.questions.map(question => {
            return <Question key={question.id} question={question} />;
          })
        : null}
      {open ? props.render && props.render() : null}
    </QuestionGroupContainer>
  );
}
