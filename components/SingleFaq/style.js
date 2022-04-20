import styled from "styled-components";

export const Container = styled.details`
  display: flex;
  max-width: 800px;
  width: 100%;
  line-height: 1.5;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 15px 10px -15px;

  div {
    padding: 1rem;

    @media all and (min-width: 768px) {
      padding-left: 3rem;
    }

    p {
      font-weight: 1.1rem;
      border-left: 3px solid purple;
      text-indent: 0rem;
      padding: 0 1rem;

      @media all and (min-width: 768px) {
        padding: 1rem 2rem;
      }
    }
  }

  summary {
    padding: 1rem 0;
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;

    @media all and (min-width: 768px) {
      padding: 2rem;
    }

    h3 {
      display: inline;
      font-size: 1.1rem;

      @media all and (min-width: 768px) {
        font-size: 1.3rem;
      }
    }
  }

  summary::before {
    content: "+";
    color: purple;
    margin-right: 2rem;
    font-size: 2rem;
    background: purple;
    color: white;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  &[open] summary::before {
    content: "X";
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    text-align: vertical;
    font-weight: 600;
  }
`;
