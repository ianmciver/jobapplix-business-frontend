import React, { useState } from "react";
import { connect } from "react-redux";

import { injectStripe } from "react-stripe-elements";

import {
  SubType,
  FormContainer,
  FinePrintContainer,
  FinePrint,
  FinePrintSeparator,
  Total,
  SubTotal
} from "./styles";

import Form from "./Form";
import { NextButton } from "../../SignUpContainer/styles";

import { processPaymentDetails } from "../../../../actions/businessActions";

const PaymentForm = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitPayment = async e => {
    let { token } = await props.stripe.createToken({ name, email });
    props.processPaymentDetails(token.id, props.subType, props.nextScreen);
  };

  return (
    <>
      <SubType onClick={() => props.setScreen("options")}>
        {props.subType}
      </SubType>
      <FormContainer>
        <p className="sub-details">
          JobApplix {props.subType} Subscription |{" "}
          {props.subType === "yearly" ? "$349.99" : "$34.99"}
        </p>
        <Form name={name} email={email} setName={setName} setEmail={setEmail} />
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
        <NextButton onClick={submitPayment}>SUBMIT</NextButton>
      </FormContainer>
    </>
  );
};

export default connect(
  null,
  { processPaymentDetails }
)(injectStripe(PaymentForm));
