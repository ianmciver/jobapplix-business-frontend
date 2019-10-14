import styled from "styled-components";

import { FormButton } from "../../../../styles/buttons";

export const Header = styled.h1`
  font-size: 1.8rem;
  color: ${props => props.theme.textLight};
`;

export const Message = styled.p`
  color: ${props => props.theme.textLight};
  padding: 30px;
  font-size: 1.2rem;
  line-height: 1.6rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 30px 0;
  justify-content: space-between;
`;

export const ConfirmButton = styled(FormButton)`
  align-self: flex-start;
  font-weight: 700;
  color: ${props => props.theme.textBlue};
  padding: 7px 14px;
  border-color: ${props => props.theme.textBlue};
  margin: 20px 0 1px 0;
  display: inline-block;
  &:hover {
    background-color: ${props => props.theme.textBlue};
    color: ${props => props.theme.textLight};
  }

  &:first-of-type {
    margin-right: 15px;
  }
`;

export const CancelButton = styled(ConfirmButton)`
  border-color: ${props => props.theme.borderRed};
  color: ${props => props.theme.borderRed};

  &:hover {
    background-color: ${props => props.theme.borderRed};
  }
`;
