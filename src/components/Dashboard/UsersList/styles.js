import styled from "styled-components";

import { media } from "../../../styles/mediaQueries";

import {
  textDark,
  textBlue,
  borderQuestion,
  borderRed
} from "../../../constants/colors";

export const UsersListContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.desktop`
    margin-top: 73px
  `};
`;

export const UsersListTitle = styled.h2`
  font-size: 1.9rem;
  color: ${textDark};
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const UsersListDescription = styled.p`
  font-size: 1.2rem;
  color: ${textDark};
  line-height: 1.6rem;
  padding: 0 30px;
  width: 100%;
  max-width: 600px;
`;

export const UserTable = styled.div`
  width: 100%;
  padding: 10px 30px 20px;
  ${media.desktop`padding: 10px 80px 20px`};
`;

export const UserContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${borderQuestion};
  padding: 10px 0;
`;

export const UserName = styled.h2`
  font-size: 1.4rem;
  margin-right: 10px;
`;

export const Role = styled(UserName)`
  margin-right: 20px;
`;

export const OtherItems = styled.div`
  display: flex;
  align-items: center;
`;

export const PendingUsersTitle = styled.h2`
  align-self: flex-start;
  font-size: 1.7rem;
  margin: 30px 30px 0;
  ${media.desktop`margin: 30px 80px 0`}
`;

export const CreateButton = styled.div`
  cursor: pointer;
  align-self: flex-start;
  display: flex;
  align-items: center;
  margin: 30px 30px 0;
  ${media.desktop`margin: 30px 80px 0`}
  svg {
    width: 15px;
    height: 15px;
    fill: ${textBlue};
    margin-right: 7px;
  }

  span {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 700px;
    color: ${textBlue};
  }
`;

export const CancelInvite = styled.div`
  width: 18px;
  height: 18px;
  transform: rotate(45deg);
  cursor: pointer;

  svg {
    fill: ${borderRed};
  }
`;
