import React, { useState } from "react";
import { connect } from "react-redux";

import {
  CardCVCElement,
  CardNumberElement,
  CardExpiryElement,
  PostalCodeElement,
  injectStripe
} from "react-stripe-elements";

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

import {
  TextInput,
  StripeInput,
  StripeInputDiv
} from "../../../../styles/forms";
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
        <label>Name</label>
        <TextInput
          placeholder="NAME ON CARD"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <StripeInputDiv>
          <label>
            Card Number
            <CardNumberElement style={StripeInput} />
          </label>
        </StripeInputDiv>
        <HalfInputContainer>
          <HalfWidthInput>
            <label>Expiration</label>
            <CardExpiryElement style={StripeInput} />
          </HalfWidthInput>
          <HalfWidthInput>
            <label>CVC</label>
            <CardCVCElement style={StripeInput} />
          </HalfWidthInput>
        </HalfInputContainer>
        <StripeInputDiv>
          <label>Billing Zip</label>
          <PostalCodeElement style={StripeInput} />
        </StripeInputDiv>
        <label>Email</label>
        <TextInput
          placeholder="jane@doe.com"
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
        <NextButton onClick={submitPayment}>SUBMIT</NextButton>
      </FormContainer>
    </>
  );
};

export default connect(
  null,
  { processPaymentDetails }
)(injectStripe(PaymentForm));
