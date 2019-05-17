import React from "react";

import {
  ModalContainer,
  Modal,
  ModalLogo,
  CloseButton,
  PlanGroup,
  ModalSeparator
} from "./styles";
import icon from "../../../../assets/Icon100.png";
import closeIcon from "../../../../assets/closeIcon.svg";

export default function PaymentModal(props) {
  return (
    <ModalContainer onClick={props.closeModal}>
      <Modal onClick={e => e.stopPropagation()}>
        <CloseButton
          src={closeIcon}
          alt="close the modal"
          onClick={props.closeModal}
        />
        <ModalLogo src={icon} alt="Job Applix logo" />
        <PlanGroup>
          <h2>The Monthly Plan</h2>
          <p>$34.99/month</p>
          {!props.noTrial && <p>30-day free trial</p>}
          <p>No Commitment</p>
          <p>Auto-renewed each month</p>
        </PlanGroup>
        <ModalSeparator />
        <PlanGroup>
          <h2>The Yearly Plan</h2>
          <p>$349.99/year</p>
          {!props.noTrial && <p>30-day free trial</p>}
          <p>1-year uninterrupted service</p>
          <p>Save $69.89/year</p>
        </PlanGroup>
      </Modal>
    </ModalContainer>
  );
}
