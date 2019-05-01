import React, { useState, useEffect, useCallback, useContext } from "react";
import { connect } from "react-redux";
import { useDropzone } from "react-dropzone";

import { TextInput, TextArea } from "../../../../styles/forms";
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
  InputLabel,
  Error
} from "./styles";

function EditBusinessDetails(props) {
  const firebase = useContext(FirebaseContext);
  const [image, setImage] = useState(props.user.image_url);
  const [name, setName] = useState(props.user.name);
  const [title, setTitle] = useState(props.user.title);
  const [email, setEmail] = useState(props.user.email);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [noPasswordMatch, setNoPasswordMatch] = useState("");
  const [noPasswordLength, setNoPasswordLength] = useState("");
  const [invalidEmail, setinValidEmail] = useState(false);
  const [error, setError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (
      name === props.user.name &&
      title === props.user.title &&
      email === props.user.email &&
      newPassword === ""
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [name, title, email, newPassword]);

  useEffect(() => {
    if (newPassword && newPassword !== confirmNewPassword) {
      setNoPasswordMatch("Passwords Do Not Match");
    } else {
      setNoPasswordMatch("");
    }
  }, [newPassword, confirmNewPassword]);

  useEffect(() => {
    if (newPassword && newPassword.length < 6) {
      setNoPasswordLength("Password Must Be At Least 6 Characters");
    } else {
      setNoPasswordLength("");
    }
  }, [newPassword]);

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

  const submitHandler = async e => {
    try {
      await firebase.doSignInWithEmailAndPassword(props.user.email, password);
      const userDetails = {
        id: props.user.id
      };

      if (name !== props.user.name) {
        userDetails.name = name;
      }

      if (title !== props.user.title) {
        userDetails.title = title;
      }

      if (email !== props.user.email) {
        userDetails.email = email;
        await firebase.doUpdateUserEmail(email);
      }
      if (newPassword && newPassword === confirmNewPassword) {
        await firebase.doPasswordUpdate(newPassword);
      }
      props.updateUser(userDetails, props.cancel);
    } catch (err) {
      setPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      setError(err.message);
    }
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
      <InputLabel>Your Full Name:</InputLabel>
      <TextInput
        placeholder="YOUR NAME*"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <InputLabel>Your Title:</InputLabel>
      <TextInput
        placeholder="YOUR TITLE"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <InputLabel>Your Email:</InputLabel>
      <TextInput
        placeholder="YOUR EMAIL"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <InputLabel>New Password:</InputLabel>
      <TextInput
        placeholder="NEW PASSWORD"
        value={newPassword}
        type="password"
        onChange={e => setNewPassword(e.target.value)}
      />
      <TextInput
        placeholder="CONFIRM NEW PASSWORD"
        value={confirmNewPassword}
        type="password"
        onChange={e => setConfirmNewPassword(e.target.value)}
      />
      <InputLabel>
        Please Enter Your Existing Password to Make Any Changes:
      </InputLabel>
      <TextInput
        placeholder="PASSWORD"
        value={password}
        type="password"
        onChange={e => setPassword(e.target.value)}
      />
      {error && <Error>{error}</Error>}
      {noPasswordMatch && <Error>{noPasswordMatch}</Error>}
      {noPasswordLength && <Error>{noPasswordLength}</Error>}
      <ButtonContainer>
        <SubmitButton onClick={submitHandler} disabled={buttonDisabled}>
          SAVE DETAILS
        </SubmitButton>
        <SubmitButton cancel onClick={props.cancel}>
          CANCEL
        </SubmitButton>
      </ButtonContainer>
    </>
  );
}

export default connect(
  state => ({ user: state.businessUser }),
  { updateUserImage, updateUser }
)(EditBusinessDetails);
