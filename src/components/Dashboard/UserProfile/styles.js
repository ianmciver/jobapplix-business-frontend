import styled from "styled-components";
import { FormButton } from "../../../styles/buttons";
import {
  textDark,
  borderGrey,
  textLight,
  borderLight,
  backgroundLight
} from "../../../constants/colors";

export const ProfileContainer = styled.div`
  margin-top: 25px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
`;

export const ProfileTitle = styled.h2`
  font-size: 1.9rem;
  color: ${textDark};
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const UpdateButton = styled(FormButton)`
  align-self: flex-start;
  font-weight: 700;
  color: ${borderGrey};
  padding: 7px 14px;
  border-color: ${borderGrey};
  margin: 20px 0 30px 0;
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
