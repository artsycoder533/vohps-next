import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  textarea {
    padding: 0.5rem;
    font-size: 1rem;
    height: 10rem;
    border: 1px solid transparent;
    line-height: 1.5;

    &:hover,
    &:focus {
      background: #ffefff;
    }
  }

  label {
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 0.2rem;
  }
`;