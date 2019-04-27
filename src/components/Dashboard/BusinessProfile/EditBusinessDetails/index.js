import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { useDropzone } from "react-dropzone";

import { TextInput, TextArea } from "../../../../styles/forms";

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
  UrlContainer,
  UrlInfo,
  UrlLink,
  ButtonContainer,
  SubmitButton,
  Error,
  InputLabel
} from "./styles";

function EditBusinessDetails(props) {
  const [image, setImage] = useState(props.business.image_url);
  const [name, setName] = useState(props.business.name);
  const [url, setUrl] = useState(props.business.url);
  const [email, setEmail] = useState(props.business.email);
  const [phone, setPhone] = useState(props.business.phone);
  const [address, setAddress] = useState(props.business.address);
  const [website, setWebsite] = useState(props.business.website);
  const [urlAvailable, setUrlAvailable] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [file, setFile] = useState(null);
  const [changeWarning, setChangeWarning] = useState(false);
  const [desc, setDesc] = useState(props.business.description);

  useEffect(() => {
    if (name.length > 0 && url.length > 0 && urlAvailable) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name, url, urlAvailable]);

  useEffect(() => {
    if (url !== props.business.url) {
      setChangeWarning(true);
    } else {
      setChangeWarning(false);
    }
  }, [url]);

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

  const validateUrl = () => {
    if (url !== props.business.url) {
      checkUrlForAvailability(url)
        .then(res => {
          if (res.data.url) {
            setUrlAvailable(true);
          } else {
            setUrlAvailable(false);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const submitHandler = e => {
    const businessDetails = {
      name,
      email,
      address,
      url,
      phone,
      website,
      description: desc
    };
    props.updateBusinessDetails(businessDetails, props.cancel);
  };

  return (
    <>
      <SubjectImageContainer {...getRootProps()}>
        <input {...getInputProps()} />
        <SubjectImageHolder>
          <SubjectImage image={image} />
        </SubjectImageHolder>
        <AddImageText>+ Drop File or Click to Change Image</AddImageText>
      </SubjectImageContainer>
      <InputLabel>Business Name:</InputLabel>
      <TextInput
        placeholder="BUSINESS NAME*"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <InputLabel>JobApplix URL:</InputLabel>
      <TextInput
        placeholder="JOBAPPLIX URL*"
        value={url}
        onChange={e => setUrl(e.target.value)}
        onBlur={validateUrl}
      />
      <InputLabel>Business Email:</InputLabel>
      <TextInput
        placeholder="BUSINESS EMAIL"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <InputLabel>Business Address:</InputLabel>
      <TextInput
        placeholder="ADDRESS"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
      <InputLabel>Business Phone:</InputLabel>
      <TextInput
        placeholder="PHONE NUMBER"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <InputLabel>Business Website:</InputLabel>
      <TextInput
        placeholder="BUSINESS WEBSITE"
        value={website}
        onChange={e => setWebsite(e.target.value)}
      />
      <InputLabel>Business Description:</InputLabel>
      <TextArea
        placeholder="WRITE YOUR DESCRIPTION HERE..."
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      {changeWarning && (
        <Error>Warning: Changing Your URL will affect current applicants</Error>
      )}
      {urlAvailable ? (
        <UrlContainer>
          <UrlInfo>Your business's JobApplix page will be found at: </UrlInfo>
          <UrlLink
            href={`https://${url}.jobapplix.com`}
            target="_blank_"
          >{`https://${url}.jobapplix.com`}</UrlLink>
        </UrlContainer>
      ) : (
        <Error>Sorry, that URL has already been taken</Error>
      )}
      <ButtonContainer>
        <SubmitButton onClick={submitHandler}>SAVE DETAILS</SubmitButton>
        <SubmitButton cancel onClick={props.cancel}>
          CANCEL
        </SubmitButton>
      </ButtonContainer>
    </>
  );
}

export default connect(
  state => ({ business: state.business }),
  { uploadFileToS3, updateBusinessDetails }
)(EditBusinessDetails);
