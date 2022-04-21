import styled from "styled-components";
import Link  from "next/link";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 300px;
  text-align: center;
  box-shadow: -5px 7px 14px -4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: -5px 31px 14px -4px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
    transition: all 0.3s ease-in-out;
  }

  img {
    max-width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1.2rem;
  color: #340431;
`;

export const CardLink = styled.a`
  border: 1px solid red;
  padding: 1rem;
  background: #005fda;
`;

export const StyledText = styled.p`
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #340431;
`;
