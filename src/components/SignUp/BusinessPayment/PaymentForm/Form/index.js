import React from "react";

import {
  CardCVCElement,
  CardNumberElement,
  CardExpiryElement,
  PostalCodeElement
} from "react-stripe-elements";

import { HalfInputContainer, HalfWidthInput } from "../styles";

import {
  TextInput,
  StripeInput,
  StripeInputDiv
} from "../../../../../styles/forms";

export default function Form(props) {
  const onStripeElementChange = cb => e => {
    console.log(e);
    cb(e.complete);
  };

  return (
    <>
      <label>Name</label>
      <TextInput
        placeholder="Jane Doe"
        value={props.name}
        onChange={e => props.setName(e.target.value)}
      />
      <StripeInputDiv>
        <label>
          Card Number
          <CardNumberElement
            style={StripeInput}
            onChange={onStripeElementChange(props.setCardComplete)}
          />
        </label>
      </StripeInputDiv>
      <HalfInputContainer>
        <HalfWidthInput>
          <label>Expiration</label>
          <CardExpiryElement
            style={StripeInput}
            onChange={onStripeElementChange(props.setExpComplete)}
          />
        </HalfWidthInput>
        <HalfWidthInput>
          <label>CVC</label>
          <CardCVCElement
            style={StripeInput}
            onChange={onStripeElementChange(props.setCvcComplete)}
          />
        </HalfWidthInput>
      </HalfInputContainer>
      <StripeInputDiv>
        <label>Billing Zip</label>
        <PostalCodeElement
          style={StripeInput}
          placeholder="83001"
          onChange={onStripeElementChange(props.setZipComplete)}
        />
      </StripeInputDiv>
      <label>Email</label>
      <TextInput
        placeholder="jane@doe.com"
        value={props.email}
        onChange={e => props.setEmail(e.target.value)}
      />
    </>
  );
}

// Make sure someone has entered a valid email.
