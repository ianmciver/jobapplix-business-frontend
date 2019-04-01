import React, { useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import { CreatePosHeader } from "./styles";

import PositionDetails from "../PositionDetails";
import PositionQuestions from "../PositionQuestions";
import CustomQuestionsContainer from "../CustomQuestions";
import ShiftTimes from "../ShiftTimes";
import PositionComplete from "../PositionComplete";
import { PositionQuestionContext } from "../PositionContext";

import { questionGroups } from "../PositionQuestions/data";
import { API_URL } from "../../../../constants/urls";
import {
  dashboard,
  createPosition,
  questions,
  customQuestions,
  availability,
  complete
} from "../../../../constants/routes";

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
  }, []);
  console.log(`${dashboard}${createPosition}${questions}`);
  return (
    <div>
      <CreatePosHeader>Create A Position</CreatePosHeader>
      <Route
        path={`${dashboard}${createPosition}`}
        exact
        component={PositionDetails}
      />
      <Route
        path={`${dashboard}${createPosition}${questions}`}
        component={PositionQuestions}
      />
      <Route
        path={`${dashboard}${createPosition}${customQuestions}`}
        component={CustomQuestionsContainer}
      />
      <Route
        path={`${dashboard}${createPosition}${availability}`}
        component={ShiftTimes}
      />
      <Route
        path={`${dashboard}${createPosition}${complete}`}
        component={PositionComplete}
      />
    </div>
  );
}
