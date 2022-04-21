import BackToTopButton from "../../components/BackToTopButton/BackToTopButton"
import { Center } from "../../styles/globalstyle";
import headshot from "../../public/images/headshot.png";
import { AboutSection, BioStats, BioText, Container } from "../../styles/index_style";
import { PrimaryLink, StyledRegLink } from "../../components/Button/style";
import Title from "../../components/Title/Title";
import Link from "next/link";
import Image from 'next/image'
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <Container>
      <Title title="About Us" />
      <Center>
        <AboutSection>
          <BioStats>
            <Image src={headshot.src} alt="headshot of Dr Nelson-Smith" width={233} height={233}/>
            <h3>Dr. Selisha Nelson-Smith PhD, LCP</h3>
            <Link href="/contact" passHref>
              <PrimaryLink>Schedule Appointment</PrimaryLink>
            </Link>
            <StyledRegLink
              href="https://www.psychologytoday.com/us/therapists/dr-selisha-nelson-north-chesterfield-va/179620"
              target="_blank"
              rel="noopener noreferrer">
              Psychology Today <BsArrowRight />
            </StyledRegLink>
          </BioStats>
          <BioText>
            <p>
              I am a Licensed Clinical Psychologist with a passion for helping
              others on their journeys to healing, self-discovery, and growth. I
              have experience working with youth, adolescents and adults
              providing individual, family, and couples therapy. Psychological
              assessments are also provided. I have obtained advanced training
              in trauma treatment, which includes various modalities such as
              art/play therapy, Somatic Experiencing, and EMDR. I have over 14
              years of experience working in community mental health,
              alternative school settings, residential treatment, outpatient
              settings, and correctional facilities.
            </p>
            <p>
              I have clinical experience in the following modalities: Trauma
              treatment, Somatic Experiencing, Cognitive-behavioral therapy,
              Art/Play therapy, Dialectical Behavioral therapy (DBT),
              Attachment, Couples/Marriage therapy, Eye Movement Desensitization
              Reprocessing (EMDR), and Intensive evidence-based treatments for a
              myriad of challenging mental health disorders.
            </p>
            <p>
              I graduated in 2016 from Walden University with a Doctorate in
              Clinical Psychology. I have a warm and gentle, yet, no nonsense
              approach to therapy. I am passionate about helping others and
              incorporate a fun, experiential, and creative approach to therapy.
            </p>
          </BioText>
        </AboutSection>
      </Center>
      <BackToTopButton />
    </Container>
  );
};

export default About;