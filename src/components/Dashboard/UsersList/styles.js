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
  margin-left: 30px;
  ${media.desktop`
  width: calc(100% - 205px);
    margin-top: 50px;
    margin-left: 155px;
    margin-right: 50px;
  `};
`;

export const UsersListTitle = styled.h2`
  font-size: 3.5rem;
  color: ${textDark};
  margin-bottom: 20px;
  align-self: flex-start;
`;

export const UsersListDescription = styled.p`
  font-size: 1.2rem;
  color: ${textDark};
  line-height: 1.6rem;
  width: 100%;
  max-width: 600px;
`;

export const UserTable = styled.div`
  width: 100%;
  padding: 10px 0 20px;
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
`;

export const Role = styled(UserName)``;

export const OtherItems = styled.div``;

export const PendingUsersTitle = styled.h2`
  align-self: flex-start;
  font-size: 1.7rem;
  margin-top: 30px 0 0;
`;

export const CreateButton = styled.div`
  cursor: pointer;
  align-self: flex-start;
  display: flex;
  align-items: center;
  margin: 30px 30px 0;
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
  ${media.desktop`margin: 30px 0 0;`};
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
