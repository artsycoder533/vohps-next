import styled from "styled-components";
import Link from "next/link";

export const Container = styled.nav`
  width: 100%;

  transform: ${({ openMenu }) =>
    openMenu ? "scale(1) rotate(360deg)" : "scale(0)"};

  transition: all 0.3s ease;
  position: absolute;
  top: 370.22px;
  z-index: 1; 
  box-shadow: 0px 15px 10px -15px;

  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    background: purple;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    z-index: 1;
  }

  a {
    text-decoration: none;
    color: white;
    display: block;
    padding: 1rem;
    letter-spacing: 1px;

    &:hover {
      background: white;
      color: purple;
    }
  }

  @media all and (min-width: 768px) {
    position: initial;
    transform: translate(0);

    ul {
      flex-direction: row;
      font-weight: 100;
    }
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  background: ${( props ) =>
    props.href === props.pathname ? "#cdf5fd" : "purple"};
  /* color: ${(props) => (props.href === props.pathname ? "purple" : "white")}; */

  &.active {
    background: #cdf5fd;
    color: purple;
  }
`;

export const SubLinks = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  height: 100%;
  display: ${({ openSub }) => (openSub ? "block" : "none")};
`;
