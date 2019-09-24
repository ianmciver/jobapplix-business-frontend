import styled from "styled-components";

import { media } from "../../../styles/mediaQueries";
import { FormButton } from "../../../styles/buttons";

export const ProfileContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${media.desktop`

    width: calc(100% - 205px);
    margin-top: 50px;
    margin-left: 155px;
    margin-right: 50px;
  `}
`;

export const ProfileTitle = styled.h2`
  font-size: 3.5rem;
  color: ${props => props.theme.textDark};
  margin-bottom: 20px;
  align-self: flex-start;
`;

export const UpdateButton = styled(FormButton)`
  align-self: flex-start;
  font-weight: 700;
  color: ${props => props.theme.borderGrey};
  padding: 7px 14px;
  border-color: ${props => props.theme.borderGrey};
  margin: 20px 0 30px 0;
  display: inline-block;
  &:hover {
    background-color: ${props => props.theme.borderGrey};
    color: ${props => props.theme.textLight};
  }

  &:disabled {
    border-color: ${props => props.theme.borderLight};
    color: ${props => props.theme.borderLight};
    background-color: ${props => props.theme.backgroundLight};
  }
`;

export const EditButton = styled.div`
  position: absolute;
  top: -10px;
  right: 30px;
  width: 40px;
  height: 40px;
  fill: ${props => props.theme.textBlue};
  cursor: pointer;
  transform: rotate(90deg);
  &:hover {
    fill: ${props => props.theme.textDark};
  }
`;
