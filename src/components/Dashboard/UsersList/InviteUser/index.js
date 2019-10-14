import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import { API_URL } from "../../../../constants/urls";
import { firebase } from "../../../../index";

import ModalContainer from "../../../ModalContainer";
import ModalCard from "../../../ModalContainer/ModalCard";
import {
  ModalCardHeader,
  ModalCardBody,
  ModalCardFooter
} from "../../../ModalContainer/ModalCard/styles";

import ActiveDropdown from "../../PositionsList/ActiveDropdown";
import { Form, FormGroup } from "../../../../styles/forms2";

import { options, roleToNumerical } from "../index.js";

import {
  InviteUserDescription,
  EmailInputContainer,
  HiddenLabel,
  EmailInput,
  ErrorText,
  RoleContainer,
  RoleTitle,
  CancelButton,
  ConfirmButton
} from "./styles";

const InviteSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please Enter a Valid Email")
    .required("Please Enter a Valid Email")
});

function InviteUser(props) {
  const [value, setValue] = useState(options[0]);

  const selectHandler = option => {
    setValue(option);
  };

  const submitInvite = async values => {
    let numericalRole = roleToNumerical[value];
    const token = await firebase.doGetCurrentUserIdToken();
    axios
      .post(`${API_URL}/businesses/pendingusers?bid=${props.id}`, {
        email: values.email,
        role: numericalRole,
        token
      })
      .then(() => props.close());
  };

  return (
    <ModalContainer open={props.open} clickHandler={props.close}>
      <ModalCard open={props.open}>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={InviteSchema}
          onSubmit={submitInvite}
          render={({
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            resetForm
          }) => (
            <Form>
              <ModalCardHeader>Invite a New User</ModalCardHeader>
              <ModalCardBody>
                <InviteUserDescription>
                  Invite a new user to your business or organization. Enter the
                  new user's email below, select a role for the user and press
                  submit. We will email and invite the user to join your
                  organization.
                </InviteUserDescription>
                <FormGroup>
                  <EmailInputContainer>
                    <HiddenLabel htmlFor="email">Email</HiddenLabel>
                    <EmailInput
                      placeholder="New User's Email"
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      error={touched.email && errors.email}
                      onBlur={handleBlur}
                    />
                    <ErrorText show={values.email.length > 0 && errors.email}>
                      {errors.email}
                    </ErrorText>
                  </EmailInputContainer>
                </FormGroup>
                <RoleContainer>
                  <RoleTitle>New User's Role:</RoleTitle>
                  <ActiveDropdown
                    value={value}
                    options={options}
                    selectHandler={selectHandler}
                  />
                </RoleContainer>
              </ModalCardBody>
              <ModalCardFooter>
                <CancelButton
                  onClick={e => {
                    e.preventDefault();
                    resetForm();
                    props.close();
                  }}
                >
                  Cancel
                </CancelButton>
                <ConfirmButton
                  onClick={handleSubmit}
                  disabled={!touched.email || errors.email}
                >
                  Invite User
                </ConfirmButton>
              </ModalCardFooter>
            </Form>
          )}
        />
      </ModalCard>
    </ModalContainer>
  );
}

export default connect(state => ({ id: state.business.id }))(InviteUser);
