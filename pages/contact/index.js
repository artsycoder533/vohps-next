import React from "react";
import { Center } from "../../styles/globalstyle";
import ContactForm from "../../components/Form/ContactForm";
import Map from "../../components/Map/Map";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import { Wrapper, Container } from "../../styles/contact_style";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

const Contact = () => {
  return (
    <Container>
      <Center>
        <Wrapper>
          <ContactForm title="Have a question? Contact Us Today!" />
          <ContactInfo />
        </Wrapper>
      </Center>
      <Map />
      <BackToTopButton />
    </Container>
  );
};

export default Contact;
