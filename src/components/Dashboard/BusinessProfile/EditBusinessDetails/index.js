import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { useDropzone } from "react-dropzone";

import { TextInput } from "../../../../styles/forms";

import {
  createBusinessBasics,
  checkUrlForAvailability
} from "../../../../actions/businessActions";

import {
  SubjectImageContainer,
  SubjectImageHolder,
  SubjectImage,
  AddImageText
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

  useEffect(() => {
    if (name.length > 0 && url.length > 0 && urlAvailable) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name, url, urlAvailable]);

  useEffect(() => {
    if (file && file.name) {
      props.updateUserImage(file);
    }
  }, [file]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader();

    reader.onabort = () => console.log("file read was aborted");
    reader.onerror = () => console.log("file read errored out");
    acceptedFiles.forEach(file => {
      reader.readAsDataURL(file);
      setFile(file);
    });
  }, []);

  const validateUrl = () => {
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
  };

  return (
    <>
      <SubjectImageContainer {...getRootProps()}>
        <input {...getInputProps()} />
        <SubjectImageHolder>
          <SubjectImage image={image} />
        </SubjectImageHolder>
        <AddImageText>+ Change Image</AddImageText>
      </SubjectImageContainer>
      <TextInput
        placeholder="BUSINESS NAME*"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <TextInput
        placeholder="JOBAPPLIX URL*"
        value={url}
        onChange={e => setUrl(e.target.value)}
        onBlur={validateUrl}
      />
      {urlAvailable ? (
        <span>
          Your business's JobApplix page will be found at:{" "}
          <span className="step">{`https://${url}.jobapplix.com`}</span>
        </span>
      ) : (
        <span className="no-match">Sorry, that URL has already been taken</span>
      )}
      <TextInput
        placeholder="BUSINESS EMAIL"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextInput
        placeholder="ADDRESS"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
      <TextInput
        placeholder="PHONE NUMBER"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <TextInput
        placeholder="BUSINESS WEBSITE"
        value={website}
        onChange={e => setWebsite(e.target.value)}
      />
    </>
  );
}

export default connect(state => ({ business: state.business }))(
  EditBusinessDetails
);
