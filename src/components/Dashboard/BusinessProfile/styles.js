import styled from "styled-components";
import { FormButton } from "../../../styles/buttons";
import { media } from "../../../styles/mediaQueries";
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
  padding: 0 50px;
  width: 100%;
  max-width: 600px;
  position: relative;
  ${media.desktop`
    width: calc(100% - 160px);
    max-width: 100%;
    margin-top: 50px;
    margin-left: 105px;
    margin-right: 50px;
  `}
`;

export const ProfileTitle = styled.h2`
  font-size: 3.5rem;
  color: ${props => props.theme.textDark};
  /* text-transform: uppercase; */
  margin-bottom: 20px;
  align-self: flex-start;
`;

export const UpdateButton = styled(FormButton)`
  width: 100%;
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
