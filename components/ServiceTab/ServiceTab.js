import { Container, StyledDescription } from "./style";
import { PrimaryLink } from "../Button/style";
import Link from 'next/link';
import Image from "next/image";

const ServiceTab = ({ service}) => {
    const { title, description, description1, description2, btn, img, url } = service;

  if (title === "Group Therapy" || title === "Psychological Evaluations") {
    return (
      <Container>
        <StyledDescription>
          <h3>{title}</h3>
          <p>{description1}</p>
          <p>
            <span>*** </span>
            {description2}
            <span> ***</span>
          </p>
          <Link href={url} passHref>
            <PrimaryLink>{btn}</PrimaryLink>
          </Link>
        </StyledDescription>
        <div>
          <Image src={img.src} alt={title} width={588} height={392} />
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
          <Image src={img.src} alt={title} width={588} height={392} />
        </div>
      </Container>
    );
  }
};

export default ServiceTab;
