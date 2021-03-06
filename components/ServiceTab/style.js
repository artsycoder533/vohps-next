import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  gap: 4rem;
  flex-direction: column;
  align-items: center;

  img {
    /* border-radius: 1rem; */
    max-width: 100%;
  }

  @media all and (min-width: 992px) {
    flex-direction: row;
    
    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }

    justify-content: center;
    padding: 2rem;
    box-shadow: -5px 7px 14px -4px rgba(0, 0, 0, 0.1);

    div {
      flex: 1;
    }
  }
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  line-height: 1.5;
  gap: 2rem;

  h3 {
    font-size: 2rem; 
    text-align: center;
  }

  p:nth-of-type(2) {

    span {
      color: purple;
      font-weight: bold;
      font-size: 1.2rem;
      letter-spacing: 1px;
    }
  }

  @media all and (min-width: 992px) {
    padding: 0 3rem;
    gap: 3rem;
  }
`;

