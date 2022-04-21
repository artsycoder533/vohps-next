import Title from "../../components/Title/Title";
import { Center } from "../../styles/globalstyle";
import AllFaqs from "../../components/AllFaqs/AllFaqs";
import { Container, Wrapper, StyledArticle } from "../../styles/faq_style";
import { goodFaith, noSurprises } from "../../utility/data";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import CallToAction from "../../components/CTA/CallToAction";

const Faqs = () => {
  return (
    <>
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
            <Title title="Good Faith Estimate" id="goodfaith"/>
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
    </>
  );
};

export default Faqs;
