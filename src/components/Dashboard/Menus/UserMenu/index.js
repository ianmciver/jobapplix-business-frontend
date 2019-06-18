import React, { useState, useEffect, useContext, useCallback } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { useDropzone } from "react-dropzone";

import { updateUserImage } from "../../../../actions/businessUserActions";
import {
  ModalContainer,
  MenuContainer,
  CloseIcon,
  SubjectContainer,
  SubjectImageContainer,
  SubjectImageHolder,
  SubjectImage,
  AddImageText,
  SubjectNameContainer,
  SubjectName,
  SubjectTitle,
  MenuItem,
  MenuChevron,
  MenuItemTitle,
  LogOutButton
} from "../styles";

import Chevron from "../../../../assets/Chevron";
import UserIcon from "../../../../assets/UserIcon";

import { DashboardContext } from "../../DashboardContext";
import { textBlue } from "../../../../constants/colors";
import { dashboard, userProfile } from "../../../../constants/routes";

import FirebaseContext from "../../../../Firebase/context";

function UserMenu(props) {
  const [file, setFile] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader();

    reader.onabort = () => console.log("file read was aborted");
    reader.onerror = () => console.log("file read errored out");
    acceptedFiles.forEach(file => {
      reader.readAsDataURL(file);
      setFile(file);
    });
  }, []);

  useEffect(() => {
    if (file && file.name) {
      props.updateUserImage(file);
    }
  }, [file]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

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
        <CloseIcon onClick={dashboardContext.toggleUserMenu}>
          <Chevron width={"20px"} height={"20px"} color={"white"} />
        </CloseIcon>
        <SubjectContainer>
          {props.user.image_url ? (
            <SubjectImageContainer>
              <SubjectImageHolder>
                <SubjectImage image={props.user.image_url} />
              </SubjectImageHolder>
            </SubjectImageContainer>
          ) : (
            <SubjectImageContainer {...getRootProps()}>
              <input {...getInputProps()} />
              <SubjectImageHolder>
                <UserIcon width="40" height="44" />
              </SubjectImageHolder>
              <AddImageText>+ Add Photo</AddImageText>
            </SubjectImageContainer>
          )}
          <SubjectNameContainer>
            <SubjectName>{props.user.name}</SubjectName>
            <SubjectTitle>{props.user.title}</SubjectTitle>
          </SubjectNameContainer>
        </SubjectContainer>
        <MenuItem
          onClick={() => {
            dashboardContext.toggleUserMenu();
            props.history.push(`${dashboard}${userProfile}`);
          }}
        >
          <MenuItemTitle>View & update personal information</MenuItemTitle>
        </MenuItem>
        <LogOutButton onClick={logOut}>Log Out</LogOutButton>
      </MenuContainer>
    </>
  );
}

export default connect(
  state => ({ user: state.businessUser }),
  { updateUserImage }
)(withRouter(UserMenu));
