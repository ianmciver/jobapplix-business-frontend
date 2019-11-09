import React, { useState } from "react";
import { CardElement } from "react-stripe-elements";
import * as yup from "yup";

import {
  TextInput,
  Form,
  FormGroup,
  Label,
  StripeInput,
  StripeInputDiv,
  Error
} from "../../../../../styles/forms2";

const emailValidation = yup.object().shape({
  email: yup
    .string()
    .email()
    .required()
});

export default function PaymentForm(props) {
  const [cardInputFocused, setCardInputFocused] = useState(false);
  const [cardError, setCardError] = useState("");

  const [emailValid, setEmailValid] = useState(true);

  const checkEmailValidationAndSetEmail = e => {
    emailValidation
      .isValid({
        email: e.target.value
      })
      .then(valid => {
        props.setEmailValid(valid);
        setEmailValid(valid);
      });

    props.setEmail(e.target.value);
  };

  const onStripeElementChange = e => {
    if (e.error && e.error.message) {
      setCardError(e.error.message);
    } else if (cardError !== "") {
      setCardError("");
    }

    if (e.complete) {
      props.setCardComplete(true);
    }
  };

  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <TextInput
          value={props.name}
          onChange={e => props.setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <TextInput
          value={props.email}
          onChange={checkEmailValidationAndSetEmail}
        />
        {!emailValid && <Error>Please Enter a Valid Email</Error>}
      </FormGroup>
      <FormGroup>
        <Label>Card Information</Label>
        <StripeInputDiv focus={cardInputFocused} error={!!cardError}>
          <CardElement
            style={StripeInput}
            onChange={onStripeElementChange}
            onFocus={() => setCardInputFocused(true)}
            onBlur={() => setCardInputFocused(false)}
          />
        </StripeInputDiv>
        {cardError && <Error>{cardError}</Error>}
        {props.error && (
          <Error>
            There was an error processing your card. Please check the details
            and try again.
          </Error>
        )}
      </FormGroup>
    </Form>
  );
}

// Make sure someone has entered a valid email.
