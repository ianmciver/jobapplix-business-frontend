import React from "react";

import {
  OptionContainer,
  OptionButtonContainer,
  OptionButton,
  OptionDividerHor,
  OptionDividerVer,
  OptionText,
  QuestionsText
} from "./styles";

import { NextButton } from "../../SignUpContainer/styles";

export default function PaymentOptions(props) {
  const selectSubType = type => {
    return e => {
      props.selectSub(type);
    };
  };
  const disabledButton = () => {
    return props.subType === "";
  };
  return (
    <>
      <OptionContainer>
        <OptionButtonContainer>
          <OptionButton
            className={props.subType === "monthly" ? "selected" : ""}
            onClick={selectSubType("monthly")}
          >
            MONTHLY
          </OptionButton>
        </OptionButtonContainer>
        <OptionDividerHor />
        <OptionDividerVer />
        <OptionText>$34.99/month</OptionText>
      </OptionContainer>
      <OptionContainer>
        <OptionButtonContainer>
          <OptionButton
            className={props.subType === "yearly" ? "selected" : ""}
            onClick={selectSubType("yearly")}
          >
            YEARLY
          </OptionButton>
        </OptionButtonContainer>
        <OptionDividerHor />
        <OptionDividerVer />
        <OptionText>$349.99/year</OptionText>
      </OptionContainer>
      <QuestionsText onClick={props.openModal}>
        Questions about our payment plans?
      </QuestionsText>
      <NextButton disabled={disabledButton()} onClick={props.selectPayment}>
        {props.nextButtonText}
      </NextButton>
    </>
  );
}
