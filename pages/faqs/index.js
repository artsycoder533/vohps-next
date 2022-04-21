import Head from "next/head";
import Title from "../../components/Title/Title";
import { Center } from "../../styles/globalstyle";
import AllFaqs from "../../components/AllFaqs/AllFaqs";
import { Container, Wrapper, StyledArticle } from "../../styles/faq_style";
import { goodFaith, noSurprises } from "../../utility/data";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import CallToAction from "../../components/CTA/CallToAction";

const Faqs = () => {
  return (
    <div>
      <Head>
        <title>Visions of Hope Psychological Services, LLC | FAQs Page</title>
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
          content="Visions of Hope Psycholgical Services, LLC | FAQs Page"
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
            <Title title="FAQs" />
            <AllFaqs />
            <CallToAction />
            <Title title="No Surprises Act" id="nosurprises" />
            {noSurprises.map((text, index) => {
              return <p key={index}>{text}</p>;
            })}
            <Title title="Good Faith Estimate" id="goodfaith" />
            {goodFaith.map((item, index) => {
              const { heading, p1, p2, list, footer, linkText, link } = item;
              return (
                <StyledArticle key={index}>
                  <h4>{heading}</h4>
                  <p>{p1}</p>
                  <ul>
                    {list.map((listItem, index) => {
                      return <li key={index}>{listItem}</li>;
                    })}
                  </ul>
                  <p>{p2}</p>
                  <p>
                    {footer}{" "}
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {linkText}
                    </a>
                  </p>
                </StyledArticle>
              );
            })}
          </Wrapper>
        </Center>

        <BackToTopButton />
      </Container>
    </div>
  );
};

export default Faqs;
