import {
  Container,
  StyledPrimaryLink,
  ServicesWrapper,
  Wrapper,
} from "./style";
import { Center } from "../../styles/globalstyle";
import ServiceCard from "../ServiceCard/ServiceCard";
import { services } from "../../utility/data";
import Link from "next/link";

const Services = () => {
  return (
    <Container>
      <Center>
        <Wrapper>
          <ServicesWrapper>
            {services.map((service, index) => {
              const { text, url, image } = service;
              return (
                <ServiceCard key={index} text={text} url={url} image={image} />
              );
            })}
          </ServicesWrapper>
          <Link href="/contact" passHref>
            <StyledPrimaryLink>Schedule An appointment</StyledPrimaryLink>
          </Link>
        </Wrapper>
      </Center>
    </Container>
  );
};

export default Services;
