import React, { useState } from "react";

import CheckBoxCheck from "../../../assets/checkboxCheck";

import BusinessDetails from "./BusinessDetails";
import EditBusinessDetails from "./EditBusinessDetails";
import { dashboard, subscription } from "../../../constants/routes";

import {
  ProfileContainer,
  ProfileTitle,
  ProfileDescription,
  EditButton,
  ButtonContainer
} from "./styles";

export default function BusinessProfile(props) {
  const [updateBusiness, setUpdateBusiness] = useState(false);

  return (
    <ProfileContainer>
      <ProfileTitle>Business Profile</ProfileTitle>
      {!updateBusiness && (
        <>
          <ProfileDescription>
            This is the information available to the public about your business.
            This information will appear on your JobApplix website.
          </ProfileDescription>
          <ButtonContainer>
            <EditButton onClick={e => setUpdateBusiness(true)}>
              <CheckBoxCheck />
              <span>Edit Business Profile</span>
            </EditButton>
            <EditButton
              onClick={e => props.history.push(`${dashboard}${subscription}`)}
            >
              <CheckBoxCheck />
              <span>Edit Subscription and Payment Info</span>
            </EditButton>
          </ButtonContainer>
        </>
      )}
      {updateBusiness ? (
        <EditBusinessDetails cancel={() => setUpdateBusiness(false)} />
      ) : (
        <BusinessDetails />
      )}
    </ProfileContainer>
  );
}
