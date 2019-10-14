import React, { useState, useCallback, useContext } from "react";
import { connect } from "react-redux";
import { useDropzone } from "react-dropzone";
import { Formik } from "formik";
import * as Yup from "yup";

import { Form, FormGroup, Label, TextInput } from "../../../../styles/forms2";
import FirebaseContext from "../../../../Firebase/context";

import {
  updateUserImage,
  updateUser
} from "../../../../actions/businessUserActions";

import {
  SubjectImageContainer,
  SubjectImageHolder,
  SubjectImage,
  AddImageText,
  ButtonContainer,
  SubmitButton,
  CancelButton,
  Error
} from "./styles";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Your Name is Required"),
  email: Yup.string()
    .email("Please Enter a Invalid Email")
    .required("An Email Address is Required"),
  title: Yup.string(),
  password: Yup.string()
    .min(6, "Password Must be at Least 6 Characters Long")
    .required("A Valid Password is Required"),
  newPassword: Yup.string().min(
    6,
    "Password Must be at Least 6 Characters Long"
  ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("newPassword"), null],
    "Passwords Must Match"
  )
});

function EditBusinessDetails(props) {
  const firebase = useContext(FirebaseContext);
  const [image, setImage] = useState(props.user.image_url);

  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader();

    reader.onabort = () => console.log("file read was aborted");
    reader.onerror = () => console.log("file read errored out");
    reader.onload = e => {
      setImage(reader.result);
    };
    acceptedFiles.forEach(file => {
      reader.readAsDataURL(file);
      props.updateUserImage(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <SubjectImageContainer {...getRootProps()}>
        <input {...getInputProps()} />
        <SubjectImageHolder>
          <SubjectImage image={image} />
        </SubjectImageHolder>
        <AddImageText>+ Drop File or Click to Change Image</AddImageText>
      </SubjectImageContainer>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{
          name: props.user.name,
          title: props.user.title,
          email: props.user.email,
          password: "",
          newPassword: "",
          confirmPassword: ""
        }}
        onSubmit={async (
          values,
          { setFieldValue, setSubmitting, setFieldError }
        ) => {
          setSubmitting(true);
          try {
            await firebase.doSignInWithEmailAndPassword(
              props.user.email,
              values.password
            );
            const userDetails = {
              id: props.user.id
            };

            if (values.name !== props.user.name) {
              userDetails.name = values.name;
            }

            if (values.title !== props.user.title) {
              userDetails.title = values.title;
            }

            if (values.email !== props.user.email) {
              userDetails.email = values.email;
              await firebase.doUpdateUserEmail(values.email);
            }
            if (
              values.newPassword &&
              values.newPassword === values.confirmNewPassword
            ) {
              await firebase.doPasswordUpdate(values.newPassword);
            }
            props.updateUser(userDetails, props.cancel);
            setSubmitting(false);
          } catch (err) {
            /* Reset all password fields */
            setFieldValue("password", "");
            setFieldValue("newPassword", "");
            setFieldValue("confirmPassword", "");
            /* Set error message relating to password */
            setFieldError("password", "Please Enter Your Valid Password");
          }
        }}
        render={({
          values,
          errors,
          touched,
          handleSubmit,
          handleBlur,
          handleChange
        }) => {
          const buttonDisabled =
            (values.name === props.user.name &&
              values.title === props.user.title &&
              values.email === props.user.email &&
              values.newPassword === "") ||
            errors.password;
          return (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Your Full Name:</Label>
                <TextInput
                  name="name"
                  placeholder="YOUR NAME*"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.name && errors.name && <Error>{errors.name}</Error>}
              </FormGroup>
              <FormGroup>
                <Label>Your Title:</Label>
                <TextInput
                  name="title"
                  placeholder="YOUR TITLE"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </FormGroup>
              <FormGroup>
                <Label>Your Email:</Label>
                <TextInput
                  name="email"
                  placeholder="YOUR EMAIL"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email && <Error>{errors.email}</Error>}
              </FormGroup>
              <FormGroup>
                <Label>New Password:</Label>
                <TextInput
                  name="newPassword"
                  placeholder="NEW PASSWORD"
                  value={values.newPassword}
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.newPassword && errors.newPassword && (
                  <Error>{errors.newPassword}</Error>
                )}
              </FormGroup>
              <FormGroup>
                <TextInput
                  name="confirmPassword"
                  placeholder="CONFIRM NEW PASSWORD"
                  value={values.confirmNewPassword}
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  Please Enter Your Existing Password to Make Any Changes:
                </Label>
                <TextInput
                  name="password"
                  placeholder="PASSWORD"
                  value={values.password}
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.password && errors.password && (
                  <Error>{errors.password}</Error>
                )}
              </FormGroup>
              <ButtonContainer>
                <CancelButton type="button" onClick={props.cancel}>
                  CANCEL
                </CancelButton>
                <SubmitButton
                  type="submit"
                  onClick={handleSubmit}
                  disabled={buttonDisabled}
                >
                  SAVE DETAILS
                </SubmitButton>
              </ButtonContainer>
            </Form>
          );
        }}
      />
    </>
  );
}

export default connect(
  state => ({ user: state.businessUser }),
  { updateUserImage, updateUser }
)(EditBusinessDetails);
