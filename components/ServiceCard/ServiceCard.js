import { Container, StyledLink, StyledText } from "./style";
import Image from 'next/image'

const ServiceCard = ({text, url, image}) => {
  return (
    <Container>
      <StyledLink href={url}>
        <a>
          <Image src={image} alt={text} />
          <StyledText>{text}</StyledText>
        </a>
      </StyledLink>
    </Container>
  );
};

export default ServiceCard;
