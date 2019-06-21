import React from "react";

import {
  ModalContainer,
  Modal
} from "../../../SignUp/BusinessPayment/PaymentModal/styles";

import {
  Header,
  Message,
  ConfirmButton,
  CancelButton,
  ButtonContainer
} from "./styles";

export default function SubscriptionModal(props) {
  return (
    <ModalContainer onClick={() => props.closeModal()}>
      <Modal onClick={e => e.stopPropagation()}>
        {props.title && <Header>{props.title}</Header>}
        {props.message && <Message>{props.message}</Message>}
        <ButtonContainer>
          {props.confirmText && (
            <ConfirmButton onClick={e => props.confirmHandler()}>
              {props.confirmText}
            </ConfirmButton>
          )}
          {props.cancelText && (
            <CancelButton onClick={e => props.cancelHandler()}>
              {props.cancelText}
            </CancelButton>
          )}
        </ButtonContainer>
      </Modal>
    </ModalContainer>
  );
}
