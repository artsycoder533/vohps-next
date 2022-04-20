import { faqs } from '../../utility/data';
import SingleFaq from '../SingleFaq/SingleFaq';
import { Container } from './style';

const AllFaqs = () => {
  return (
      <Container>
          {faqs.map((faq, index) => {
              return <SingleFaq key={index} {...faq}/>
          })}
    </Container>
  )
}

export default AllFaqs