import styled from "styled-components";

import { TextInput } from "../../styles/forms";
import { borderGrey, borderRed } from "../../constants/colors";

export const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .no-match {
    line-height: 1.5rem;
    color: ${borderRed};
    margin: 10px 0;
  }
`;
export const WelcomeHeader = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
`;
export const BusinessLogo = styled.img`
  max-width: 75%;
  max-height: 150px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1.3rem;
  line-height: 1.8rem;
  margin-bottom: 15px;
`;

export const FormContainer = styled.div`
  width: 100%;
  padding: 10px;
`;

export const PasswordInput = styled(TextInput)`
  border-color: ${props => (props.match ? borderGrey : borderRed)};
  &:focus {
    border-color: ${props => (props.match ? borderGrey : borderRed)};
  }
`;
