import styled from "styled-components";
import { darken, lighten } from "polished";
import { media } from "../../../styles/mediaQueries";

export const UsersListContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  max-width: 1000px;
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
  color: ${props => props.theme.textDark};
  margin-bottom: 20px;
  align-self: flex-start;
`;

export const UsersListDescription = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.textDark};
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
  border-bottom: 1px solid ${props => props.theme.borderQuestion};
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
  margin: 30px 30px 30px 0;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0 5px 10px -1px rgba(0, 0, 0, 0.2);
  border: 1px solid transparent;

  svg {
    width: 15px;
    height: 15px;
    fill: ${props => props.theme.textBlue};
    margin-right: 7px;
  }

  span {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 700px;
    color: ${props => props.theme.textBlue};
  }

  &:hover {
    svg {
      fill: ${props => darken(0.1, props.theme.textBlue)};
    }
    span {
      color: ${props => darken(0.1, props.theme.textBlue)};
    }
    border: 1px solid ${props => lighten(0.4, props.theme.textBlue)};
  }

  &:hover:active {
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const CancelInvite = styled.div`
  width: 18px;
  height: 18px;
  transform: rotate(45deg);
  cursor: pointer;

  svg {
    fill: ${props => props.theme.borderRed};
  }
`;
