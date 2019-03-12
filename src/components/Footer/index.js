import React from "react";

import {
  FooterContainer,
  FooterLogo,
  FooterSeparator,
  Copywrite,
  FooterNav,
  FooterNavItem,
  SocialMediaGroup,
  SocialMediaIcon
} from "./styles";

import jobApplixLogo from "../../assets/LogoEqualLight350.png";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLogo
        src={jobApplixLogo}
        alt="Job Applix logo. Click to navigate home."
      />
      <FooterNav>
        <FooterNavItem href="/">HOME</FooterNavItem>
        <FooterNavItem href="/how-it-works">HOW IT WORKS</FooterNavItem>
        <FooterNavItem href="/pricing">PRICING</FooterNavItem>
        <FooterNavItem href="/about">WHO WE ARE</FooterNavItem>
        <FooterNavItem href="https://app.jobapplix.com/signup">
          SIGN UP
        </FooterNavItem>
        <FooterNavItem href="https://app.jobapplix.com/login">
          SIGN IN
        </FooterNavItem>
        <FooterNavItem href="/contact">CONTACT</FooterNavItem>
      </FooterNav>
      <FooterSeparator />
      <SocialMediaGroup>
        <a href="https://www.instagram.com/jobapplix/" target="_blank_">
          <SocialMediaIcon>
            <img src={instagram} alt="Instagram Logo" />
          </SocialMediaIcon>
        </a>
        <a href="https://www.facebook.com/jobapplix/" target="_blank_">
          <SocialMediaIcon>
            <img src={facebook} alt="Facebook Logo" />
          </SocialMediaIcon>
        </a>
        <a href="https://twitter.com/JobApplix" target="_blank_">
          <SocialMediaIcon>
            <img src={twitter} alt="Twitter Logo" className="twitter" />
          </SocialMediaIcon>
        </a>
      </SocialMediaGroup>
      <Copywrite>
        <span>© JobApplix Inc. 2019</span>
      </Copywrite>
    </FooterContainer>
  );
}
