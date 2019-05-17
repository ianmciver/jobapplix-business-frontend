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

import { Error } from "../../SignUpContainer/styles";

import Form from "./Form";
import { NextButton } from "../../SignUpContainer/styles";

import { processPaymentDetails } from "../../../../actions/businessActions";

const PaymentForm = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardComplete, setCardComplete] = useState("");
  const [cvcComplete, setCvcComplete] = useState("");
  const [zipComplete, setZipComplete] = useState("");
  const [expComplete, setExpComplete] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (email.length > 0) {
      isValidEmail(email, setEmailValid);
    }
  }, [email]);

  useEffect(() => {
    if (
      name.length > 1 &&
      emailValid &&
      cardComplete &&
      cvcComplete &&
      zipComplete &&
      expComplete
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name, emailValid, cardComplete, cvcComplete, zipComplete, expComplete]);

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
        <Form
          name={name}
          email={email}
          setName={setName}
          setEmail={setEmail}
          emailValid={emailValid}
          setCardComplete={setCardComplete}
          setCvcComplete={setCvcComplete}
          setZipComplete={setZipComplete}
          setExpComplete={setExpComplete}
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
        {!emailValid && <Error>Please Enter a Valid Email</Error>}
        <NextButton onClick={submitPayment} disabled={buttonDisabled}>
          SUBMIT
        </NextButton>
      </FormContainer>
    </>
  );
};

export default connect(
  null,
  { processPaymentDetails }
)(injectStripe(PaymentForm));
