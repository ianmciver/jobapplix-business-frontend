import React, { useState } from "react";

import PaymentDetails from "./PaymentDetails";
// import EditPaymentDetails from "./EditPaymentDetails";

import { ProfileContainer, ProfileTitle, UpdateButton } from "./styles";

export default function BusinessProfile(props) {
  const [updateSubscription, setUpdateSubscription] = useState(false);

  return (
    <ProfileContainer>
      <ProfileTitle>Subscription and payment details</ProfileTitle>{" "}
      <>
        <PaymentDetails />

        <UpdateButton onClick={e => setUpdateSubscription(true)}>
          UPDATE DETAILS
        </UpdateButton>
      </>
    </ProfileContainer>
  );
}
