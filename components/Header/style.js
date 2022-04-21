import styled from "styled-components";
import Image from "next/image";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-shadow: 0px 15px 10px -15px;

  p {
    padding: 1rem;
    background: purple;
    width: 100%;
    text-align: center;
    color: white;
    margin: 0;
    margin-bottom: 1rem;
  }

  img {
    width: 200px;
  }
`;

export const StyledImage = styled(Image)`
  width: 200px;
  height: 246px;
`;
