import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { injectStripe } from "react-stripe-elements";

import { processPaymentDetails } from "../../../actions/businessActions";

import Form from "../../SignUp/BusinessPayment/PaymentForm/Form";

import ModalContainer from "../../ModalContainer";
import ModalCard from "../../ModalContainer/ModalCard";
import {
  ModalCardHeader,
  ModalCardBody,
  ModalCardFooter
} from "../../ModalContainer/ModalCard/styles";

import { dashboard, businessProfile } from "../../../constants/routes";

import {
  ProfileContainer,
  ProfileDescription,
  ProfileTitle,
  ButtonContainer,
  EditButton,
  UpdateButton,
  InfoBody
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
  const [error, setError] = useState(false);

  const updateCardHandler = async () => {
    let { token } = await props.stripe.createToken({ name, email });
    setProcessing(true);
    setModalOpen(true);
    props.processPaymentDetails(
      token.id,
      subType,
      undefined,
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
    setModalOpen(false);
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
              <span> REACTIVATE MY ACCOUNT!</span>
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
                error={error}
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

      <ModalContainer open={modalOpen && processing}>
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
          <ModalCardHeader>🎊 Payment Successfully Received 🎉</ModalCardHeader>
          <ModalCardBody>
            <InfoBody>
              Welcome back! You payment has been received and your account has
              been reactivated! You are now able to use the full set of
              JobApplix features. Please take a moment to look over your
              business details and make sure everything is up to date.
            </InfoBody>
          </ModalCardBody>
          <ModalCardFooter>
            <UpdateButton onClick={leave}>
              Review Business Details &rarr;
            </UpdateButton>
          </ModalCardFooter>
        </ModalCard>
      </ModalContainer>
    </ProfileContainer>
  );
}

export default connect(
  null,
  { processPaymentDetails }
)(injectStripe(ReactivateSubscription));
