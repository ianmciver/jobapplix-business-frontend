import React, { useState } from "react";

import PaymentDetails from "./PaymentDetails";
import EditSubscription from "./EditSubscription";
import CheckBoxCheck from "../../../assets/checkboxCheck";

import { dashboard, updatePayment } from "../../../constants/routes";

import {
  ProfileContainer,
  ProfileTitle,
  ProfileDescription,
  ButtonContainer,
  EditButton
} from "./styles";

export default function BusinessProfile(props) {
  const [editSubscription, setEditSubscription] = useState(false);

  return (
    <ProfileContainer>
      {editSubscription ? (
        <EditSubscription goBack={() => setEditSubscription(false)} />
      ) : (
        <>
          <ProfileTitle>Subscription and Payment Details</ProfileTitle>
          <ProfileDescription>
            Here you will find the details of your organization's subcription
            and payment history. You can change your subscription or payment
            type using one the buttons below.
          </ProfileDescription>
          <ButtonContainer>
            <EditButton onClick={e => setEditSubscription(true)}>
              <CheckBoxCheck />
              <span>UPDATE SUBSCRIPTION</span>
            </EditButton>
            <EditButton
              onClick={() => props.history.push(`${dashboard}${updatePayment}`)}
            >
              <CheckBoxCheck />
              <span>UPDATE PAYMENT METHOD</span>
            </EditButton>
          </ButtonContainer>
          <>
            <PaymentDetails />
          </>
        </>
      )}
    </ProfileContainer>
  );
}
