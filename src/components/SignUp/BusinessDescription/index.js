import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";

import Progress from "../ProgressBar";

import {
  Form,
  FormGroup,
  Label,
  TextArea,
  ButtonContainer,
  NextButton
} from "../../../styles/forms2";
import { Headline, SubHeadline, Instructions } from "../SignUpContainer/styles";
import { createBusinessWithDescription } from "../../../actions/businessActions";

function BusinessPayment(props) {
  return (
    <>
      <Headline>CREATE BUSINESS</Headline>
      <Progress progress={"50%"} />
      <SubHeadline>Business Description</SubHeadline>
      <Instructions>
        Tell us about your business. This will be displayed on your business
        homepage. Tell your prospective applicants more about your business.
      </Instructions>
      <Formik
        onSubmit={({ desc }) => {
          props.createBusinessWithDescription(desc, props.next);
        }}
        initialValues={{ desc: "" }}
        render={({
          values,
          handleBlur,
          handleSubmit,
          handleChange,
          dirty,
          isSubmitting
        }) => (
          <Form>
            <FormGroup>
              <Label htmlFor="desc">Write Your Description Here</Label>
              <TextArea
                name="desc"
                value={values.desc}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormGroup>
            <ButtonContainer>
              <NextButton
                onClick={handleSubmit}
                disabled={!dirty || isSubmitting}
              >
                NEXT STEP &rarr;
              </NextButton>
            </ButtonContainer>
          </Form>
        )}
      />
    </>
  );
}

export default connect(
  null,
  { createBusinessWithDescription }
)(BusinessPayment);
