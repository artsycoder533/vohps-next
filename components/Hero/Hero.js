import { Center } from "../../styles/globalstyle";
import { ButtonContainer, Container } from "./style";
import { PrimaryLink, SecondaryLink } from "../../components/Button/style";
import Link from "next/link";

const Hero = () => {
  return (
    <Container>
      <Center>
        <article>
          <h1>
            Finding Clarity Through <em>Healing</em>
          </h1>
          <ButtonContainer>
            <Link href="/contact" passHref>
              <PrimaryLink>Schedule Appointment</PrimaryLink>
            </Link>
            <Link href="#mission" passHref>
              <SecondaryLink>Learn More</SecondaryLink>
            </Link>
          </ButtonContainer>
        </article>
      </Center>
    </Container>
  );
};

export default Hero;
