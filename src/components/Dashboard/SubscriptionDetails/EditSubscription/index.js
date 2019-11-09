import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  cancelSubscription,
  updateSubscription
} from "../../../../actions/businessActions";

import { dashboard } from "../../../../constants/routes";

import {
  ProfileContainer,
  ProfileTitle,
  InfoBody,
  CancelSubButton,
  GoBackButton
} from "./styles";
import PaymentOptions from "../../../SignUp/BusinessPayment/PaymentOptions";
import ModalContainer from "../../../ModalContainer";
import ModalCard from "../../../ModalContainer/ModalCard";
import {
  ModalCardHeader,
  ModalCardBody,
  ModalCardFooter
} from "../../../ModalContainer/ModalCard/styles";

function EditSubscription(props) {
  const [subType, setSubType] = useState(props.business.sub_type);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const nextButtonText =
    props.business.sub_type === subType ? "GO BACK" : "UPDATE";
  const nextButtonHandler =
    props.business.sub_type === subType
      ? props.goBack
      : props.updateSubscription;

  return (
    <ProfileContainer>
      <ProfileTitle>Update Subscription Details</ProfileTitle>
      <CancelSubButton
        onClick={() => {
          setCancelModalOpen(true);
        }}
      >
        CANCEL SUBSCRIPTION
      </CancelSubButton>
      <PaymentOptions
        subType={subType}
        selectSub={setSubType}
        nextButtonText={nextButtonText}
        selectPayment={() =>
          nextButtonHandler(subType, () => setSuccessModalOpen(true))
        }
      />

      <ModalContainer
        open={successModalOpen}
        clickHandler={() => setSuccessModalOpen(false)}
      >
        <ModalCard open={successModalOpen} onClick={e => e.stopPropagation()}>
          <ModalCardHeader>Subscription Changed</ModalCardHeader>
          <ModalCardBody>
            <InfoBody>
              Your subscription has been updated. You will be prorated for the
              duration of your current subscription. That will be reflected on
              your next billing cycle.
            </InfoBody>
          </ModalCardBody>
          <ModalCardFooter>
            <GoBackButton
              onClick={e => {
                setSuccessModalOpen(false);
                props.goBack(e);
              }}
            >
              OK
            </GoBackButton>
          </ModalCardFooter>
        </ModalCard>
      </ModalContainer>
      <ModalContainer
        open={cancelModalOpen}
        clickHandler={() => setCancelModalOpen(false)}
      >
        <ModalCard open={cancelModalOpen} onClick={e => e.stopPropagation()}>
          <ModalCardHeader>Confirm Cancellation</ModalCardHeader>
          <ModalCardBody>
            <InfoBody>
              Are you sure you want to cancel? By doing so you will be removing
              your potential applicants access to your application. We will
              leave your custom URL for 30 days, after that it may be claimed by
              another organization. You will always have the same access to your
              current applications.
            </InfoBody>
          </ModalCardBody>
          <ModalCardFooter>
            <GoBackButton onClick={() => setCancelModalOpen(false)}>
              No, don't cancel.
            </GoBackButton>
            <CancelSubButton
              onClick={() => {
                props.cancelSubscription(() => {
                  props.history.replace(`${dashboard}`);
                });
              }}
            >
              Yes, Cancel My Subscription
            </CancelSubButton>
          </ModalCardFooter>
        </ModalCard>
      </ModalContainer>
    </ProfileContainer>
  );
}

export default connect(
  state => ({ business: state.business }),
  { cancelSubscription, updateSubscription }
)(withRouter(EditSubscription));
