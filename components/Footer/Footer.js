import { footerLinks, socialLinks, showDate } from "../../utility/data";
import {
  Container,
  Wrapper,
  LinkWrapper,
  StyledLink,
  SocialLinks,
  StyledFooter,
  ContactDiv,
  StyledAttrition,
  StyledRegLink,
  ImgContainer,
} from "./style";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import { Center } from "../../styles/globalstyle";

const Footer = () => {
  return (
    <StyledFooter>
      <Center>
        <Wrapper>
          <LinkWrapper>
            <ImgContainer>
              <Image
                src={logo}
                alt="Vision of Hope Psychological Services LLC logo"
                width={200}
                height={240}
              />
            </ImgContainer>
            <Container>
              {footerLinks.map((link, index) => {
                const { url, text } = link;
                if (text === "Psychology Today") {
                  return (
                    <li key={index}>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {text}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={index}>
                    <StyledLink href={url}>
                      <a>{text}</a>
                    </StyledLink>
                  </li>
                );
              })}
            </Container>
            <ContactDiv>
              <address>
                <p>Visions of Hope Psychological Services, LLC</p>
                <p>555 Southlake Blvd</p>
                <p>Unit C2</p>
                <p>Richmond, VA 23236</p>
              </address>
              <SocialLinks>
                {socialLinks.map((link, index) => {
                  const { url, icon, text } = link;
                  return (
                    <li key={index}>
                      <StyledRegLink
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer">
                        {icon}
                        {text}
                      </StyledRegLink>
                    </li>
                  );
                })}
              </SocialLinks>
            </ContactDiv>
          </LinkWrapper>
          <StyledAttrition>
            Copyright {showDate()} &copy; Visions of Hope Psychological
            Services, LLC | All Rights Reserved | Website made by{" "}
            <a
              href="https://natashajohnson.dev/"
              target="_blank"
              rel="noopener noreferrer">
              {" "}
              Natasha Johnson
            </a>
          </StyledAttrition>
        </Wrapper>
      </Center>
    </StyledFooter>
  );
};

export default Footer;
