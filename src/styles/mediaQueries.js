import styled, { css } from "styled-components";
const sizes = {
  desktop: 1000
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export const MobileOff = styled.div`
  display: none;
  ${media.desktop`
    display: initial;
  `}
`;

export const DesktopOff = styled.div`
  display: initial;
  ${media.desktop`
    display: none;
  `}
`;
