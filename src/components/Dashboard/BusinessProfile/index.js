import React, { useState } from "react";

import BusinessDetails from "./BusinessDetails";
import EditBusinessDetails from "./EditBusinessDetails";

import { ProfileContainer, ProfileTitle, UpdateButton } from "./styles";

export default function BusinessProfile(props) {
  const [updateBusiness, setUpdateBusiness] = useState(false);

  return (
    <ProfileContainer>
      <ProfileTitle>Business Profile</ProfileTitle>
      {updateBusiness ? (
        <EditBusinessDetails />
      ) : (
        <>
          <BusinessDetails />

          <UpdateButton onClick={e => setUpdateBusiness(true)}>
            UPDATE DETAILS
          </UpdateButton>
        </>
      )}
      {/* Edit Payments Button*/}
    </ProfileContainer>
  );
}
