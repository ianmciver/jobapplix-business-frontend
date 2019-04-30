import React, { useState } from "react";

import PaymentDetails from "./PaymentDetails";
import EditSubscription from "./EditSubscription";

import { dashboard, updatePayment } from "../../../constants/routes";

import { ProfileContainer, ProfileTitle, UpdateButton } from "./styles";

export default function BusinessProfile(props) {
  const [editSubscription, setEditSubscription] = useState(false);

  return (
    <ProfileContainer>
      {editSubscription ? (
        <EditSubscription goBack={() => setEditSubscription(false)} />
      ) : (
        <>
          <ProfileTitle>Subscription and payment details</ProfileTitle>{" "}
          <>
            <PaymentDetails />

            <UpdateButton onClick={e => setEditSubscription(true)}>
              UPDATE SUBSCRIPTION
            </UpdateButton>
            <UpdateButton
              onClick={() => props.history.push(`${dashboard}${updatePayment}`)}
            >
              UPDATE PAYMENT METHOD
            </UpdateButton>
          </>
        </>
      )}
    </ProfileContainer>
  );
}
