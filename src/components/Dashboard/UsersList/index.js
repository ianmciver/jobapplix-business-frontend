import React, { useEffect } from "react";
import { connect } from "react-redux";

import ActiveDropdown from "../PositionsList/ActiveDropdown";

import CheckBoxCheck from "../../../assets/checkboxCheck";

import {
  getListOfBusinessUsers,
  getListOfPendingUsers,
  deletePendingUser,
  updateUserRole
} from "../../../actions/businessActions";

import { dashboard, inviteUserUrl } from "../../../constants/routes";

import {
  UsersListContainer,
  UsersListTitle,
  UsersListDescription,
  UserTable,
  UserContainer,
  UserName,
  CreateButton,
  PendingUsersTitle,
  CancelInvite,
  OtherItems,
  Role
} from "./styles";

export const options = ["Admin", "HR Manager", "Manager", "Read Only"];

export const numericalToRole = {
  11: "Admin",
  12: "HR Manager",
  13: "Manager",
  14: "Read Only"
};

export const roleToNumerical = {
  Admin: 11,
  "HR Manager": 12,
  Manager: 13,
  "Read Only": 14
};

function UsersList(props) {
  useEffect(() => {
    if (props.users.length < 1) {
      props.getListOfBusinessUsers();
    }
  }, []);

  useEffect(() => {
    props.getListOfPendingUsers();
  }, []);

  const selectHandler = id => option => {
    const numRole = roleToNumerical[option];
    props.updateUserRole(id, numRole);
  };

  const deleteHandler = id => {
    props.deletePendingUser(id);
  };

  return (
    <UsersListContainer>
      <UsersListTitle>Business Users</UsersListTitle>
      <UsersListDescription>
        These are all of the users associated with your business. If you have
        the proper authorization you may change a users auth level. You may also
        invite a new user to your organization.
      </UsersListDescription>
      <CreateButton
        onClick={e => props.history.push(`${dashboard}${inviteUserUrl}`)}
      >
        <CheckBoxCheck />
        <span>Invite a new user</span>
      </CreateButton>
      <PendingUsersTitle>Current Users:</PendingUsersTitle>
      <UserTable>
        {props.users.map(user => {
          return (
            <UserContainer key={user.id}>
              <UserName>{user.name}</UserName>
              {props.role < 13 && props.role < user.businesses[0].role ? (
                <ActiveDropdown
                  options={options}
                  value={numericalToRole[user.businesses[0].role]}
                  selectHandler={selectHandler(user.id)}
                />
              ) : (
                <UserName>{numericalToRole[user.businesses[0].role]}</UserName>
              )}
            </UserContainer>
          );
        })}
      </UserTable>
      <PendingUsersTitle>Pending Users:</PendingUsersTitle>
      <UserTable>
        {props.pendingUsers.map(user => {
          return (
            <UserContainer key={user.id}>
              <UserName>{user.email}</UserName>
              <OtherItems>
                <Role>{numericalToRole[user.role]}</Role>
                <CancelInvite onClick={e => deleteHandler(user.id)}>
                  <CheckBoxCheck />
                </CancelInvite>
              </OtherItems>
            </UserContainer>
          );
        })}
      </UserTable>
    </UsersListContainer>
  );
}

export default connect(
  state => ({
    users: state.business.users,
    role: state.business.role,
    pendingUsers: state.business.pendingUsers
  }),
  {
    getListOfBusinessUsers,
    getListOfPendingUsers,
    deletePendingUser,
    updateUserRole
  }
)(UsersList);
