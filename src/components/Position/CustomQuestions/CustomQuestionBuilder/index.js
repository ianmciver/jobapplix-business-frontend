import React, { useState, useContext } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { API_URL } from "../../../../constants/urls";
import FirebaseContext from "../../../../Firebase/context";
import { PositionQuestionContext } from "../../PositionContext";

import {
  CustomQuestionBuilderContainer,
  BuilderTitle,
  BuilderInstructions,
  BuilderSection,
  BuilderSectionInstructions,
  BuilderTextInput,
  BuilderTextArea,
  AddChoiceButton,
  OptionContainer,
  OptionCancelContainer,
  ButtonsGroup,
  AddButton,
  CancelButton
} from "./styles";

import {
  QuestionCheckBox,
  QuestionContainer,
  QuestionText
} from "../../PositionQuestions/Question/styles";

import CheckBoxCheck from "../../../../assets/checkboxCheck";

function CustomQuestionBuilder(props) {
  const [name, setName] = useState(""); //name of the question
  const [question, setQuestion] = useState(""); // The question itself
  const [subQuestion, setSubQuestion] = useState(""); // The second part, followup, or the sub question
  const [isRequired, setIsRequired] = useState(false); // is the question required
  const [type, setType] = useState(""); // type of question, true or fale (bool), text (text), multi (multi)
  const [subType, setSubType] = useState(""); // type of the subquestion
  const [options, setOptions] = useState([""]);

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
      name,
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
        props.toggleModal();
        return;
      } else {
        props.history.push("/signin");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CustomQuestionBuilderContainer>
      <BuilderTitle>Custom Question Builder</BuilderTitle>
      <BuilderInstructions>Instructions Here</BuilderInstructions>
      <BuilderSection>
        <BuilderTextInput
          onChange={e => setName(e.target.value)}
          value={name}
          placeholder="Question Name"
          height={"30px"}
        />
        <BuilderSectionInstructions>
          Name you question. This will only be used internally.*
        </BuilderSectionInstructions>
      </BuilderSection>
      <BuilderSection>
        <BuilderTextArea
          onChange={e => setQuestion(e.target.value)}
          value={question}
          placeholder="Question Text"
          height={"50px"}
        />
        <BuilderSectionInstructions>
          Write a question you would like to ask your applicant.*
        </BuilderSectionInstructions>
      </BuilderSection>
      <BuilderSection>
        <BuilderSectionInstructions>
          What type of question is this?*
        </BuilderSectionInstructions>
        <QuestionContainer>
          <QuestionCheckBox onClick={e => setType("bool")}>
            {type === "bool" ? <CheckBoxCheck /> : null}
          </QuestionCheckBox>
          <QuestionText>Yes or No</QuestionText>
        </QuestionContainer>
        <QuestionContainer>
          <QuestionCheckBox onClick={e => setType("text")}>
            {type === "text" ? <CheckBoxCheck /> : null}
          </QuestionCheckBox>
          <QuestionText>Open Text</QuestionText>
        </QuestionContainer>
        <QuestionContainer>
          <QuestionCheckBox onClick={e => setType("multi")}>
            {type === "multi" ? <CheckBoxCheck /> : null}
          </QuestionCheckBox>
          <QuestionText>Multiple Choice</QuestionText>
        </QuestionContainer>
        {type === "multi" ? (
          <>
            <BuilderSectionInstructions>
              Please provide the choices.
            </BuilderSectionInstructions>
            {options.map((option, index) => (
              <OptionContainer key={index}>
                <BuilderTextInput
                  onChange={e => setOption(e.target.value, index)}
                  value={option}
                  placeholder="Multiple Choice Option"
                />
                <OptionCancelContainer onClick={() => deleteOption(index)}>
                  <CheckBoxCheck />
                </OptionCancelContainer>
              </OptionContainer>
            ))}
            <AddChoiceButton onClick={addOption}>
              Add Another Choice
            </AddChoiceButton>
          </>
        ) : null}
      </BuilderSection>
      <BuilderSection>
        <BuilderTextInput
          onChange={e => setSubQuestion(e.target.value)}
          value={subQuestion}
          placeholder="Sub-Question Text"
        />
        <BuilderSectionInstructions>
          A follow-up / second part / sub-question to your original question. If
          needed.
        </BuilderSectionInstructions>
      </BuilderSection>
      {subQuestion !== "" ? (
        <BuilderSection>
          <BuilderSectionInstructions>
            What type of question is the subquestion?
          </BuilderSectionInstructions>
          <QuestionContainer>
            <QuestionCheckBox onClick={e => setSubType("bool")}>
              {subType === "bool" ? <CheckBoxCheck /> : null}
            </QuestionCheckBox>
            <QuestionText>Yes or No</QuestionText>
          </QuestionContainer>
          <QuestionContainer>
            <QuestionCheckBox onClick={e => setSubType("text")}>
              {subType === "text" ? <CheckBoxCheck /> : null}
            </QuestionCheckBox>
            <QuestionText>Open Text</QuestionText>
          </QuestionContainer>
        </BuilderSection>
      ) : null}
      <BuilderSection>
        <BuilderSectionInstructions>
          Is this question required for your application?
        </BuilderSectionInstructions>
        <QuestionContainer>
          <QuestionCheckBox onClick={e => setIsRequired(!isRequired)}>
            {isRequired ? <CheckBoxCheck /> : null}
          </QuestionCheckBox>
          <QuestionText>This question is required</QuestionText>
        </QuestionContainer>
      </BuilderSection>
      <ButtonsGroup>
        <AddButton onClick={createCustomQuestion}>Create Question</AddButton>
        <CancelButton onClick={props.toggleModal}>Cancel</CancelButton>
      </ButtonsGroup>
    </CustomQuestionBuilderContainer>
  );
}

export default connect(state => ({ business: state.business }))(
  CustomQuestionBuilder
);
