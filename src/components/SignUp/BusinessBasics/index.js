import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import Progress from "../ProgressBar";

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

import { createBusinessBasics } from "../../../actions/businessActions";

const BusinessBasicsSchema = Yup.object().shape({
  businessName: Yup.string().required(
    "Please Enter a Business or Organization Name"
  ),
  email: Yup.string().email("Please Enter a Valid Email"),
  phone: Yup.string(),
  website: Yup.string(),
  address: Yup.string()
});

function BusinessBasics(props) {
  return (
    <>
      <Headline>CREATE A BUSINESS</Headline>
      <Progress progress={"16%"} />
      <SubHeadline>Business Information</SubHeadline>
      <Instructions>
        Great! Now let's create a business account. All the information here
        will appear on your public facing JobApplix webpage.
      </Instructions>
      <Formik
        validationSchema={BusinessBasicsSchema}
        onSubmit={({ businessName, email, address, phone, website }) => {
          props.createBusinessBasics({
            businessName,
            email,
            address,
            phone,
            website
          });

          props.next();
        }}
        initialValues={{
          businessName: "",
          website: "",
          email: "",
          address: "",
          phone: ""
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
            !dirty || isSubmitting || (errors.email || errors.businessName);
          return (
            <Form>
              <FormGroup>
                <Label htmlFor="businessName">
                  Name of Business or Organization
                </Label>
                <TextInput
                  name="businessName"
                  value={values.businessName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.businessName && errors.businessName}
                />
                {touched.businessName && errors.businessName && (
                  <Error>{errors.businessName}</Error>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="website">Current Business Website</Label>
                <TextInput
                  name="website"
                  value={values.website}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.website && errors.website}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Business Email</Label>
                <TextInput
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && errors.email}
                />
                {touched.email && errors.email && <Error>{errors.email}</Error>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="address">Business Address</Label>
                <TextInput
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="phone">Business Phone Number</Label>
                <TextInput
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </FormGroup>
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
)(BusinessBasics);
