import { Container, StyledLink } from "./style";
import Image from 'next/Image'

const ServiceCard = ({text, url, image}) => {
  return (
    <Container>
      <StyledLink href={url}>
        <a>
          <Image src={image} alt={text} />
          {text}
        </a>
      </StyledLink>
    </Container>
  );
};

export default ServiceCard;
