import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { injectStripe } from "react-stripe-elements";

import { updatePaymentMethod } from "../../../../actions/businessActions";

import { isValidEmail } from "../../../../helpers/validationFunctions";

import Form from "../../../SignUp/BusinessPayment/PaymentForm/Form";
import SubscriptionModal from "../SubscriptionModal";

import {
  ProfileContainer,
  ProfileTitle,
  Details,
  ButtonContainer,
  UpdateButton,
  CancelButton
} from "./styles";

import { Error } from "../../../SignUp/SignUpContainer/styles";

import { dashboard, businessProfile } from "../../../../constants/routes";

function UpdateCard(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardComplete, setCardComplete] = useState("");
  const [cvcComplete, setCvcComplete] = useState("");
  const [zipComplete, setZipComplete] = useState("");
  const [expComplete, setExpComplete] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [processing, setProcessing] = useState(false);

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

  const updateCardHandler = async () => {
    let { token } = await props.stripe.createToken({ name, email });
    setProcessing(true);
    setModalOpen(true);
    props.updatePaymentMethod(token.id, () => {
      setProcessing(false);
    });
  };

  const leave = () => {
    props.history.push(`${dashboard}${businessProfile}`);
  };
  return (
    <ProfileContainer>
      <ProfileTitle>UPDATE PAYMENT METHOD</ProfileTitle>
      <Details>
        Enter card info to update your current payment details. Card will not be
        charged until next payment date.
      </Details>
      <Form
        name={name}
        email={email}
        setName={setName}
        setEmail={setEmail}
        emailValid={emailValid}
        setEmailValid={setEmailValid}
        setCardComplete={setCardComplete}
        setCvcComplete={setCvcComplete}
        setZipComplete={setZipComplete}
        setExpComplete={setExpComplete}
      />
      {!emailValid && <Error>Please Enter a Valid Email</Error>}
      <ButtonContainer>
        <UpdateButton onClick={updateCardHandler} disabled={buttonDisabled}>
          UPDATE CARD
        </UpdateButton>
        <CancelButton onClick={e => props.history.goBack()}>
          Cancel
        </CancelButton>
      </ButtonContainer>
      {modalOpen ? (
        processing ? (
          <SubscriptionModal
            title="PROCESSING"
            message="Your payment is being processed, this may take a moment."
          />
        ) : (
          <SubscriptionModal
            title="PAYMENT METHOD UPDATED"
            message="Your payment method has been successfully updated. You will not be charged until your next billing period end."
            confirmText="OK."
            closeModal={leave}
            confirmHandler={leave}
          />
        )
      ) : null}
    </ProfileContainer>
  );
}

export default connect(
  state => ({ business: state.business }),
  { updatePaymentMethod }
)(injectStripe(UpdateCard));
