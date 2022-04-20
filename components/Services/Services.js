import {
  Container,
  StyledPrimaryLink,
  ServicesWrapper,
  Wrapper,
} from "./style";
import { Center } from "../../styles/globalstyle";
import ServiceCard from "../ServiceCard/ServiceCard";
import { services } from "../../utility/data";

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
          <StyledPrimaryLink to="/contact">
            Schedule An appointment
          </StyledPrimaryLink>
        </Wrapper>
      </Center>
    </Container>
  );
};

export default Services;
