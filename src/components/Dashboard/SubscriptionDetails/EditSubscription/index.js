import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  cancelSubscription,
  updateSubscription
} from "../../../../actions/businessActions";

import { dashboard } from "../../../../constants/routes";

import { ProfileContainer, ProfileTitle, CancelButton } from "./styles";
import PaymentOptions from "../../../SignUp/BusinessPayment/PaymentOptions";
import PaymentModal from "../../../SignUp/BusinessPayment/PaymentModal";
import SubscriptionModal from "../SubscriptionModal";

function EditSubscription(props) {
  const [subType, setSubType] = useState(props.business.sub_type);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
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
      <ProfileTitle>UPDATE SUBSCRIPTION DETAILS</ProfileTitle>
      <PaymentOptions
        subType={subType}
        openModal={setInfoModalOpen}
        selectSub={setSubType}
        nextButtonText={nextButtonText}
        selectPayment={() =>
          nextButtonHandler(subType, () => setSuccessModalOpen(true))
        }
      />
      <CancelButton onClick={() => setCancelModalOpen(true)}>
        CANCEL SUBSCRIPTION
      </CancelButton>
      {infoModalOpen && (
        <PaymentModal closeModal={() => setInfoModalOpen(false)} noTrial />
      )}
      {successModalOpen && (
        <SubscriptionModal
          title="SUBSCRIPTION CHANGED"
          message="Your subscription has been updated. You will be prorated for the duration of your current subscription. That will be reflected on your next billing cycle."
          confirmText="OK."
          closeModal={() => setSuccessModalOpen(false)}
          confirmHandler={props.goBack}
        />
      )}
      {cancelModalOpen && (
        <SubscriptionModal
          title="CONFIRM CANCELATION"
          message="Are you sure you want to cancel? By doing so you will be removing your potential applicants access to your application. We will leave your custom URL for 30 days, after that it may be claimed by another organization. You will always have the same access to your current applications."
          confirmText="No, don't cancel."
          cancelText="Yes, I would like to end my subscription"
          closeModal={() => setCancelModalOpen(false)}
          confirmHandler={() => setCancelModalOpen(false)}
          cancelHandler={() => {
            props.cancelSubscription(() => {
              props.history.replace(`${dashboard}`);
            });
          }}
        />
      )}
    </ProfileContainer>
  );
}

export default connect(
  state => ({ business: state.business }),
  { cancelSubscription, updateSubscription }
)(withRouter(EditSubscription));
