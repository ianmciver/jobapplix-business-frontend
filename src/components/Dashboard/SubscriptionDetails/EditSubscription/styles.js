import styled from "styled-components";
import { lighten } from "polished";

import { NextButton } from "../../../../styles/forms2";
import { media } from "../../../../styles/mediaQueries";

export const ProfileContainer = styled.div``;

export const ProfileTitle = styled.h2`
  font-size: 3.5rem;
  color: ${props => props.theme.textDark};
  margin-bottom: 20px;
  align-self: flex-start;
`;

export const InfoBody = styled.span`
  font-size: 1.6rem;
  line-height: 3rem;
`;

export const GoBackButton = styled(NextButton)`
  margin-right: 20px;
`;

export const CancelButton = styled(NextButton)`
  background-image: none;
  background-color: ${props => props.theme.backgroundGrey};
  height: 40px;
  &:hover {
    background-color: ${props => lighten(0.1, props.theme.backgroundGrey)};
  }
`;

export const CancelSubButton = styled(NextButton)`
  margin-right: 20px;
  background-image: none;
  background-color: ${props => props.theme.borderRed};
  height: 40px;
  &:hover {
    background-color: ${props => lighten(0.1, props.theme.borderRed)};
  }
`;
