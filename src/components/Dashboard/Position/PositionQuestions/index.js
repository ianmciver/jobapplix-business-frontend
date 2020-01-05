import React, { useContext, useState } from "react";

import { Checkbox } from "../../../../styles/forms2";

import {
  InstructionSpan,
  PositionNextButton,
  PositionCancelButton,
  PositionName,
  StandardAppContainer,
  ItalicsSpan,
  PositionQuestionsContainer
} from "./styles";

import { QuestionContainer, QuestionText } from "./Question/styles";

import QuestionGroup from "./QuestionGroup";
import CustomQuestions from "../CustomQuestions";
import ShiftTimes from "../ShiftTimes";

import { PositionQuestionContext } from "../PositionContext";
const standardAppQuestions = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  29,
  31,
  37,
  40
];

export default function PositionQuestions(props) {
  const [standardApp, setStandardApp] = useState(false);

  const positionContext = useContext(PositionQuestionContext);

  const navigateNext = () => {
    props.action().then(() => {
      props.history.push(props.nextScreen);
    });
  };

  const navigateCancel = () => {
    props.history.push(props.cancelUpdate);
  };

  const standardAppClickHandler = () => {
    if (standardApp) {
      setStandardApp(false);
      positionContext.setActiveQuestions([1, 2, 3, 4, 5, 6, 7, 8]);
    } else {
      setStandardApp(true);
      positionContext.setActiveQuestions(standardAppQuestions);
      positionContext.refsQuestions.references.questions[0].toggle();
    }
  };
  return (
    <PositionQuestionsContainer>
      <PositionName>POSITION: {positionContext.positionName}</PositionName>
      <InstructionSpan>{props.instructionText}</InstructionSpan>
      <InstructionSpan>
        Simply click on the plus icon for each group to see the list of
        available questions, then click on the checkbox next to the questions
        you would like to add to your custom application.
      </InstructionSpan>
      <ItalicsSpan>Follow up questions in italics</ItalicsSpan>
      <StandardAppContainer>
        <QuestionContainer>
          <Checkbox
            checked={standardApp}
            onChange={standardAppClickHandler}
            style={{ marginRight: "10px" }}
          />
          <QuestionText>Use the JobApplix standard application</QuestionText>
        </QuestionContainer>
      </StandardAppContainer>
      {Object.values(positionContext.standardQuestions).map(group => {
        return (
          <QuestionGroup
            title={group.title}
            key={group.title}
            questions={group.questions}
          />
        );
      })}
      <QuestionGroup title={"Availability"} render={() => <ShiftTimes />} />
      {Object.values(positionContext.refsQuestions).map(group => {
        return (
          <QuestionGroup
            title={group.title}
            key={group.title}
            questions={group.questions}
          />
        );
      })}
      <QuestionGroup
        title={"Custom Questions"}
        render={() => <CustomQuestions />}
      />
      {props.cancel && (
        <PositionCancelButton onClick={navigateCancel}>
          &#10005; Cancel Update
        </PositionCancelButton>
      )}
      <PositionNextButton onClick={navigateNext}>
        Save & Finish &#10003;
      </PositionNextButton>
    </PositionQuestionsContainer>
  );
}
