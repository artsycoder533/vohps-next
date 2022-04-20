import { Container, StyledDescription } from "./style";
import { PrimaryLink } from "../Button/style";
import Link from 'next/link';

const ServiceTab = ({ service}) => {
    const { title, description, description1, description2, btn, img, url } = service;

  if (title === "Group Therapy" || title === "Psychological Evaluations") {
    return (
      <Container>
        <StyledDescription>
          <h3>{title}</h3>
          <p>{description1}</p>
          <p>{description2}</p>
          <Link href={url} passHref>
            <PrimaryLink>{btn}</PrimaryLink>
          </Link>
        </StyledDescription>
        <div>
          <img src={img.src} alt={title} width="100%" height="100%" />
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <StyledDescription>
          <h3>{title}</h3>
          <p>{description}</p>
          <Link href={url} passHref>
            <PrimaryLink>{btn}</PrimaryLink>
          </Link>
        </StyledDescription>
        <div>
          <img src={img.src} alt={title} />
        </div>
      </Container>
    );
  }
};

export default ServiceTab;
