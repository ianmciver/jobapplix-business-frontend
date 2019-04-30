import styled from "styled-components";

import { textLight, textBlue, borderRed } from "../../../../constants/colors";

import { FormButton } from "../../../../styles/buttons";

export const Header = styled.h1`
  font-size: 1.8rem;
  color: ${textLight};
`;

export const Message = styled.p`
  color: ${textLight};
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
  color: ${textBlue};
  padding: 7px 14px;
  border-color: ${textBlue};
  margin: 20px 0 1px 0;
  display: inline-block;
  &:hover {
    background-color: ${textBlue};
    color: ${textLight};
  }

  &:first-of-type {
    margin-right: 15px;
  }
`;

export const CancelButton = styled(ConfirmButton)`
  border-color: ${borderRed};
  color: ${borderRed};

  &:hover {
    background-color: ${borderRed};
  }
`;
