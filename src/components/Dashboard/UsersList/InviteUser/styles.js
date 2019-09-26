import styled from "styled-components";

import { TextInput } from "../../../styles/forms";
import { FormButton } from "../../../styles/buttons";

import {
  textDark,
  borderLight,
  backgroundLight,
  borderGrey,
  textLight
} from "../../../constants/colors";

export const InviteUserContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

export const InviteUserTitle = styled.h2`
  font-size: 1.9rem;
  color: ${textDark};
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const InviteUserDescription = styled.p`
  font-size: 1.2rem;
  color: ${textDark};
  line-height: 1.6rem;
  margin: 0 30px;
`;

export const EmailInputContainer = styled.div`
  width: 100%;
  padding: 30px 30px 10px;
`;

export const EmailInput = styled(TextInput)`
  margin-bottom: 10px;
`;

export const RoleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  width: 100%;
  align-items: center;
`;

export const RoleTitle = styled.h3`
  font-size: 1.6rem;
`;

export const SearchButton = styled(FormButton)`
  align-self: flex-start;
  font-weight: 700;
  color: ${borderGrey};
  padding: 7px 14px;
  border-color: ${borderGrey};
  margin: 20px 0 30px 30px;
  display: inline-block;
  &:hover {
    background-color: ${borderGrey};
    color: ${textLight};
  }

  &:disabled {
    border-color: ${borderLight};
    color: ${borderLight};
    background-color: ${backgroundLight};
  }
`;
