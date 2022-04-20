import { Container, StyledLink, CardLink, StyledText } from "./style";
import Image from 'next/Image'

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
