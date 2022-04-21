import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
      
    }

    /* width */
    ::-webkit-scrollbar {
    width: 15px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #350533;
    border: 1px solid purple;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #FCD300;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    border: 1px solid purple;
    }
`;

export const Center = styled.div`
  max-width: 1400px;
  width: 90vw;
  margin: 0 auto;
`;
