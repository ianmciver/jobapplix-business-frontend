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
  CancelButton,
  InfoBody
} from "./styles";

import ModalContainer from "../../../ModalContainer";
import ModalCard from "../../../ModalContainer/ModalCard";
import {
  ModalCardHeader,
  ModalCardBody,
  ModalCardFooter
} from "../../../ModalContainer/ModalCard/styles";

import { dashboard, businessProfile } from "../../../../constants/routes";

function UpdateCard(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardComplete, setCardComplete] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(false);

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

  const updateCardHandler = async () => {
    if (email.lenth === 0) {
      setEmailValid(false);
      return;
    }
    let { token } = await props.stripe.createToken({ name, email });
    setProcessing(true);
    setModalOpen(true);
    props.updatePaymentMethod(
      token.id,
      () => {
        setProcessing(false);
      },
      () => {
        setProcessing(false);
        setModalOpen(false);
        setError(true);
      }
    );
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
        error={error}
        emailError={emailValid}
      />
      <ButtonContainer>
        <CancelButton onClick={e => props.history.goBack()}>
          Cancel
        </CancelButton>
        <UpdateButton onClick={updateCardHandler} disabled={buttonDisabled}>
          UPDATE CARD
        </UpdateButton>
      </ButtonContainer>
      <ModalContainer
        open={modalOpen && processing}
        onClick={() => {
          return;
        }}
      >
        <ModalCard
          open={modalOpen && processing}
          onClick={e => e.stopPropagation()}
        >
          <ModalCardHeader>Processing Payment</ModalCardHeader>
          <ModalCardBody>
            <InfoBody>
              Your payment is being processed, this may take a moment. Please do
              not navigate off this page until the payment is complete.
            </InfoBody>
          </ModalCardBody>
        </ModalCard>
      </ModalContainer>

      <ModalContainer open={modalOpen && !processing} onClick={leave}>
        <ModalCard
          open={modalOpen && !processing}
          onClick={e => e.stopPropagation()}
        >
          <ModalCardHeader>Payment Successfully Received</ModalCardHeader>
          <ModalCardBody>
            <InfoBody>
              Your payment method has been successfully updated. You will not be
              charged until your next billing period end.
            </InfoBody>
          </ModalCardBody>
          <ModalCardFooter>
            <UpdateButton onClick={leave}>
              Return to Business Profile &rarr;
            </UpdateButton>
          </ModalCardFooter>
        </ModalCard>
      </ModalContainer>
    </ProfileContainer>
  );
}

export default connect(
  state => ({ business: state.business }),
  { updatePaymentMethod }
)(injectStripe(UpdateCard));
