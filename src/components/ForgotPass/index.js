import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { API_URL } from "../../constants/urls";

import { Formik } from "formik";
import * as Yup from "yup";

import { FirebaseContext } from "../../Firebase";
import { AppContainer } from "../SignIn/styles";
import {
  Form,
  FormGroup,
  Label,
  TextInput,
  ButtonContainer,
  NextButton
} from "../../styles/forms2";
import { SignInContainer, SignUpCTA, ErrorText, SignInCard } from "./styles";

import Header from "../Header";
import Footer from "../Footer";

const EmailValidation = Yup.object().shape({
  email: Yup.string()
    .email("Please Enter a Valid Email Address")
    .required("An Email Address is Required")
});

function SignIn(props) {
  const [error, setError] = useState("");
  const [complete, setComplete] = useState(false);
  const firebase = useContext(FirebaseContext);

  const sendEmail = async values => {
    let newUUID = await axios.get(
      `${API_URL}/businesses/userreset?email=${values.email}`
    );
    firebase
      .doPasswordReset(values.email, {
        url: `http://localhost:3000/resetpass/${newUUID}`
      })
      .then(res => {
        setComplete(true);
      })
      .catch(err => {
        setError("There is no user associated with this email address");
      });
  };

  return (
    <AppContainer>
      <Header />
      <SignInContainer>
        <SignInCard>
          {complete ? (
            <>
              <h1>RESET EMAIL SENT</h1>
              <SignUpCTA>
                Once you have reset your password, click here to{" "}
                <Link to="/signin">Sign In</Link>
              </SignUpCTA>
            </>
          ) : (
            <Formik
              initialValues={{ email: "" }}
              validationSchema={EmailValidation}
              onSubmit={sendEmail}
              render={({
                values,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
                touched
              }) => (
                <Form>
                  <h1>FORGOT PASSWORD</h1>
                  <FormGroup>
                    <Label htmlFor="email">
                      Please Enter Your Email Address
                    </Label>
                    <TextInput
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && errors.email}
                    />
                  </FormGroup>
                  {error && <ErrorText>{error}</ErrorText>}
                  {touched.email && errors.email && (
                    <ErrorText>{errors.email}</ErrorText>
                  )}
                  <ButtonContainer>
                    <NextButton padding="7px 14px" onClick={handleSubmit}>
                      RESET PASSWORD
                    </NextButton>
                  </ButtonContainer>
                  <SignUpCTA>
                    Dont' have an account?{" "}
                    <Link to="/signup">Sign up now!</Link>
                  </SignUpCTA>
                </Form>
              )}
            />
          )}
        </SignInCard>
      </SignInContainer>
      <Footer />
    </AppContainer>
  );
}

export default connect(
  null,
  {}
)(SignIn);
