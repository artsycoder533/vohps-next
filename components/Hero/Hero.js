import { Center } from "../../styles/globalstyle";
import { ButtonContainer, Container } from "./style";
import { PrimaryLink, SecondaryLink, StyledA } from "../../Components/Button/style";
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
            
            <SecondaryLink href="#mission">Learn More</SecondaryLink>
          </ButtonContainer>
        </article>
      </Center>
    </Container>
  );
};

export default Hero;
