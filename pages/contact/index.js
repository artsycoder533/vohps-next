import Head from "next/head";
import { Center } from "../../styles/globalstyle";
import ContactForm from "../../components/Form/ContactForm";
import Map from "../../components/Map/Map";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import { Wrapper, Container } from "../../styles/contact_style";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Visions of Hope Psychological Services, LLC | Contact Page</title>
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
          content="Visions of Hope Psycholgical Services, LLC | Contact Page"
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
        <Center>
          <Wrapper>
            <ContactForm title="Have a question? Contact Us Today!" />
            <ContactInfo />
          </Wrapper>
        </Center>
        <Map />
        <BackToTopButton />
      </Container>
    </div>
  );
};

export default Contact;
