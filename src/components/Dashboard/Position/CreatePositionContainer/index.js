import React, { useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import { CreatePosHeader } from "./styles";

import PositionDetails from "../PositionDetails";
import PositionQuestions from "../PositionQuestions";
import PositionComplete from "../PositionComplete";
import { PositionQuestionContext } from "../PositionContext";

import { questionGroups } from "../PositionQuestions/data";
import { API_URL } from "../../../../constants/urls";
import {
  dashboard,
  createPosition,
  questions,
  complete
} from "../../../../constants/routes";

const createPositionTextDescription =
  "The next few steps will guide you through creating an open position and allow you to create a custom application for that position. In this step, tell us (and your applicats) about you position";
const createPositionTextQuestions =
  "Use this form to create a custom application for this position. If you do not see a specific question you would like to ask, you have the ability to create and add custom questions in the last section.";
export default function CreatePositionContainer(props) {
  const positionContext = useContext(PositionQuestionContext);
  const getStandardQuestions = async () => {
    try {
      const questions = await axios.get(
        `${API_URL}/businesses/standardquestions`
      );
      questions.data.questions.forEach(question => {
        questionGroups[question.group].questions.push(question);
      });
      positionContext.setStandardQuestions(questionGroups);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStandardQuestions();
    positionContext.resetPosition();
  }, []);

  return (
    <div>
      {props.location.pathname !==
        `${dashboard}${createPosition}${complete}` && (
        <CreatePosHeader>Create A Position</CreatePosHeader>
      )}
      <Route
        path={`${dashboard}${createPosition}`}
        exact
        render={props => (
          <PositionDetails
            {...props}
            nextScreen={`${dashboard}${createPosition}${questions}`}
            instructionText={createPositionTextDescription}
          />
        )}
      />
      <Route
        path={`${dashboard}${createPosition}${questions}`}
        render={props => (
          <PositionQuestions
            {...props}
            nextScreen={`${dashboard}${createPosition}${complete}`}
            instructionText={createPositionTextQuestions}
            action={positionContext.createPosition}
          />
        )}
      />
      <Route
        path={`${dashboard}${createPosition}${complete}`}
        render={props => <PositionComplete {...props} />}
      />
    </div>
  );
}
