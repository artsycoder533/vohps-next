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
        <link rel="icon" type="image" href="../public/images/logo.png"></link>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet" />
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
