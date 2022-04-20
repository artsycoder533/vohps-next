import React from 'react';
import { PrimaryLink } from "../../Components/Button/style";
import { Container } from './style';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <Container>
      <Link href="/contact" passHref>
        <PrimaryLink>Schedule Appointment</PrimaryLink>
      </Link>
    </Container>
  );
}

export default CallToAction