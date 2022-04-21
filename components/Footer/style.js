import styled from "styled-components";
import Link from 'next/link';
import Image from "next/image";

export const StyledFooter = styled.footer`
  background: black;
  color: #eee;
  font-size: 1.1rem;
`;

export const LinkWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media all and (min-width: 1130px) {
    flex-direction: row;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

export const Container = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr;
  flex: 1;

  li {
    display: flex;
    align-items: center;
  }

  a {
    display: block;
    padding: 0.5rem 0;
    display: flex;
    gap: 0.25rem;
    align-items: center;
    text-decoration: none;
    color: #eee;

    .active {
      color: #ffd303;
    }
  }

  a:visited {
    color: white;
  }

  a:hover {
    color: #fed203;
    text-decoration: underline;
  }

  @media all and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 0.5rem 0;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  text-decoration: none;
  color: #eee;

  .active {
    color: #ffd303;
  }

  &:hover {
    color: #fed203;
    text-decoration: underline;
  }
`;

export const StyledRegLink = styled.a`
  display: block;
  padding: 0.5rem;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  text-decoration: none;
  color: #ffd303;

  .active {
    color: #ffd303;
  }

  &:hover {
    text-decoration: underline;
    color: #cef5fe;
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
`;

export const ContactDiv = styled.div`
  display: flex;
  gap: 1rem;
  line-height: 1.5;
  max-width: 400px;

  address {
    margin-top: 2rem;
    text-align: center;
    max-width: 400px;

    @media all and (min-width: 768px) {
      margin-top: 0;
    }
  }

  @media all and (min-width: 768px) {
    margin-top: 0;
  }
`;

export const StyledAttrition = styled.p`
  text-align: center;
  font-size: 0.9rem;
  
  a {
    color: #eee;
  }

  a:hover {
    color: #fed203;
    text-decoration: underline;
  }
`;

export const StyledImage = styled(Image)`
  width: 200px;
  height: 246px;
`;

export const ImgContainer = styled.div`
  width: 200px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;