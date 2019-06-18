import React, { useState } from "react";

import EditIcon from "../../../assets/Edit";

import BusinessDetails from "./BusinessDetails";
import EditBusinessDetails from "./EditBusinessDetails";
import { dashboard, subscription } from "../../../constants/routes";

import {
  ProfileContainer,
  ProfileTitle,
  UpdateButton,
  EditButton
} from "./styles";

export default function BusinessProfile(props) {
  const [updateBusiness, setUpdateBusiness] = useState(false);

  return (
    <ProfileContainer>
      {!updateBusiness && (
        <EditButton onClick={e => setUpdateBusiness(true)}>
          <EditIcon />
        </EditButton>
      )}
      <ProfileTitle>Business Profile</ProfileTitle>
      {updateBusiness ? (
        <EditBusinessDetails cancel={() => setUpdateBusiness(false)} />
      ) : (
        <>
          <BusinessDetails />
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
