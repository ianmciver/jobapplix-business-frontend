import React, { useState } from "react";

import EditIcon from "../../../assets/Edit";

import UserDetails from "./UserDetails";
import EditUserDetails from "./EditUserDetails";

import { ProfileContainer, ProfileTitle, EditButton } from "./styles";

export default function UserProfile(props) {
  const [updateUser, setUpdateUser] = useState(false);

  return (
    <ProfileContainer>
      {!updateUser && (
        <EditButton onClick={e => setUpdateUser(true)}>
          <EditIcon />
        </EditButton>
      )}
      <ProfileTitle>User Profile</ProfileTitle>
      {updateUser ? (
        <EditUserDetails cancel={() => setUpdateUser(false)} />
      ) : (
        <UserDetails />
      )}
    </ProfileContainer>
  );
}
