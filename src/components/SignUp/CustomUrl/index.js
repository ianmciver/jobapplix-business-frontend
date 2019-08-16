import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import Progress from "../ProgressBar";
import { Spacer } from "./styles";
import {
  Form,
  FormGroup,
  Label,
  TextInput,
  ButtonContainer,
  NextButton
} from "../../../styles/forms2";

import {
  Headline,
  SubHeadline,
  Instructions,
  Error
} from "../SignUpContainer/styles";

import {
  createBusinessBasics,
  checkUrlForAvailability
} from "../../../actions/businessActions";

Yup.addMethod(Yup.string, "validateUrl", function(message) {
  return this.test("validateUrl", message, function(url) {
    const { path, createError } = this;
    return new Promise((resolve, reject) => {
      const newUrl = url.split("https://apply.jobapplix.com/")[1];
      checkUrlForAvailability(newUrl)
        .then(res => {
          if (res.data.url) {
            resolve(true);
          } else {
            reject(createError({ path, message }));
          }
        })
        .catch(err => {
          reject(createError({ path, message }));
        });
    });
  });
});

const BusinessBasicsSchema = Yup.object().shape({
  url: Yup.string()
    .validateUrl("Sorry, that Custom Web Address is Already Taken")
    .required("Please Enter a Custom JobApplix Web Address")
});

const baseAddress = "https://apply.jobapplix.com/";

function CustomUrl(props) {
  const restrictURLChars = (e, cb) => {
    const allowableChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-_";
    if (e.target.value.length < 28) {
      e.target.value = baseAddress;
      cb(e);
      return;
    }
    let newEntry = e.target.value.split(baseAddress);

    newEntry = newEntry[1]
      .split("")
      .filter(char => allowableChars.includes(char))
      .join("");
    e.target.value = baseAddress + newEntry;
    cb(e);
  };

  return (
    <>
      <Headline>CREATE A CUSTOM URL</Headline>
      <Progress progress={"33%"} />
      <SubHeadline>Your Business's JobApplix Web Address</SubHeadline>
      <Spacer />
      <Instructions>
        Let's create a custom JobApplix web address. This is where potential
        applicants will find your job application. This web address is unique to
        your business. Make sure you use a web address that shows potential
        applicants who you are. What you put at the end will make it a unique
        URL for your business.
      </Instructions>
      <Spacer />
      <Formik
        validationSchema={BusinessBasicsSchema}
        onSubmit={({ url }) => {
          props.createBusinessBasics({
            url
          });
          props.next();
        }}
        initialValues={{
          url: baseAddress
        }}
        render={({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          dirty,
          isSubmitting
        }) => {
          const buttonDisabled =
            !dirty || isSubmitting || errors.url || values.url === baseAddress;
          return (
            <Form>
              <FormGroup>
                <Label htmlFor="url">Your JobApplix Web Address:</Label>
                <TextInput
                  name="url"
                  value={values.url}
                  onChange={e => {
                    restrictURLChars(e, handleChange);
                  }}
                  onBlur={handleBlur}
                  error={dirty && (errors.url || values.url === baseAddress)}
                />
                {dirty && errors.url && <Error>{errors.url}</Error>}
                {touched.url && values.url === baseAddress && (
                  <Error>Please provide a custom JobApplix URL.</Error>
                )}
              </FormGroup>
              <Spacer />
              <ButtonContainer>
                <NextButton onClick={handleSubmit} disabled={buttonDisabled}>
                  NEXT STEP &rarr;
                </NextButton>
              </ButtonContainer>
            </Form>
          );
        }}
      />
    </>
  );
}

export default connect(
  null,
  { createBusinessBasics }
)(CustomUrl);
