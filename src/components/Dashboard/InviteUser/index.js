import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { API_URL } from "../../../constants/urls";
import { firebase } from "../../../index";

import ActiveDropdown from "../PositionsList/ActiveDropdown";
import { options, roleToNumerical } from "../UsersList";
import {
  InviteUserContainer,
  InviteUserDescription,
  InviteUserTitle,
  EmailInputContainer,
  EmailInput,
  RoleContainer,
  RoleTitle,
  SearchButton
} from "./styles";
import { dashboard, usersList } from "../../../constants/routes";

function InviteUser(props) {
  const [value, setValue] = useState(options[0]);
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(true);

  useEffect(() => {
    if (email.length > 0) {
      setInvalid(false);
    }
  }, [email]);

  const selectHandler = option => {
    setValue(option);
  };

  const submitInvite = async () => {
    let numericalRole = roleToNumerical[value];
    const token = await firebase.doGetCurrentUserIdToken();
    axios
      .post(`${API_URL}/businesses/pendingusers?bid=${props.id}`, {
        email,
        role: numericalRole,
        token
      })
      .then(() => props.history.push(`${dashboard}${usersList}`));
  };

  return (
    <InviteUserContainer>
      <InviteUserTitle>Invite a new user</InviteUserTitle>
      <InviteUserDescription>
        Invite a new user to your business or organization. Enter the new user's
        email below, select a role for the user and press submit. We will email
        and invite the user to join your organization.
      </InviteUserDescription>
      <EmailInputContainer>
        <EmailInput
          placeholder="New User's Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </EmailInputContainer>
      <RoleContainer>
        <RoleTitle>New User's Role:</RoleTitle>
        <ActiveDropdown
          value={value}
          options={options}
          selectHandler={selectHandler}
        />
      </RoleContainer>
      <SearchButton onClick={submitInvite} disabled={invalid}>
        Invite User
      </SearchButton>
    </InviteUserContainer>
  );
}

export default connect(state => ({ id: state.business.id }))(InviteUser);
