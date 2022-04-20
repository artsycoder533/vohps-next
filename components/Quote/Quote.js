import React from 'react'
import { Container } from './style';
import { Center } from "../../styles/globalstyle";

const Quote = ({quote}) => {
  const { text, author } = quote;

  return (
    <Container>
      <Center>
        <div>
          <span>&ldquo;</span>
          <blockquote>&quot;{text}&quot;</blockquote>
          <p>{author}</p>
        </div>
      </Center>
    </Container>
  );
}

export default Quote