import React from "react";
import { Center } from "../../styles/globalstyle";
import ContactForm from "../../Components/Form/ContactForm";
import Map from "../../Components/Map/Map";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import { Wrapper, Container } from "../../styles/contact_style";
import BackToTopButton from "../../Components/BackToTopButton/BackToTopButton";

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
