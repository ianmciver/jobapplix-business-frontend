import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { format, addDays } from "date-fns";

import { injectStripe } from "react-stripe-elements";

import { isValidEmail } from "../../../../helpers/validationFunctions";

import { API_URL } from "../../../../constants/urls";

import {
  SubType,
  FormContainer,
  FinePrintContainer,
  FinePrint,
  FinePrintSeparator,
  Total,
  SubTotal,
  InfoBody
} from "./styles";

import {
  ButtonContainer,
  NextButton,
  FormGroup,
  Label,
  TextInput,
  Error
} from "../../../../styles/forms2";

import ModalContainer from "../../../ModalContainer";
import ModalCard from "../../../ModalContainer/ModalCard";
import {
  ModalCardHeader,
  ModalCardBody
} from "../../../ModalContainer/ModalCard/styles";

import Form from "./Form";

import { processPaymentDetails } from "../../../../actions/businessActions";

const PaymentForm = props => {
  const [processing, setProcessing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardComplete, setCardComplete] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [coupon, setCoupon] = useState("");
  const [couponMessage, setCouponMessage] = useState("");
  const [couponChecked, setCouponChecked] = useState(false);

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
    props.processPaymentDetails(
      token.id,
      props.subType,
      coupon,
      props.nextScreen
    );
  };

  const checkCoupon = () => {
    axios
      .get(`${API_URL}/businesses/checkcoupon?coupon=${coupon}`)
      .then(res => {
        if (res.data.err) {
          setCouponMessage(res.data.err);
        } else {
          setCouponMessage("");
        }
        setCouponChecked(true);
      });
  };

  return (
    <>
      <SubType onClick={() => props.setScreen("options")}>
        {props.subType}
      </SubType>
      <FormContainer>
        <p className="sub-details">
          JobApplix {props.subType} Subscription |{" "}
          {props.subType === "yearly" ? "$399.99" : "$39.99"}
        </p>
        <Form
          name={name}
          email={email}
          setName={setName}
          setEmail={setEmail}
          emailValid={emailValid}
          setEmailValid={setEmailValid}
          setCardComplete={setCardComplete}
        />
        <FinePrintContainer>
          <FinePrint>terms</FinePrint>
          <FinePrintSeparator>|</FinePrintSeparator>
          <FinePrint>privacy</FinePrint>
        </FinePrintContainer>
        <FormGroup>
          <Label htmlFor="coupon">Coupon Code (optional):</Label>
          <TextInput
            value={coupon}
            onChange={e => setCoupon(e.target.value)}
            name="coupon"
            onBlur={checkCoupon}
            error={couponMessage}
          />
          {couponMessage && <Error>{couponMessage}</Error>}
        </FormGroup>
        {(!coupon || couponMessage || !couponChecked) && (
          <Total>
            total charge today:{" "}
            {props.subType === "yearly" ? "$399.99" : "$39.99"}
          </Total>
        )}
        {coupon && !couponMessage && couponChecked && (
          <Total>total charge today: $0</Total>
        )}
        {coupon && !couponMessage && couponChecked && (
          <SubTotal>
            {props.subType === "yearly" ? "$399.99" : "$39.99"} will be charged
            {` on ${format(addDays(new Date(), 30), "MM/DD/YYYY")}`}
          </SubTotal>
        )}
        <ButtonContainer>
          <NextButton onClick={submitPayment} disabled={buttonDisabled}>
            SUBMIT &rarr;
          </NextButton>
        </ButtonContainer>
      </FormContainer>

      <ModalContainer open={processing}>
        <ModalCard open={processing} onClick={e => e.preventDefault()}>
          <ModalCardHeader>Processing Payment</ModalCardHeader>
          <ModalCardBody>
            <InfoBody>
              Your card is being processed, this may take a minute. Please do
              not navigate away from this screen until it has completed.
            </InfoBody>
          </ModalCardBody>
        </ModalCard>
      </ModalContainer>
    </>
  );
};

export default connect(
  null,
  { processPaymentDetails }
)(injectStripe(PaymentForm));
