import React, { useState } from "react";

import UserDetails from "./UserDetails";
import EditUserDetails from "./EditUserDetails";

import { ProfileContainer, ProfileTitle, UpdateButton } from "./styles";

export default function UserProfile(props) {
  const [updateUser, setUpdateUser] = useState(false);

  return (
    <ProfileContainer>
      <ProfileTitle>User Profile</ProfileTitle>
      {updateUser ? (
        <EditUserDetails cancel={() => setUpdateUser(false)} />
      ) : (
        <>
          <UserDetails />
          <UpdateButton onClick={e => setUpdateUser(true)}>
            UPDATE DETAILS
          </UpdateButton>
        </>
      )}
    </ProfileContainer>
  );
}
