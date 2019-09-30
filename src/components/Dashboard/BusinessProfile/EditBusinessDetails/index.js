import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { useDropzone } from "react-dropzone";
import Cleave from "cleave.js/react";
import { Formik } from "formik";
import * as Yup from "yup";

// import { TextInput, TextArea } from "../../../../styles/forms";
import {
  Form,
  FormGroup,
  TextArea,
  TextInput,
  Label,
  NextButton
} from "../../../../styles/forms2";

import {
  updateBusinessDetails,
  checkUrlForAvailability,
  uploadFileToS3
} from "../../../../actions/businessActions";

import {
  SubjectImageContainer,
  SubjectImageHolder,
  SubjectImage,
  AddImageText,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  Error
} from "./styles";

const baseAddress = "https://apply.jobapplix.com/";

Yup.addMethod(Yup.string, "validateUrl", function(message) {
  return this.test("validateUrl", message, function(url) {
    const { path, createError } = this;
    return new Promise((resolve, reject) => {
      const newUrl = url.split("https://apply.jobapplix.com/")[1];
      if (this.parent.originalUrl !== newUrl) {
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
      } else {
        resolve(true);
      }
    });
  });
});

const BusinessBasicsSchema = Yup.object().shape({
  name: Yup.string().required("Please Enter a Business or Organization Name"),
  email: Yup.string().email("Please Enter a Valid Email"),
  phone: Yup.string(),
  website: Yup.string(),
  address: Yup.string(),
  url: Yup.string()
    .validateUrl("Sorry, that Custom Web Address is Already Taken")
    .required("Please Enter a Custom JobApplix Web Address")
});
function EditBusinessDetails(props) {
  const [image, setImage] = useState(props.business.image_url);

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

  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader();

    reader.onabort = () => console.log("file read was aborted");
    reader.onerror = () => console.log("file read errored out");
    reader.onload = e => {
      setImage(reader.result);
    };
    acceptedFiles.forEach(file => {
      reader.readAsDataURL(file);
      props.uploadFileToS3(file, () => {});
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const submitHandler = ({
    name,
    email,
    address,
    url,
    phone,
    website,
    description
  }) => {
    const businessDetails = {
      name,
      email,
      address,
      url: url.split(baseAddress)[1],
      phone,
      website,
      description
    };
    props.updateBusinessDetails(businessDetails, props.cancel);
  };

  return (
    <Formik
      validationSchema={BusinessBasicsSchema}
      initialValues={{
        name: props.business.name,
        url: `${baseAddress}${props.business.url}`,
        email: props.business.email,
        address: props.business.address,
        phone: props.business.phone,
        website: props.business.website,
        description: props.business.description,
        originalUrl: props.business.url
      }}
      onSubmit={submitHandler}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleBlur,
        dirty,
        isValidating,
        isSubmitting
      }) => {
        const submitDisabled =
          !dirty || isValidating || isSubmitting || errors.email || errors.url;
        return (
          <Form>
            <SubjectImageContainer {...getRootProps()}>
              <input {...getInputProps()} />
              <SubjectImageHolder>
                <SubjectImage src={image} />
              </SubjectImageHolder>
              <AddImageText>+ Drop File or Click to Change Image</AddImageText>
            </SubjectImageContainer>
            <FormGroup>
              <Label htmlFor="name">Business Name:</Label>
              <TextInput
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {<Error>{touched.name && errors.name}</Error>}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="url">JobApplix URL:</Label>
              <TextInput
                name="url"
                value={values.url}
                onChange={e => {
                  restrictURLChars(e, handleChange);
                }}
                onBlur={handleBlur}
              />
              {<Error>{touched.url && errors.url}</Error>}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Business Email:</Label>
              <TextInput
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {<Error>{touched.email && errors.email}</Error>}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="address">Business Address:</Label>
              <TextInput
                name="address"
                value={values.address}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phone">Business Phone:</Label>
              <Cleave
                className="formTextInput"
                name="phone"
                options={{
                  delimiters: ["(", ")", "-"],
                  blocks: [0, 3, 3, 4]
                }}
                value={values.phone}
                onChange={e => {
                  console.log(e.target.value);
                  console.log(values.phone);
                  handleChange(e);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="wesite">Business Website:</Label>
              <TextInput
                name="website"
                value={values.website}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="description">Business Description:</Label>
              <TextArea
                name="description"
                value={values.description}
                onChange={handleChange}
              />
            </FormGroup>
            <ButtonContainer>
              <CancelButton cancel onClick={props.cancel}>
                CANCEL
              </CancelButton>
              <ConfirmButton
                onClick={handleSubmit}
                type="submit"
                disabled={submitDisabled}
              >
                SAVE DETAILS
              </ConfirmButton>
            </ButtonContainer>
          </Form>
        );
      }}
    />
  );
}

export default connect(
  state => ({ business: state.business }),
  { uploadFileToS3, updateBusinessDetails }
)(EditBusinessDetails);
