import React, { useState } from "react";

import { CardElement } from "react-stripe-elements";

import {
  TextInput,
  Form,
  FormGroup,
  Label,
  StripeInput,
  StripeInputDiv,
  Error
} from "../../../../../styles/forms2";

export default function PaymentForm(props) {
  const [cardInputFocused, setCardInputFocused] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [cardError, setCardError] = useState("");
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
          onChange={e => props.setEmail(e.target.value)}
        />
        {!props.emailValid && <Error>Please Enter a Valid Email</Error>}
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
      </FormGroup>
    </Form>
  );
}

// Make sure someone has entered a valid email.
