import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { TextInput } from "../../../styles/forms";
import { NextButton } from "../SignUpContainer/styles";

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
      <h1 className="headline">CREATE A BUSINESS ACCOUNT</h1>
      <span className="step">Step 2:</span>
      <span>
        Great! Now let's create an business account. This account will serve as
        either your sole location, or your organization master account. You will
        be able to add sub-businesses later.
      </span>
      <span>
        Note: All information here will be shown on your public facing page.
      </span>
      <TextInput
        placeholder="BUSINESS NAME*"
        value={businessName}
        onChange={e => setBusinessName(e.target.value)}
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
