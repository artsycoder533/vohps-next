
import Title from "../../Components/Title/Title";
import { Center } from "../../styles/globalstyle";
import { serviceDescriptions } from "../../utility/data";
import ServiceTab from "../../Components/ServiceTab/ServiceTab";
import { Descriptions } from "../../styles/therapy_style";
import BackToTopButton from "../../Components/BackToTopButton/BackToTopButton";

const TherapyServices = () => {
  return (
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
  );
};

export default TherapyServices;
