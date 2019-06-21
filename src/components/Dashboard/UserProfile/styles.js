import styled from "styled-components";
import { FormButton } from "../../../styles/buttons";
import {
  textDark,
  textBlue,
  borderGrey,
  textLight,
  borderLight,
  backgroundLight
} from "../../../constants/colors";

export const ProfileContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
  width: 100%;
  max-width: 600px;
  position: relative;
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

export const EditButton = styled.div`
  position: absolute;
  top: -10px;
  right: 30px;
  width: 40px;
  height: 40px;
  fill: ${textBlue};
  cursor: pointer;
  transform: rotate(90deg);
  &:hover {
    fill: ${textDark};
  }
`;
