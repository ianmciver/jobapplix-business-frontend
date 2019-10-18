import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import { FirebaseContext } from "../../Firebase";
import { dashboard } from "../../constants/routes";
import {
  SignInContainer,
  CheckboxContainer,
  SignUpCTA,
  ErrorText,
  AppContainer,
  SignInCard
} from "./styles";

import {
  Form,
  Label,
  TextInput,
  Checkbox,
  ButtonContainer,
  NextButton,
  FormGroup
} from "../../styles/forms2";

import Header from "../Header";
import Footer from "../Footer";
import { fetchUser } from "../../actions/businessUserActions";
import { getBusinessSummary } from "../../actions/businessActions";

import { forgotPass, signup } from "../../constants/routes";
import isLoggedIn from "../../helpers/isLoggedIn";

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please Enter a Valid Email")
    .required("Please Enter a Valid Email"),
  password: Yup.string().required("Password is Required"),
  remember: Yup.boolean()
});

function SignIn(props) {
  const [error, setError] = useState("");
  const firebase = useContext(FirebaseContext);
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.doSetInitializationListener(() => setFirebaseInitialized(true));
  }, []);

  useEffect(() => {
    if (firebaseInitialized && !props.businessUser.error) {
      isLoggedIn().then(loggedIn => {
        if (loggedIn) {
          props.history.replace(dashboard);
        }
      });
    }
  }, [firebaseInitialized]);

  return (
    <AppContainer>
      <Header />
      <SignInContainer>
        <SignInCard>
          <h1>SIGN IN</h1>
          {props.businessUser.error && (
            <ErrorText>
              Internal Error: We have encountered an error, please try again at
              another time.
            </ErrorText>
          )}
          {error && <ErrorText>{error}</ErrorText>}
          <Formik
            onSubmit={(values, formik) => {
              console.log(process.env.NODE_ENV);
              console.log(process.env.REACT_APP_FIREBASE_PROJECT_ID);
              firebase
                .doSignInWithEmailAndPassword(values.email, values.password)
                .then(() => {
                  props.history.push(dashboard);
                  props.fetchUser();
                  props.getBusinessSummary(() =>
                    props.history.replace("/signin")
                  );
                })
                .catch(err => {
                  setError("Email or Password is incorrect");
                  formik.resetForm();
                });
            }}
            validationSchema={SignInSchema}
            initialValues={{ email: "", password: "", remember: false }}
            render={({
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit
            }) => {
              return (
                <Form>
                  <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <TextInput
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      error={touched.email && errors.email}
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email && (
                      <ErrorText>{errors.email}</ErrorText>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="password">
                      Password
                      <SignUpCTA>
                        <Link to={forgotPass}>Forgot your password?</Link>
                      </SignUpCTA>
                    </Label>
                    <TextInput
                      name="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      error={touched.password && errors.password}
                      onBlur={handleBlur}
                    />
                    {touched.password && errors.password && (
                      <ErrorText>{errors.password}</ErrorText>
                    )}
                  </FormGroup>

                  <CheckboxContainer>
                    <Checkbox
                      name="remember"
                      checked={values.remember}
                      onChange={handleChange}
                    />
                    <label htmlFor="remember">Remember Me</label>
                  </CheckboxContainer>
                  <ButtonContainer>
                    <NextButton padding="7px 14px" onClick={handleSubmit}>
                      SIGN IN &rarr;
                    </NextButton>
                  </ButtonContainer>
                  <SignUpCTA>
                    Dont' have an account? <Link to={signup}>Sign up now!</Link>
                  </SignUpCTA>
                </Form>
              );
            }}
          />
        </SignInCard>
      </SignInContainer>
      <Footer />
    </AppContainer>
  );
}

export default connect(
  state => ({ businessUser: state.businessUser }),
  { fetchUser, getBusinessSummary }
)(SignIn);
