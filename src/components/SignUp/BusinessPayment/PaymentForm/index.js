import React, { useState } from "react";

import {
  SubType,
  FormContainer,
  HalfInputContainer,
  HalfWidthInput,
  FinePrintContainer,
  FinePrint,
  FinePrintSeparator,
  Total,
  SubTotal
} from "./styles";

import { TextInput } from "../../../../styles/forms";
import { NextButton } from "../../SignUpContainer/styles";

export default function PaymentForm(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <SubType>{props.subType}</SubType>
      <FormContainer>
        <p className="sub-details">
          JobApplix {props.subType} Subscription |{" "}
          {props.subType === "yearly" ? "$349.99" : "$34.99"}
        </p>
        <TextInput
          placeholder="NAME ON CARD"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextInput
          placeholder="CARD NUMBER"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
        <HalfInputContainer>
          <HalfWidthInput
            placeholder="MM/YYYY"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
          <HalfWidthInput
            placeholder="CVC"
            value={cvc}
            onChange={e => setCvc(e.target.value)}
          />
        </HalfInputContainer>
        <TextInput
          placeholder="VERIFY EMAIL"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <FinePrintContainer>
          <FinePrint>terms</FinePrint>
          <FinePrintSeparator>|</FinePrintSeparator>
          <FinePrint>privacy</FinePrint>
        </FinePrintContainer>
        <Total>total charge today: $0</Total>
        <SubTotal>
          {props.subType === "yearly" ? "$349.99" : "$34.99"} will be charged in
          30 days.
        </SubTotal>
        <NextButton onClick={props.nextScreen}>SUBMIT</NextButton>
      </FormContainer>
    </>
  );
}
