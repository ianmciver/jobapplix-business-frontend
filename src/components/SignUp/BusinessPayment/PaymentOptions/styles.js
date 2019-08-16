import styled, { css } from "styled-components";
import { media } from "../../../../styles/mediaQueries";

export const OptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  ${media.desktop`
    flex-direction: row;
  `}
`;

export const TopColor = styled.div`
  position: absolute;
  top: -30px;
  left: -5px;
  width: 105%;
  height: 130px;
  transform: rotate(170deg) skew(-10deg);
  background-color: ${props => props.theme.backgroundGreen};
  background-image: ${props =>
    css`linear-gradient(to right, ${props.theme.backgroundBlue}, ${
      props.theme.backgroundGreen
    })`};
  z-index: 0;
`;

export const OptionButtonContainer = styled.div`
  padding: 0;
  width: 250px;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin: 50px 0;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 3px solid rgba(0, 0, 0, 0.2);
  &:hover {
    ${TopColor} {
      background-image: none;
    }
  }

  border-color: ${props =>
    props.selected ? props.theme.backgroundBlue : `transparent`};

  ${TopColor} {
    ${props =>
      props.selected &&
      css`
        background-image: none;
        background-color: ${props.theme.backgroundBlue};
      `};
  }
`;

export const TitleContainer = styled.div`
  margin: 44px 0;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 0 30px;
  background-color: transparent;
  position: relative;
`;

export const Title = styled.h3`
  font-size: 3rem;
  color: ${props => props.theme.backgroundWhite};
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;
  position: relative;
  margin-top: 60px;
`;

export const Price = styled.h3`
  font-size: 2.4rem;
`;

export const DetailsContainer = styled.ul`
  margin: 20px 30px 0;
`;

export const Detail = styled.li`
  margin: 10px 0;
`;

export const DetailMarker = styled.div`
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${props => props.theme.backgroundBlue};
  margin-right: 5px;
`;

export const DetailText = styled.span`
  line-height: 2rem;
`;

export const RadioButtonContainer = styled.div`
  width: 100%;
  padding: 10px 30px 30px;
  display: flex;
  justify-content: flex-end;
`;

export const RadioButtonHidden = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

export const RadioButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.selected ? props.theme.backgroundBlue : `rgba(0, 0, 0, 0.2)`};
  display: flex;
  justify-content: center;
  align-items: center;
`;
