import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";

import { AppContainer } from "../SignIn/styles";
import { Container } from "../SignUp/SignUpContainer/styles";

import {
  Form,
  Label,
  TextInput,
  ButtonContainer,
  NextButton,
  FormGroup
} from "../../styles/forms2";

import {
  Headline,
  Error,
  Instructions
} from "../SignUp/SignUpContainer/styles";

import { createUserFromPending } from "../../actions/businessUserActions";
import { API_URL } from "../../constants/urls";
import Loading from "../Dashboard/Loading";
import Header from "../Header";
import { dashboard } from "../../constants/routes";

import { withFirebase } from "../../Firebase";

import { WelcomeHeader, BusinessLogo, Description } from "./styles";

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

// app.jobapplix.com/invitesignup/:id
function InviteSignUp(props) {
  const [loading, setLoading] = useState(true); //loading
  const [businessName, setbusinessName] = useState(""); //business name
  const [businessLogo, setbusinessLogo] = useState(""); //business name
  const [email, setEmail] = useState(""); //email
  const [id, setId] = useState(""); //id

  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/businesses/pendinguser?id=${props.match.params.id}`)
      .then(({ data }) => {
        if (data === "") {
          setError(
            "Sorry, it looks like this link is invalid. If you clicked a link from your email it may have expired. Please contact your JobApplix administrator to generate a new link."
          );
          setLoading(false);
        } else {
          setbusinessName(data.name);
          setEmail(data.email);
          setbusinessLogo(data.image_url);
          setId(data.id);
          setLoading(false);
        }
      });
  }, []);

  const createFirebaseUser = (values, e) => {
    props.firebase
      .doCreateUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        props.createUserFromPending(
          values.email,
          values.name,
          values.title,
          id,
          () => props.history.push(`${dashboard}`)
        );
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return (
    <>
      {loading && <Loading />}
      <Header />
      <AppContainer>
        <Container>
          {error && (
            <>
              <WelcomeHeader>Sorry!</WelcomeHeader>
              <Description>{error}</Description>
            </>
          )}
          {!error && !loading && (
            <>
              <Headline>Welcome!</Headline>
              <BusinessLogo src={businessLogo} alt={`${businessName} logo`} />
              <Instructions>
                You have been invited to {businessName}'s JobApplix group.
                Complete your account details here to join the group.
              </Instructions>
              <Formik
                initialValues={{
                  name: "",
                  email: email,
                  title: "",
                  password: "",
                  confirmPassword: ""
                }}
                validationSchema={SignupSchema}
                onSubmit={createFirebaseUser}
                render={({
                  values,
                  touched,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  dirty
                }) => {
                  const buttonDisabled =
                    !dirty ||
                    isSubmitting ||
                    (errors.email ||
                      errors.password ||
                      errors.confirmPassword ||
                      errors.name) ||
                    values.password !== values.confirmPassword;
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
                        {touched.name && errors.name && (
                          <Error>{errors.name}</Error>
                        )}
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
                        {touched.email && errors.email && (
                          <Error>{errors.email}</Error>
                        )}
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
                        {touched.password && errors.password && (
                          <Error>{errors.password}</Error>
                        )}
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="confirmPassword">
                          Confirm Password
                        </Label>
                        <TextInput
                          name="confirmPassword"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="password"
                          match={errors.confirmPassword}
                        />
                        {touched.confirmPassword && errors.confirmPassword && (
                          <Error>{errors.confirmPassword}</Error>
                        )}
                      </FormGroup>
                      {error ? <Error>{error}</Error> : null}
                      <ButtonContainer>
                        <NextButton
                          disabled={buttonDisabled}
                          onClick={handleSubmit}
                        >
                          {isSubmitting ? "LOADING..." : "REGISTER"} &rarr;
                        </NextButton>
                      </ButtonContainer>
                    </Form>
                  );
                }}
              />
            </>
          )}
        </Container>
      </AppContainer>
    </>
  );
}

export default connect(
  null,
  { createUserFromPending }
)(withFirebase(InviteSignUp));
