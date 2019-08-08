import React, { useRef } from "react";
import styled, { css } from "styled-components";

export const Form = styled.form`
  width: 100%;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const Label = styled.label`
  color: #000111;
  font-size: 13px;
  display: block;
  margin-bottom: 10px;
`;

export const TextInput = styled.input`
  display: block;
  width: 100%;
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  font-size: 14px;
  letter-spacing: 0.5px;
  border-color: ${props => props.error && `#e57373`};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.backgroundGreen};
  }
`;

export const ButtonContainer = styled.div`
  margin: 15px 0;
  width: 100%;
`;

export const NextButton = styled.button`
  display: inline-block;
  padding: 10px 14px;
  font-size: 14px;
  text-transform: uppercase;
  font-family: inherit;
  border: 0;
  border-radius: 5px;
  letter-spacing: 2px;
  background-color: #4dd0e1;
  background-image: linear-gradient(
    to right,
    ${props => props.theme.backgroundBlue},
    ${props => props.theme.backgroundGreen}
  );
  color: #fff;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  &:hover {
    background-image: none;
    background-color: ${props => props.theme.backgroundBlue};
  }
`;

// Checkbox Code Below:

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckbox = styled.div`
  border: ${props =>
    props.checked
      ? css`0 solid transparent`
      : css`3px solid ${props => props.theme.backgroundBlue}`};
  background-color: white;
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${props =>
    props.checked ? props.theme.backgroundBlue : "transparent"};
  border-radius: 3px;
  transition: all 150ms;
  cursor: pointer;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${props => props.theme.backgroundBlue};
  }

  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Checkbox = props => {
  const hiddenBox = useRef(null);
  return (
    <CheckboxContainer>
      <HiddenCheckbox ref={hiddenBox} {...props} />
      <StyledCheckbox
        checked={props.checked}
        onClick={() => hiddenBox.current.click()}
      >
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};
