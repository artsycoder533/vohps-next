import Head from 'next/head'
import styled from 'styled-components';
import Hero from '../components/Hero/Hero';
import Mission from '../components/Mission/Mission';
import Quote from '../components/Quote/Quote';
import { quotes } from '../utility/data';
import Services from '../components/Services/Services';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';

export const Container = styled.div`
  border: 2px solid red;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Visions of Hope Psychological Services, LLC</title>
        <meta name="author" content="Natasha Johnson" />
        <meta name="keywords" content="Dr. Selisha Nelson-Smith PhD LCP, Visions of Hope Psychological Services, LLC, Mental Health, Counseling, Therapy Services, Private Practice" />
        <meta name="description" content="Visions of Hope Psychological Services, LLC is a Mental Health Private Practice located in Richmond, Virginia offering Individual, Couples and Group Therapy Services along with Psycholgical Evaluations.  We are owned and operated by Dr. Selisha Nelson-Smith PhD, LCP." />
        <meta
          property="og:image"
          content="https://visionsofhope-va.com/assets/images/desktop.png"
        />
        <meta
          name="og:image:alt"
          content="Visions of Home Psychological Services, LLC Homepage"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Visions of Hope Psycholgical Services, LLC | Home Page"
        />
        <meta
          property="og:description"
          content="Visions of Hope Psychological Services, LLC is a Mental Health Private Practice located in Richmond, Virginia offering Individual, Couples and Group Therapy Services along with Psycholgical Evaluations.  We are owned and operated by Dr. Selisha Nelson-Smith PhD, LCP."
        />
        <meta property="og:url" content="https://visionsofhope-va.com/" />
        <meta
          name="twitter:image"
          content="https://visionsofhope-va.com/public/images/desktop.png"
        />
        <meta
          name="twitter:image:alt"
          content="Visions of Home Psychological Services, LLC Homepage"
        />
        <link rel="icon" type="image" href="../public/images/logo.png"></link>
      </Head>

      <main>
        <Hero />
        <Mission />
        <Quote quote={quotes[0]} />
        <Services />
        <Quote quote={quotes[1]} />
        <BackToTopButton />
      </main>
    </div>
  );
}
