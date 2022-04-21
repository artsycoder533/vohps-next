import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 1rem;
  max-width: 600px;
  justify-content: center;
  text-align: center;
  color: #340431;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: left;
    gap: 1rem;
    padding: 1rem;
    background: #cdf5fd;
    box-shadow: -5px 31px 14px -4px rgba(0, 0, 0, 0.1);

    span {
      display: block;
      padding-left: 1rem;

      a {
        color: #340431;
      }
    }

    h3 {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    address {
      line-height: 1.5;
    }
  }
`;