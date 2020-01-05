import styled from "styled-components";

export const SubType = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: ${props => props.theme.backgroundBlue};
  color: ${props => props.theme.textLight};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 15px 40px;
  cursor: pointer;
`;

export const FormContainer = styled.div`
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  .sub-details {
    font-size: 1.4rem;
    text-transform: capitalize;
    margin: 10px 0 20px;
  }
`;

export const FinePrintContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const FinePrint = styled.a`
  font-size: 1.1rem;
  color: ${props => props.theme.textBlue};
  text-decoration: underline;
  text-transform: uppercase;
  cursor: pointer;
`;

export const FinePrintSeparator = styled.p`
  color: ${props => props.theme.textBlue};
  font-size: 1.1rem;
  padding: 0 5px;
`;

export const Total = styled.h3`
  font-size: 1.9rem;
  color: ${props => props.theme.textDark};
  text-transform: uppercase;
  margin: 20px 0 10px;
`;

export const SubTotal = styled.h4`
  font-size: 1.3rem;
  color: ${props => props.theme.textDark};
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const InfoBody = styled.span`
  font-size: 1.6rem;
  line-height: 3rem;
`;

export const CouponAccepted = styled.span`
  font-size: 1.7rem;
  margin: 10px 0;
  color: ${props => props.theme.borderGreen};
`;
