import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  Form,
  Label,
  TextInput,
  ButtonContainer,
  NextButton,
  FormGroup
} from "../../../styles/forms2";

import {
  Headline,
  SubHeadline,
  Error,
  Instructions
} from "../SignUpContainer/styles";

import { SignUpCTA } from "../../SignIn/styles";

import { withFirebase } from "../../../Firebase";

import { createUser } from "../../../actions/businessUserActions";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Your Name is Required"),
  email: Yup.string()
    .email("Please Enter a Invalid Email")
    .required("An Email Address is Required"),
  title: Yup.string(),
  password: Yup.string()
    .min(6, "Password Must be at Least 6 Characters Long")
    .required("Password is Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords Must Match"
  )
});

function UserSignUp(props) {
  const [error, setError] = useState("");

  return (
    <>
      <Headline>CREATE AN ADMIN ACCOUNT</Headline>
      <SubHeadline>Personal Information</SubHeadline>
      <Instructions>
        Create an admin account that will have full access to your business. You
        can invite other users later.
      </Instructions>
      <Instructions>
        **Note: this will be your own personal account, we'll add business stuff
        next.
      </Instructions>
      <Formik
        initialValues={{
          name: "",
          email: "",
          title: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, formik) => {
          formik.setSubmitting(true);
          props.firebase
            .doCreateUserWithEmailAndPassword(values.email, values.password)
            .then(data => {
              props.createUser(
                values.email,
                values.name,
                values.title,
                props.next
              );
            })
            .catch(err => {
              formik.resetForm();
              formik.setSubmitting(false);
              setError(err.message);
            });
        }}
        render={({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => {
          return (
            <Form>
              <FormGroup>
                <Label htmlFor="name">Full Name</Label>
                <TextInput
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && errors.name}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <TextInput
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && errors.email}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="title">Your Title</Label>
                <TextInput
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <TextInput
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  error={
                    touched.password &&
                    (errors.confirmPassword || errors.password)
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <TextInput
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  match={errors.confirmPassword}
                />
              </FormGroup>
              {touched.name && errors.name && <Error>{errors.name}</Error>}
              {touched.email && errors.email && <Error>{errors.email}</Error>}
              {touched.confirmPassword && errors.confirmPassword && (
                <Error>{errors.confirmPassword}</Error>
              )}
              {touched.password && errors.password && (
                <Error>{errors.password}</Error>
              )}
              {error ? <Error>{error}</Error> : null}
              <ButtonContainer>
                <NextButton
                  disabled={
                    isSubmitting ||
                    (errors.email ||
                      errors.password ||
                      errors.confirmPassword ||
                      errors.name)
                  }
                  onClick={handleSubmit}
                >
                  {isSubmitting ? "LOADING..." : "NEXT STEP"} &rarr;
                </NextButton>
              </ButtonContainer>
            </Form>
          );
        }}
      />
      <SignUpCTA>
        Already have an account? <Link to="/signin">Sign in now!</Link>
      </SignUpCTA>
    </>
  );
}

export default connect(
  null,
  { createUser }
)(withFirebase(UserSignUp));
