import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { format, addDays } from "date-fns";

import { injectStripe } from "react-stripe-elements";

import { isValidEmail } from "../../../../helpers/validationFunctions";

import {
  SubType,
  FormContainer,
  FinePrintContainer,
  FinePrint,
  FinePrintSeparator,
  Total,
  SubTotal
} from "./styles";

import { ButtonContainer, NextButton } from "../../../../styles/forms2";

import SubscriptionModal from "../../../Dashboard/SubscriptionDetails/SubscriptionModal";

import Form from "./Form";

import { processPaymentDetails } from "../../../../actions/businessActions";

const PaymentForm = props => {
  const [processing, setProcessing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardComplete, setCardComplete] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (email.length > 0) {
      isValidEmail(email, setEmailValid);
    }
  }, [email]);

  useEffect(() => {
    if (name.length > 1 && emailValid && cardComplete) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name, emailValid, cardComplete]);

  const submitPayment = async e => {
    let { token } = await props.stripe.createToken({ name, email });
    setProcessing(true);
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
        <Form
          name={name}
          email={email}
          setName={setName}
          setEmail={setEmail}
          emailValid={emailValid}
          setCardComplete={setCardComplete}
        />
        <FinePrintContainer>
          <FinePrint>terms</FinePrint>
          <FinePrintSeparator>|</FinePrintSeparator>
          <FinePrint>privacy</FinePrint>
        </FinePrintContainer>
        <Total>total charge today: $0</Total>
        <SubTotal>
          {props.subType === "yearly" ? "$349.99" : "$34.99"} will be charged on
          {` ${format(addDays(new Date(), 30), "MM/DD/YYYY")}`}
        </SubTotal>
        <ButtonContainer>
          <NextButton onClick={submitPayment} disabled={buttonDisabled}>
            SUBMIT &rarr;
          </NextButton>
        </ButtonContainer>
      </FormContainer>
      {processing && (
        <SubscriptionModal
          title="PROCESSING"
          message="Your card is being processed, this may take a minute."
        />
      )}
    </>
  );
};

export default connect(
  null,
  { processPaymentDetails }
)(injectStripe(PaymentForm));
