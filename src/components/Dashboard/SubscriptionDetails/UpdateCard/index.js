import React, { useState } from "react";
import { connect } from "react-redux";
import { injectStripe } from "react-stripe-elements";

import { updatePaymentMethod } from "../../../../actions/businessActions";

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

import { dashboard, businessProfile } from "../../../../constants/routes";

function UpdateCard(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const updateCardHandler = async () => {
    let { token } = await props.stripe.createToken({ name, email });
    props.updatePaymentMethod(token.id, () => {
      setSuccessModalOpen(true);
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
      <Form name={name} email={email} setName={setName} setEmail={setEmail} />
      <ButtonContainer>
        <UpdateButton onClick={updateCardHandler}>UPDATE CARD</UpdateButton>
        <CancelButton>Cancel</CancelButton>
      </ButtonContainer>
      {successModalOpen && (
        <SubscriptionModal
          title="PAYMENT METHOD UPDATED"
          message="Your payment method has been successfully updated. You will not be charged until your next billing period end."
          confirmText="OK."
          closeModal={leave}
          confirmHandler={leave}
        />
      )}
    </ProfileContainer>
  );
}

export default connect(
  state => ({ business: state.business }),
  { updatePaymentMethod }
)(injectStripe(UpdateCard));
