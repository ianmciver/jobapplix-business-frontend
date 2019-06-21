import React, { useContext } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { updateUserImage } from "../../../../actions/businessUserActions";
import { ModalContainer } from "../styles";

import LogoutIcon from "../../../../assets/Logout";
import ProfileIcon from "../../../../assets/Profile";

import {
  MenuContainer,
  Notch,
  SubjectNameContainer,
  SubjectName,
  SubjectTitle,
  Separator,
  MenuItem,
  MenuText,
  MenuIcon
} from "./styles";

import { DashboardContext } from "../../DashboardContext";
import { dashboard, userProfile } from "../../../../constants/routes";

import FirebaseContext from "../../../../Firebase/context";

function UserMenu(props) {
  const dashboardContext = useContext(DashboardContext);
  const firebase = useContext(FirebaseContext);

  const logOut = () => {
    firebase.doSignOut();
    props.history.replace("/signin");
  };

  return (
    <>
      <ModalContainer
        show={dashboardContext.userMenuOpen}
        onClick={dashboardContext.toggleUserMenu}
      />
      <MenuContainer open={dashboardContext.userMenuOpen}>
        <Notch />
        <SubjectNameContainer>
          <SubjectName>{props.user.name}</SubjectName>
          <SubjectTitle>{props.user.title}</SubjectTitle>
        </SubjectNameContainer>
        <Separator />
        <MenuItem
          onClick={() => {
            dashboardContext.toggleUserMenu();
            props.history.push(`${dashboard}${userProfile}`);
          }}
        >
          <MenuIcon>
            <ProfileIcon />
          </MenuIcon>
          <MenuText>PROFILE</MenuText>
        </MenuItem>
        <MenuItem onClick={logOut}>
          <MenuIcon>
            <LogoutIcon />
          </MenuIcon>
          <MenuText>SIGN OUT</MenuText>
        </MenuItem>
      </MenuContainer>
    </>
  );
}

export default connect(
  state => ({ user: state.businessUser }),
  { updateUserImage }
)(withRouter(UserMenu));
