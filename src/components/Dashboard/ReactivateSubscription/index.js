import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { injectStripe } from "react-stripe-elements";

import { processReactivatePayment } from "../../../actions/businessActions";

import Form from "../../SignUp/BusinessPayment/PaymentForm/Form";
import SubscriptionModal from "../SubscriptionDetails/SubscriptionModal";

import { dashboard, businessProfile } from "../../../constants/routes";

import {
  ProfileContainer,
  ProfileDescription,
  ProfileTitle,
  ButtonContainer,
  EditButton,
  UpdateButton
} from "./styles";

function ReactivateSubscription(props) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [subType, setSubType] = useState(undefined);
  const [modalOpen, setModalOpen] = useState(false);

  //Form state:
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardComplete, setCardComplete] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);

  const updateCardHandler = async () => {
    let { token } = await props.stripe.createToken({ name, email });
    setProcessing(true);
    setModalOpen(true);
    props.processReactivatePayment(token.id, subType, () => {
      setProcessing(false);
      props.history.replace(`${dashboard}${businessProfile}`);
    });
  };

  const leave = () => {
    props.history.push(`${dashboard}${businessProfile}`);
  };

  useEffect(() => {
    if (name.length > 1 && emailValid && cardComplete) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name, emailValid, cardComplete]);

  return (
    <ProfileContainer>
      <ProfileTitle>Reactivate Subscription</ProfileTitle>
      {!detailsOpen ? (
        <>
          <ProfileDescription>
            😕 It looks like your business account is inactive. In order to use
            the full set of features, please reactivate your account by
            following the steps below. Otherwise, you may still access all of
            your previous applications.
          </ProfileDescription>
          <ButtonContainer>
            <EditButton onClick={e => setDetailsOpen(true)}>
              <span>🎉 REACTIVATE MY ACCOUNT!</span>
            </EditButton>
          </ButtonContainer>
        </>
      ) : (
        <>
          <ProfileDescription>
            Please select a subscription type:
          </ProfileDescription>
          <ButtonContainer>
            <EditButton
              onClick={() => setSubType("monthly")}
              selected={subType === "monthly"}
            >
              <span>Monthly - $39.99/mo</span>
            </EditButton>
            <EditButton
              onClick={() => setSubType("yearly")}
              selected={subType === "yearly"}
            >
              <span>Yearly - $399.99/yr</span>
            </EditButton>
          </ButtonContainer>
          {subType ? (
            <>
              <Form
                name={name}
                email={email}
                setName={setName}
                setEmail={setEmail}
                emailValid={emailValid}
                setEmailValid={setEmailValid}
                setCardComplete={setCardComplete}
              />
              <ButtonContainer>
                <UpdateButton
                  onClick={updateCardHandler}
                  disabled={buttonDisabled}
                >
                  UPDATE CARD
                </UpdateButton>
              </ButtonContainer>
            </>
          ) : null}
        </>
      )}
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
  null,
  { processReactivatePayment }
)(injectStripe(ReactivateSubscription));
