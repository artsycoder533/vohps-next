import Head from "next/head";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import { Center } from "../../styles/globalstyle";
import headshot from "../../public/images/headshot.png";
import {
  AboutSection,
  BioStats,
  BioText,
  Container,
} from "../../styles/about_style";
import { PrimaryLink, StyledRegLink } from "../../components/Button/style";
import Title from "../../components/Title/Title";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <Head>
        <title>Visions of Hope Psychological Services, LLC | About Us Page</title>
        <meta name="author" content="Natasha Johnson" />
        <meta
          name="keywords"
          content="Dr. Selisha Nelson-Smith PhD LCP, Visions of Hope Psychological Services, LLC, Mental Health, Counseling, Therapy Services, Private Practice"
        />
        <meta
          name="description"
          content="Visions of Hope Psychological Services, LLC is a Mental Health Private Practice located in Richmond, Virginia offering Individual, Couples and Group Therapy Services along with Psycholgical Evaluations.  We are owned and operated by Dr. Selisha Nelson-Smith PhD, LCP."
        />
        <meta
          property="og:image"
          content="https://vohps-next.vercel.app/images/desktop.png"
        />
        <meta
          name="og:image:alt"
          content="Visions of Home Psychological Services, LLC Homepage"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Visions of Hope Psycholgical Services, LLC | About Us"
        />
        <meta
          property="og:description"
          content="Visions of Hope Psychological Services, LLC is a Mental Health Private Practice located in Richmond, Virginia offering Individual, Couples and Group Therapy Services along with Psycholgical Evaluations.  We are owned and operated by Dr. Selisha Nelson-Smith PhD, LCP."
        />
        <meta property="og:url" content="https://visionsofhope-va.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://vohps-next.vercel.app/images/desktop.png"
        />
        <meta
          name="twitter:image:alt"
          content="Visions of Home Psychological Services, LLC Homepage"
        />
        <link rel="icon" type="image" href="/images/logo.png"></link>
      </Head>
      <Container>
        <Title title="About Us" />
        <Center>
          <AboutSection>
            <BioStats>
              <Image
                src={headshot.src}
                alt="headshot of Dr Nelson-Smith"
                width={233}
                height={233}
              />
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
                others on their journeys to healing, self-discovery, and growth.
                I have experience working with youth, adolescents and adults
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
                Attachment, Couples/Marriage therapy, Eye Movement
                Desensitization Reprocessing (EMDR), and Intensive
                evidence-based treatments for a myriad of challenging mental
                health disorders.
              </p>
              <p>
                I graduated in 2016 from Walden University with a Doctorate in
                Clinical Psychology. I have a warm and gentle, yet, no nonsense
                approach to therapy. I am passionate about helping others and
                incorporate a fun, experiential, and creative approach to
                therapy.
              </p>
            </BioText>
          </AboutSection>
        </Center>
        <BackToTopButton />
      </Container>
    </div>
  );
};

export default About;
