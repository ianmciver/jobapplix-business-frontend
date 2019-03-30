import React, { useState, useContext } from "react";

import CheckBoxCheck from "../../../assets/checkboxCheck";
import Dropdown from "../../FormComponents/Dropdown";
import {
  ShiftTimesContainer,
  Instructions,
  SecondInstructions,
  ShiftTimeBuilderHeader,
  ShiftTimeBuilderContainer,
  QuestionsContainer,
  ShiftTimeLabel,
  SmallCheckBoxContainer,
  SmallCheckBox,
  SmallCheckBoxLabel,
  TimesDropdownContainer,
  TimeDropdownSeparator,
  FinishButton
} from "./styles";

import {
  QuestionContainer,
  QuestionCheckBox,
  QuestionText
} from "../PositionQuestions/Question/styles";
import { PositionQuestionContext } from "../PositionContext";

const militaryHours = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23"
];

const ampmHours = militaryHours.map((item, ind) => {
  const newNum = Number(item) % 12 || 12;
  return newNum + (ind < 12 ? " am" : " pm");
});

const minuteValues = ["00", "15", "30", "45"];

export default function ShiftTimes(props) {
  const positionContext = useContext(PositionQuestionContext);
  const [option, setOption] = useState("");
  const [thirdShift, setThirdShift] = useState(false);
  const [timeFormat, setTimeFormat] = useState("24hr");
  const [hourValues, setHourValues] = useState(militaryHours);
  const [shiftOneStart, setShiftOneStart] = useState({ hour: 0, minute: 0 });
  const [shiftOneEnd, setShiftOneEnd] = useState({ hour: 1, minute: 0 });
  const [shiftTwoStart, setShiftTwoStart] = useState({ hour: 0, minute: 0 });
  const [shiftTwoEnd, setShiftTwoEnd] = useState({ hour: 1, minute: 0 });
  const [shiftThreeStart, setShiftThreeStart] = useState({
    hour: 0,
    minute: 0
  });
  const [shiftThreeEnd, setShiftThreeEnd] = useState({ hour: 1, minute: 0 });

  const onSelectChange = (shift, shiftCb, values, duration) => value => {
    const index = values.indexOf(value);
    shiftCb({ ...shift, [duration]: index });
  };

  const onTimeFormatChange = format => e => {
    setTimeFormat(format);

    setHourValues(format === "24hr" ? militaryHours : ampmHours);
  };

  const { availability, setAvailability } = positionContext;

  return (
    <ShiftTimesContainer>
      <Instructions>
        In this (final) section you will be able to create custom shift times.
      </Instructions>
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
          <SecondInstructions>
            Pre-set times: <span>Shift 1: 6:00am - 2:00pm</span>
            <span>Shift 2: 2:00pm - 10:00pm</span>
          </SecondInstructions>
          <QuestionsContainer>
            <QuestionContainer>
              <QuestionCheckBox onClick={e => setOption("prebuilt")}>
                {option === "prebuilt" && <CheckBoxCheck />}
              </QuestionCheckBox>
              <QuestionText>Use pre-set shift times</QuestionText>
            </QuestionContainer>
            <QuestionContainer>
              <QuestionCheckBox onClick={e => setOption("custom")}>
                {option === "custom" && <CheckBoxCheck />}
              </QuestionCheckBox>
              <QuestionText>Build custom shift times</QuestionText>
            </QuestionContainer>
          </QuestionsContainer>
        </>
      )}
      {option === "custom" && (
        <ShiftTimeBuilderContainer>
          <ShiftTimeBuilderHeader>
            Custom Shift Time Builder
          </ShiftTimeBuilderHeader>
          <SecondInstructions>
            Use this form to build your custom shift times.
          </SecondInstructions>
          <SmallCheckBoxContainer first>
            <SmallCheckBox
              selected={timeFormat === "24hr"}
              onClick={onTimeFormatChange("24hr")}
            />
            <SmallCheckBoxLabel>24hr time format</SmallCheckBoxLabel>
          </SmallCheckBoxContainer>
          <SmallCheckBoxContainer>
            <SmallCheckBox
              selected={timeFormat === "12hr"}
              onClick={onTimeFormatChange("12hr")}
            />
            <SmallCheckBoxLabel>12hr time format</SmallCheckBoxLabel>
          </SmallCheckBoxContainer>
          <ShiftTimeLabel>Shift 1:</ShiftTimeLabel>
          <TimesDropdownContainer>
            <div>
              <Dropdown
                ammendedValue={hourValues[shiftOneStart.hour].split(" ")[0]}
                value={hourValues[shiftOneStart.hour]}
                options={hourValues}
                selectItem={onSelectChange(
                  shiftOneStart,
                  setShiftOneStart,
                  hourValues,
                  "hour"
                )}
                valueIndex={shiftOneStart.hour}
              />
              <TimeDropdownSeparator>:</TimeDropdownSeparator>
              <Dropdown
                value={minuteValues[shiftOneStart.minute]}
                options={minuteValues}
                selectItem={onSelectChange(
                  shiftOneStart,
                  setShiftOneStart,
                  minuteValues,
                  "minute"
                )}
                valueIndex={shiftOneStart.minute}
              />
              {timeFormat === "12hr" &&
                (shiftOneStart.hour < 12 ? (
                  <TimeDropdownSeparator>am</TimeDropdownSeparator>
                ) : (
                  <TimeDropdownSeparator>pm</TimeDropdownSeparator>
                ))}
            </div>
            <TimeDropdownSeparator>-</TimeDropdownSeparator>
            <div>
              <Dropdown
                ammendedValue={hourValues[shiftOneEnd.hour].split(" ")[0]}
                value={hourValues[shiftOneEnd.hour]}
                options={hourValues.slice(shiftOneStart.hour + 1)}
                selectItem={onSelectChange(
                  shiftOneEnd,
                  setShiftOneEnd,
                  hourValues,
                  "hour"
                )}
                valueIndex={
                  shiftOneEnd.hour -
                  (hourValues.length -
                    hourValues.slice(shiftOneStart.hour + 1).length)
                }
              />
              <TimeDropdownSeparator>:</TimeDropdownSeparator>
              <Dropdown
                value={minuteValues[shiftOneEnd.minute]}
                options={minuteValues}
                selectItem={onSelectChange(
                  shiftOneEnd,
                  setShiftOneEnd,
                  minuteValues,
                  "minute"
                )}
                valueIndex={shiftOneEnd.minute}
              />
              {timeFormat === "12hr" &&
                (shiftOneEnd.hour < 12 ? (
                  <TimeDropdownSeparator>am</TimeDropdownSeparator>
                ) : (
                  <TimeDropdownSeparator>pm</TimeDropdownSeparator>
                ))}
            </div>
          </TimesDropdownContainer>
          <ShiftTimeLabel>Shift 2:</ShiftTimeLabel>
          <TimesDropdownContainer>
            <div>
              <Dropdown
                ammendedValue={hourValues[shiftTwoStart.hour].split(" ")[0]}
                value={hourValues[shiftTwoStart.hour]}
                options={hourValues}
                selectItem={onSelectChange(
                  shiftTwoStart,
                  setShiftTwoStart,
                  hourValues,
                  "hour"
                )}
                valueIndex={shiftTwoStart.hour}
              />
              <TimeDropdownSeparator>:</TimeDropdownSeparator>
              <Dropdown
                value={minuteValues[shiftTwoStart.minute]}
                options={minuteValues}
                selectItem={onSelectChange(
                  shiftTwoStart,
                  setShiftTwoStart,
                  minuteValues,
                  "minute"
                )}
                valueIndex={shiftTwoStart.minute}
              />
              {timeFormat === "12hr" &&
                (shiftTwoStart.hour < 12 ? (
                  <TimeDropdownSeparator>am</TimeDropdownSeparator>
                ) : (
                  <TimeDropdownSeparator>pm</TimeDropdownSeparator>
                ))}
            </div>
            <TimeDropdownSeparator>-</TimeDropdownSeparator>
            <div>
              <Dropdown
                value={hourValues[shiftTwoEnd.hour]}
                ammendedValue={hourValues[shiftTwoEnd.hour].split(" ")[0]}
                options={hourValues.slice(shiftTwoStart.hour + 1)}
                selectItem={onSelectChange(
                  shiftTwoEnd,
                  setShiftTwoEnd,
                  hourValues,
                  "hour"
                )}
                valueIndex={
                  shiftTwoEnd.hour -
                  (hourValues.length -
                    hourValues.slice(shiftTwoStart.hour + 1).length)
                }
              />
              <TimeDropdownSeparator>:</TimeDropdownSeparator>
              <Dropdown
                value={minuteValues[shiftTwoEnd.minute]}
                options={minuteValues}
                selectItem={onSelectChange(
                  shiftTwoEnd,
                  setShiftTwoEnd,
                  minuteValues,
                  "minute"
                )}
                valueIndex={shiftTwoEnd.minute}
              />
              {timeFormat === "12hr" &&
                (shiftTwoEnd.hour < 12 ? (
                  <TimeDropdownSeparator>am</TimeDropdownSeparator>
                ) : (
                  <TimeDropdownSeparator>pm</TimeDropdownSeparator>
                ))}
            </div>
          </TimesDropdownContainer>
          <SmallCheckBoxContainer first>
            <SmallCheckBox
              selected={thirdShift}
              onClick={e => setThirdShift(!thirdShift)}
            />
            <SmallCheckBoxLabel>Include third shift</SmallCheckBoxLabel>
          </SmallCheckBoxContainer>
          {thirdShift && (
            <>
              <ShiftTimeLabel>Shift 3:</ShiftTimeLabel>
              <TimesDropdownContainer>
                <div>
                  <Dropdown
                    ammendedValue={
                      hourValues[shiftThreeStart.hour].split(" ")[0]
                    }
                    value={hourValues[shiftThreeStart.hour]}
                    options={hourValues}
                    selectItem={onSelectChange(
                      shiftThreeStart,
                      setShiftThreeStart,
                      hourValues,
                      "hour"
                    )}
                    valueIndex={shiftThreeStart.hour}
                  />
                  <TimeDropdownSeparator>:</TimeDropdownSeparator>
                  <Dropdown
                    value={minuteValues[shiftThreeStart.minute]}
                    options={minuteValues}
                    selectItem={onSelectChange(
                      shiftThreeStart,
                      setShiftThreeStart,
                      minuteValues,
                      "minute"
                    )}
                    valueIndex={shiftThreeStart.minute}
                  />
                  {timeFormat === "12hr" &&
                    (shiftThreeStart.hour < 12 ? (
                      <TimeDropdownSeparator>am</TimeDropdownSeparator>
                    ) : (
                      <TimeDropdownSeparator>pm</TimeDropdownSeparator>
                    ))}
                </div>
                <TimeDropdownSeparator>-</TimeDropdownSeparator>
                <div>
                  <Dropdown
                    ammendedValue={hourValues[shiftThreeEnd.hour].split(" ")[0]}
                    value={hourValues[shiftThreeEnd.hour]}
                    options={hourValues}
                    selectItem={onSelectChange(
                      shiftThreeEnd,
                      setShiftThreeEnd,
                      hourValues,
                      "hour"
                    )}
                    valueIndex={shiftThreeEnd.hour}
                  />
                  <TimeDropdownSeparator>:</TimeDropdownSeparator>
                  <Dropdown
                    value={minuteValues[shiftThreeEnd.minute]}
                    options={minuteValues}
                    selectItem={onSelectChange(
                      shiftThreeEnd,
                      setShiftThreeEnd,
                      minuteValues,
                      "minute"
                    )}
                    valueIndex={shiftThreeEnd.minute}
                  />
                  {timeFormat === "12hr" &&
                    (shiftThreeEnd.hour < 12 ? (
                      <TimeDropdownSeparator>am</TimeDropdownSeparator>
                    ) : (
                      <TimeDropdownSeparator>pm</TimeDropdownSeparator>
                    ))}
                </div>
              </TimesDropdownContainer>
            </>
          )}
        </ShiftTimeBuilderContainer>
      )}
      <FinishButton onClick={e => props.history.push("/dashboard")}>
        Complete and Save Position
      </FinishButton>
    </ShiftTimesContainer>
  );
}

// Create select container
