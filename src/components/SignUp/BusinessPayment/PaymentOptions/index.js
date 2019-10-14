import React from "react";
import CheckMark from "../../../../assets/checkmark";
import {
  OptionContainer,
  OptionButtonContainer,
  TopColor,
  TitleContainer,
  Title,
  PriceContainer,
  Price,
  DetailsContainer,
  Detail,
  DetailMarker,
  DetailText,
  RadioButtonContainer,
  RadioButtonHidden,
  RadioButton
} from "./styles";

import { ButtonContainer, NextButton } from "../../../../styles/forms2";

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
    <form onSubmit={e => e.preventDefault()} style={{ width: "100%" }}>
      <OptionContainer>
        <OptionButtonContainer
          onClick={selectSubType("monthly")}
          selected={props.subType === "monthly"}
        >
          <TopColor />
          <TitleContainer>
            <Title>MONTHLY</Title>
          </TitleContainer>
          <PriceContainer>
            <Price>$34.99 / mo</Price>
          </PriceContainer>
          <DetailsContainer>
            <Detail>
              <DetailText>
                <DetailMarker />
                Custom URL for your business
              </DetailText>
            </Detail>
            <Detail>
              <DetailText>
                <DetailMarker />
                Custom Application for Each Position
              </DetailText>
            </Detail>
            <Detail>
              <DetailText>
                <DetailMarker />
                Cancel Anytime
              </DetailText>
            </Detail>
            <Detail>
              <DetailText>
                <DetailMarker />
                Advanced Filtering Tools
              </DetailText>
            </Detail>
          </DetailsContainer>
          <RadioButtonContainer>
            <label htmlFor="monthly" hidden>
              Monthly
            </label>
            <RadioButtonHidden
              id="monthly"
              checked={props.subType === "monthly"}
              name="subType"
              onChange={selectSubType("monthly")}
            />
            <RadioButton selected={props.subType === "monthly"}>
              {props.subType === "monthly" && <CheckMark />}
            </RadioButton>
          </RadioButtonContainer>
        </OptionButtonContainer>
        <OptionButtonContainer
          onClick={selectSubType("yearly")}
          selected={props.subType === "yearly"}
        >
          <TopColor />
          <TitleContainer>
            <Title>YEARLY</Title>
          </TitleContainer>
          <PriceContainer>
            <Price>$349.99 / yr</Price>
          </PriceContainer>
          <DetailsContainer>
            <Detail>
              <DetailText>
                <DetailMarker />
                Locked in Pricing
              </DetailText>
            </Detail>
            <Detail>
              <DetailText>
                <DetailMarker />
                Custom URL for your business
              </DetailText>
            </Detail>
            <Detail>
              <DetailText>
                <DetailMarker />
                Custom Application for Each Position
              </DetailText>
            </Detail>
            <Detail>
              <DetailText>
                <DetailMarker />2 Months Free
              </DetailText>
            </Detail>
          </DetailsContainer>
          <RadioButtonContainer>
            <label htmlFor="yearly" hidden>
              Yearly
            </label>
            <RadioButtonHidden
              id="yearly"
              checked={props.subType === "yearly"}
              name="subType"
              onChange={selectSubType("yearly")}
            />
            <RadioButton selected={props.subType === "yearly"}>
              {props.subType === "yearly" && <CheckMark />}
            </RadioButton>
          </RadioButtonContainer>
        </OptionButtonContainer>
      </OptionContainer>
      <ButtonContainer>
        <NextButton disabled={disabledButton()} onClick={props.selectPayment}>
          {props.nextButtonText} &rarr;
        </NextButton>
      </ButtonContainer>
    </form>
  );
}
