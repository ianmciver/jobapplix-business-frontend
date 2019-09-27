import styled from "styled-components";
import { lighten } from "polished";

import { NextButton, TextInput, Label } from "../../../../styles/forms2";

export const InviteUserDescription = styled.p`
  font-size: 1.3rem;
  color: ${props => props.theme.textDark};
  line-height: 2rem;
`;

export const EmailInputContainer = styled.div`
  width: 100%;
  padding: 30px 0 10px;
  margin-left: 0;
`;

export const HiddenLabel = styled(Label)`
  display: none;
`;

export const EmailInput = styled(TextInput)`
  margin-bottom: 10px;
`;

export const ErrorText = styled.span`
  margin-bottom: 10px;
  color: ${props => props.theme.borderRed};
  font-style: italic;
  font-size: 1rem;
  visibility: ${props => (props.show ? "visible" : "hidden")};
`;

export const RoleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const RoleTitle = styled.h3`
  font-size: 1.6rem;
`;

export const CancelButton = styled(NextButton)`
  margin-right: 20px;
  background-image: none;
  background-color: ${props => props.theme.backgroundGrey};
  height: 40px;
  &:hover {
    background-color: ${props => lighten(0.1, props.theme.backgroundGrey)};
  }
`;

export const ConfirmButton = styled(NextButton)``;
