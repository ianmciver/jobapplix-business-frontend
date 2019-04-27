import React, { useState } from "react";

import BusinessDetails from "./BusinessDetails";
import EditBusinessDetails from "./EditBusinessDetails";
import { dashboard, subscription } from "../../../constants/routes";

import { ProfileContainer, ProfileTitle, UpdateButton } from "./styles";

export default function BusinessProfile(props) {
  const [updateBusiness, setUpdateBusiness] = useState(false);

  return (
    <ProfileContainer>
      <ProfileTitle>Business Profile</ProfileTitle>
      {updateBusiness ? (
        <EditBusinessDetails cancel={() => setUpdateBusiness(false)} />
      ) : (
        <>
          <BusinessDetails />

          <UpdateButton onClick={e => setUpdateBusiness(true)}>
            UPDATE DETAILS
          </UpdateButton>
          <UpdateButton
            onClick={e => props.history.push(`${dashboard}${subscription}`)}
          >
            UPDATE SUBSCRIPTION AND PAYMENT INFO
          </UpdateButton>
        </>
      )}
      {/* Edit Payments Button*/}
    </ProfileContainer>
  );
}
