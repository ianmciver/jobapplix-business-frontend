import styled from "styled-components";

import {
  borderGrey,
  backgroundBlue,
  textLight,
  textBlue,
  textDark
} from "../../../../constants/colors";

import { TextInput } from "../../../../styles/forms";

export const SubType = styled.div`
  width: 100%;
  border: 2px solid ${borderGrey};
  background-color: ${backgroundBlue};
  color: ${textLight};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 15px 0;
`;

export const FormContainer = styled.div`
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  .sub-details {
    font-size: 1.4rem;
    text-transform: capitalize;
    margin: 10px 0 20px;
  }
`;

export const HalfInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HalfWidthInput = styled(TextInput)`
  width: 45%;
`;

export const FinePrintContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const FinePrint = styled.a`
  font-size: 1.1rem;
  color: ${textBlue};
  text-decoration: underline;
  text-transform: uppercase;
  cursor: pointer;
`;

export const FinePrintSeparator = styled.p`
  color: ${textBlue};
  font-size: 1.1rem;
  padding: 0 5px;
`;

export const Total = styled.h3`
  font-size: 1.9rem;
  color: ${textDark};
  text-transform: uppercase;
  margin: 20px 0 5px;
`;

export const SubTotal = styled.h4`
  font-size: 1.3rem;
  color: ${textDark};
  text-transform: uppercase;
  margin-bottom: 20px;
`;
