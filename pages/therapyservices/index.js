import Head from "next/head";
import Title from "../../components/Title/Title";
import { Center } from "../../styles/globalstyle";
import { serviceDescriptions } from "../../utility/data";
import ServiceTab from "../../components/ServiceTab/ServiceTab";
import { Descriptions } from "../../styles/therapy_style";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

const TherapyServices = () => {
  return (
    <div>
      <Head>
        <title>Visions of Hope Psychological Services, LLC | Therapy Services Page</title>
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
          content="Visions of Hope Psycholgical Services, LLC | Therapy Services Page"
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
      <section>
        <Title title="Therapy Services" />
        <Center>
          <Descriptions>
            {serviceDescriptions.map((service, index) => {
              return <ServiceTab key={index} service={service} />;
            })}
          </Descriptions>
        </Center>
        <BackToTopButton />
      </section>
    </div>
  );
};

export default TherapyServices;
