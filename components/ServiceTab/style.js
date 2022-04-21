import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  gap: 4rem;
  flex-direction: column;
  align-items: center;
  box-shadow: -5px 7px 14px -4px rgba(0, 0, 0, 0.1);

  img {
    border-radius: 1rem;
    max-width: 100%;
  }

  @media all and (min-width: 992px) {
    flex-direction: row;
    justify-content: center;
    padding: 2rem;

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
  }

  p:nth-of-type(2) {
    /* background: #cdf5fd; */
  

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

