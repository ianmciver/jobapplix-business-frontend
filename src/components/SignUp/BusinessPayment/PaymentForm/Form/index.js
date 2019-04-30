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
        <PostalCodeElement style={StripeInput} placeholder="83001" />
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
