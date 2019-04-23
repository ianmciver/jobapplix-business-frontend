import React, { useContext } from "react";

import CheckBoxCheck from "../../../../assets/checkboxCheck";
import Dropdown from "../../../FormComponents/Dropdown";

import {
  ShiftTimesContainer,
  Instructions,
  SecondInstructions,
  ShiftTimeBuilderHeader,
  ShiftTimeBuilderContainer,
  QuestionsContainer,
  ShiftTimeLabel,
  TimesDropdownContainer,
  TimesDropdownLabel,
  DividerLine,
  PresetContainer,
  PresetTimesContainer,
  PresetTitle,
  ThirdShiftQuestion
} from "./styles";

import {
  QuestionContainer,
  QuestionCheckBox,
  QuestionText
} from "../PositionQuestions/Question/styles";

import { PositionQuestionContext } from "../PositionContext";
import { ShiftTimesContext } from "../ShiftTimesContext";

export default function ShiftTimes(props) {
  const shiftTimesContext = useContext(ShiftTimesContext);
  const positionContext = useContext(PositionQuestionContext);

  const {
    option,
    noThirdShift,
    setNoThirdShift,
    shiftOneStart,
    shiftOneStartAmPm,
    shiftOneEnd,
    shiftOneEndAmPm,
    shiftTwoStart,
    shiftTwoStartAmPm,
    shiftTwoEnd,
    shiftTwoEndAmPm,
    shiftThreeStart,
    shiftThreeStartAmPm,
    shiftThreeEnd,
    shiftThreeEndAmPm,
    setOption,
    setShiftOneStart,
    setShiftOneStartAmPm,
    setShiftOneEnd,
    setShiftOneEndAmPm,
    setShiftTwoStart,
    setShiftTwoStartAmPm,
    setShiftTwoEnd,
    setShiftTwoEndAmPm,
    setShiftThreeStart,
    setShiftThreeStartAmPm,
    setShiftThreeEnd,
    setShiftThreeEndAmPm,
    hours,
    ampm
  } = shiftTimesContext;
  const { availability, setAvailability } = positionContext;

  const onSelectChange = shiftCb => index => {
    shiftCb(index);
  };

  return (
    <ShiftTimesContainer>
      <Instructions>
        In this section you will be able to ask your applicants for availability
        and customize your shift times.
      </Instructions>
      <DividerLine />
      <QuestionsContainer>
        <QuestionContainer>
          <QuestionCheckBox onClick={e => setAvailability(!availability)}>
            {availability && <CheckBoxCheck />}
          </QuestionCheckBox>
          <QuestionText>Ask applicants for availability?</QuestionText>
        </QuestionContainer>
      </QuestionsContainer>
      {availability && (
        <>
          <SecondInstructions>
            Would you like to use the pre-set shift times, or would you like to
            create your own?
          </SecondInstructions>
          <QuestionsContainer>
            <QuestionContainer>
              <QuestionCheckBox onClick={e => setOption("prebuilt")}>
                {option === "prebuilt" && <CheckBoxCheck />}
              </QuestionCheckBox>
              <QuestionText>Pre-Set Times</QuestionText>
            </QuestionContainer>
            <QuestionContainer>
              <QuestionCheckBox onClick={e => setOption("custom")}>
                {option === "custom" && <CheckBoxCheck />}
              </QuestionCheckBox>
              <QuestionText>Create Shift Times</QuestionText>
            </QuestionContainer>
          </QuestionsContainer>
          <PresetContainer>
            <PresetTitle>Pre-set shift times are:</PresetTitle>
            <PresetTimesContainer>
              <span>Morning: 6:00am - 2:00pm</span>
              <span>Mid-Day: 2:00pm - 10:00pm</span>
              <span>Evening: 10:00pm - 6:00am</span>
            </PresetTimesContainer>
          </PresetContainer>
        </>
      )}
      {option === "custom" && (
        <ShiftTimeBuilderContainer>
          <ShiftTimeBuilderHeader>
            Custom Shift Time Builder:
          </ShiftTimeBuilderHeader>
          <ShiftTimeLabel>SHIFT 1:</ShiftTimeLabel>
          <TimesDropdownContainer>
            <TimesDropdownLabel>Start time:</TimesDropdownLabel>
            <Dropdown
              value={hours[shiftOneStart]}
              options={hours}
              selectItem={onSelectChange(setShiftOneStart)}
              valueIndex={shiftOneStart}
            />
            <Dropdown
              value={ampm[shiftOneStartAmPm]}
              options={ampm}
              selectItem={onSelectChange(setShiftOneStartAmPm)}
              valueIndex={shiftOneStartAmPm}
            />
          </TimesDropdownContainer>
          <TimesDropdownContainer>
            <TimesDropdownLabel margin={"12px"}>End time:</TimesDropdownLabel>
            <Dropdown
              value={hours[shiftOneEnd]}
              options={hours}
              selectItem={onSelectChange(setShiftOneEnd)}
              valueIndex={shiftOneEnd}
            />
            <Dropdown
              value={ampm[shiftOneEndAmPm]}
              options={ampm}
              selectItem={onSelectChange(setShiftOneEndAmPm)}
              valueIndex={shiftOneEndAmPm}
            />
          </TimesDropdownContainer>
          <ShiftTimeLabel>SHIFT 2:</ShiftTimeLabel>
          <TimesDropdownContainer>
            <TimesDropdownLabel>Start time:</TimesDropdownLabel>
            <Dropdown
              value={hours[shiftTwoStart]}
              options={hours}
              selectItem={onSelectChange(setShiftTwoStart)}
              valueIndex={shiftTwoStart}
            />
            <Dropdown
              value={ampm[shiftTwoStartAmPm]}
              options={ampm}
              selectItem={onSelectChange(setShiftTwoStartAmPm)}
              valueIndex={shiftTwoStartAmPm}
            />
          </TimesDropdownContainer>
          <TimesDropdownContainer>
            <TimesDropdownLabel margin={"12px"}>End time:</TimesDropdownLabel>
            <Dropdown
              value={hours[shiftTwoEnd]}
              options={hours}
              selectItem={onSelectChange(setShiftTwoEnd)}
              valueIndex={shiftTwoEnd}
            />
            <Dropdown
              value={ampm[shiftTwoEndAmPm]}
              options={ampm}
              selectItem={onSelectChange(setShiftTwoEndAmPm)}
              valueIndex={shiftTwoEndAmPm}
            />
          </TimesDropdownContainer>
          <ShiftTimeLabel>Shift 3:</ShiftTimeLabel>
          <ThirdShiftQuestion>
            <QuestionContainer>
              <QuestionCheckBox onClick={e => setNoThirdShift(!noThirdShift)}>
                {noThirdShift && <CheckBoxCheck />}
              </QuestionCheckBox>
              <QuestionText>We don't need a third shift</QuestionText>
            </QuestionContainer>
          </ThirdShiftQuestion>
          {!noThirdShift && (
            <>
              <TimesDropdownContainer>
                <TimesDropdownLabel>Start time:</TimesDropdownLabel>
                <Dropdown
                  value={hours[shiftThreeStart]}
                  options={hours}
                  selectItem={onSelectChange(setShiftThreeStart)}
                  valueIndex={shiftThreeStart}
                />
                <Dropdown
                  value={ampm[shiftThreeStartAmPm]}
                  options={ampm}
                  selectItem={onSelectChange(setShiftThreeStartAmPm)}
                  valueIndex={shiftThreeStartAmPm}
                />
              </TimesDropdownContainer>
              <TimesDropdownContainer>
                <TimesDropdownLabel margin={"12px"}>
                  End time:
                </TimesDropdownLabel>
                <Dropdown
                  value={hours[shiftThreeEnd]}
                  options={hours}
                  selectItem={onSelectChange(setShiftThreeEnd)}
                  valueIndex={shiftThreeEnd}
                />
                <Dropdown
                  value={ampm[shiftThreeEndAmPm]}
                  options={ampm}
                  selectItem={onSelectChange(setShiftThreeEndAmPm)}
                  valueIndex={shiftThreeEndAmPm}
                />
              </TimesDropdownContainer>
            </>
          )}
        </ShiftTimeBuilderContainer>
      )}
    </ShiftTimesContainer>
  );
}

// Create select container
