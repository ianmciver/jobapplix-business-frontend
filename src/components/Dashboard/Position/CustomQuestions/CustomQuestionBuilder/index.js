import React, { useState, useContext } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { API_URL } from "../../../../../constants/urls";
import { signin } from "../../../../../constants/routes";
import { FirebaseContext } from "../../../../../Firebase";
import { PositionQuestionContext } from "../../PositionContext";

import { Checkbox, TextInput, TextArea } from "../../../../../styles/forms2";

import {
  CustomQuestionBuilderContainer,
  BuilderSectionTitle,
  BuilderSection,
  BuilderSectionInstructions,
  AddChoiceButton,
  OptionContainer,
  OptionCancelContainer,
  ButtonsGroup,
  AddButton,
  CancelButton
} from "./styles";

import {
  QuestionContainer,
  QuestionText
} from "../../PositionQuestions/Question/styles";

import CheckBoxCheck from "../../../../../assets/checkboxCheck";

function CustomQuestionBuilder(props) {
  const [question, setQuestion] = useState(""); // The question itself
  const [subQuestion, setSubQuestion] = useState(""); // The second part, followup, or the sub question
  const [isRequired, setIsRequired] = useState(false); // is the question required
  const [type, setType] = useState(""); // type of question, true or fale (bool), text (text), multi (multi)
  const [subType, setSubType] = useState(""); // type of the subquestion
  const [options, setOptions] = useState(["", "", ""]);

  const firebase = useContext(FirebaseContext);
  const positionContext = useContext(PositionQuestionContext);

  const setOption = (value, ind) => {
    let newOptions = [...options];
    newOptions[ind] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    let newOptions = [...options];
    newOptions.push("");
    setOptions(newOptions);
  };

  const deleteOption = ind => {
    let newOptions = [...options];
    setOptions([...newOptions.slice(0, ind), ...newOptions.slice(ind + 1)]);
  };

  const createCustomQuestion = async () => {
    const newQuestion = {
      question,
      sub_question: subQuestion,
      is_required: isRequired,
      type,
      sub_type: subType,
      options
    };
    try {
      const token = await firebase.doGetCurrentUserIdToken();
      if (token) {
        const questionId = await axios.post(
          `${API_URL}/businesses/customquestions?bid=${props.business.id}`,
          { token, question: newQuestion }
        );
        positionContext.setCustomQuestions([
          ...positionContext.customQuestions,
          { ...newQuestion, id: questionId.data.id }
        ]);
        positionContext.addOrRemoveActiveQuestions(questionId.data.id);
        props.toggleModal();
        return;
      } else {
        props.history.push(signin);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CustomQuestionBuilderContainer>
      <BuilderSection>
        <BuilderSectionTitle>Question Text:</BuilderSectionTitle>
        <TextArea
          onChange={e => setQuestion(e.target.value)}
          value={question}
          placeholder="Question Text"
          height={"50px"}
        />
      </BuilderSection>
      <BuilderSection>
        <BuilderSectionTitle>
          What type of question is this?
        </BuilderSectionTitle>
        <QuestionContainer>
          <Checkbox
            checked={type === "bool"}
            style={{
              width: "24px",
              height: "24px",
              marginRight: "10px"
            }}
            onChange={e => setType("bool")}
          />
          <QuestionText>Yes/No</QuestionText>
        </QuestionContainer>
        <QuestionContainer>
          <Checkbox
            checked={type === "text"}
            style={{
              width: "24px",
              height: "24px",
              marginRight: "10px"
            }}
            onChange={e => setType("text")}
          />
          <QuestionText>
            Open Answer (Applicant can write whatever they choose)
          </QuestionText>
        </QuestionContainer>
        <QuestionContainer>
          <Checkbox
            checked={type === "multi"}
            style={{
              width: "24px",
              height: "24px",
              marginRight: "10px"
            }}
            onChange={e => setType("multi")}
          />
          <QuestionText>
            Multiple Choice (You provide qualified answers)
          </QuestionText>
        </QuestionContainer>
        {type === "multi" ? (
          <>
            <BuilderSectionInstructions>
              If Multiple Choice, please provide the choices.
            </BuilderSectionInstructions>
            {options.map((option, index) => (
              <OptionContainer key={index}>
                <TextInput
                  onChange={e => setOption(e.target.value, index)}
                  value={option}
                  placeholder="Multiple choice response"
                />
                <OptionCancelContainer onClick={() => deleteOption(index)}>
                  <CheckBoxCheck />
                </OptionCancelContainer>
              </OptionContainer>
            ))}
            <AddChoiceButton onClick={addOption}>
              <CheckBoxCheck /> <span>Add Another Choice</span>
            </AddChoiceButton>
          </>
        ) : null}
      </BuilderSection>
      <BuilderSection>
        <BuilderSectionTitle>
          If There is a Follow Up Question Please Write it Here:
        </BuilderSectionTitle>
        <TextArea
          onChange={e => setSubQuestion(e.target.value)}
          value={subQuestion}
          placeholder="Follow Up Question Text"
        />
      </BuilderSection>
      <BuilderSection>
        <BuilderSectionTitle>
          What type of question is the follow up?
        </BuilderSectionTitle>
        <QuestionContainer>
          <Checkbox
            checked={subType === "bool"}
            style={{
              width: "24px",
              height: "24px",
              marginRight: "10px"
            }}
            onChange={e => setSubType("bool")}
          />
          <QuestionText>Yes or No</QuestionText>
        </QuestionContainer>
        <QuestionContainer>
          <Checkbox
            checked={subType === "text"}
            style={{
              width: "24px",
              height: "24px",
              marginRight: "10px"
            }}
            onChange={e => setSubType("text")}
          />
          <QuestionText>Open Text</QuestionText>
        </QuestionContainer>
      </BuilderSection>
      <BuilderSection>
        <BuilderSectionTitle>
          Is this question required for your application?
        </BuilderSectionTitle>
        <QuestionContainer>
          <Checkbox
            checked={isRequired}
            style={{
              width: "24px",
              height: "24px",
              marginRight: "10px"
            }}
            onChange={e => setIsRequired(!isRequired)}
          />
          <QuestionText>This question is required</QuestionText>
        </QuestionContainer>
      </BuilderSection>
      <ButtonsGroup>
        <AddButton onClick={createCustomQuestion}>
          SAVE CUSTOM QUESTION
        </AddButton>
        <CancelButton onClick={props.toggleModal}>Cancel Question</CancelButton>
      </ButtonsGroup>
    </CustomQuestionBuilderContainer>
  );
}

export default connect(state => ({ business: state.business }))(
  CustomQuestionBuilder
);
