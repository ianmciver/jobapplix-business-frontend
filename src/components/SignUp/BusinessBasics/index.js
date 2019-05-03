import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Progress from "../ProgressBar";

import { TextInput } from "../../../styles/forms";
import {
  Headline,
  SubHeadline,
  Instructions,
  NextButton,
  Error,
  JobApplixAddress,
  AddressLine
} from "../SignUpContainer/styles";

import {
  createBusinessBasics,
  checkUrlForAvailability
} from "../../../actions/businessActions";

function BusinessBasics(props) {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [url, setUrl] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [urlAvailable, setUrlAvailable] = useState(true);

  useEffect(() => {
    if (businessName.length > 0 && url.length > 0 && urlAvailable) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [businessName, url, urlAvailable]);

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

  const restrictURLChars = e => {
    const allowableChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-_";
    let newEntry = e.target.value
      .split("")
      .filter(char => allowableChars.includes(char))
      .join("");
    setUrl(newEntry);
  };

  const buttonClickHandler = () => {
    props.createBusinessBasics(
      businessName,
      email,
      address,
      phone,
      website,
      url
    );

    props.next();
  };

  return (
    <>
      <Headline>CREATE A BUSINESS</Headline>
      <Progress progress={"20%"} />
      <SubHeadline>Business Information</SubHeadline>
      <Instructions>
        Great! Now let's create an business account. All information here will
        be shown on your public facing page.
      </Instructions>
      <Instructions>
        **Note: Your Custom JobApplix Address can only be letters and numbers.
        This will be your new JobApplix web address. You will see a preview of
        your new address at the bottom of the page.
      </Instructions>
      <TextInput
        placeholder="BUSINESS NAME*"
        value={businessName}
        onChange={e => setBusinessName(e.target.value)}
      />
      <TextInput
        placeholder="UNIQUE JOBAPPLIX ADDRESS*"
        value={url}
        onChange={restrictURLChars}
        onBlur={validateUrl}
      />

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
      {urlAvailable ? (
        <>
          <AddressLine>
            Your business's JobApplix page will be found at:{" "}
          </AddressLine>
          <JobApplixAddress>{`https://${url}.jobapplix.com`}</JobApplixAddress>
        </>
      ) : (
        <Error>Sorry, that JobApplix Address has already been taken</Error>
      )}
      <NextButton onClick={buttonClickHandler} disabled={buttonDisabled}>
        NEXT STEP
      </NextButton>
    </>
  );
}

export default connect(
  null,
  { createBusinessBasics }
)(BusinessBasics);
