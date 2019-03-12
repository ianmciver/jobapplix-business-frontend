import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SignInContainer,
  CheckboxContainer,
  Checkbox,
  SignInButton,
  SignUpCTA
} from "./styles";
import { TextInput } from "../../styles/forms";

export default function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  return (
    <SignInContainer>
      <h1>SIGN IN</h1>
      <TextInput
        placeholder="EMAIL"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextInput
        placeholder="PASSWORD"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <CheckboxContainer>
        <Checkbox checked={remember} onClick={e => setRemember(!remember)} />
        <span>Remember Me</span>
      </CheckboxContainer>
      <SignInButton padding="7px 14px">SIGN IN</SignInButton>
      <SignUpCTA>
        Dont' have an account? <Link to="/signup">Sign up now!</Link>
      </SignUpCTA>
    </SignInContainer>
  );
}
