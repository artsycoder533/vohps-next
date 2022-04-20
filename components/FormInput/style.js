import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid transparent;

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