import React, { useState } from "react";

import CheckBoxCheck from "../../../assets/checkboxCheck";

import UserDetails from "./UserDetails";
import EditUserDetails from "./EditUserDetails";

import {
  ProfileContainer,
  ProfileTitle,
  EditButton,
  ButtonContainer
} from "./styles";

export default function UserProfile(props) {
  const [updateUser, setUpdateUser] = useState(false);

  return (
    <ProfileContainer>
      <ProfileTitle>User Profile</ProfileTitle>
      {!updateUser && (
        <ButtonContainer>
          <EditButton onClick={e => setUpdateUser(true)}>
            <CheckBoxCheck />
            <span>Edit Your Profile</span>
          </EditButton>
        </ButtonContainer>
      )}
      {updateUser ? (
        <EditUserDetails cancel={() => setUpdateUser(false)} />
      ) : (
        <UserDetails />
      )}
    </ProfileContainer>
  );
}
