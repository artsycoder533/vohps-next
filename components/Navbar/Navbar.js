import { Container, StyledLink } from "./style";
import { navLinks } from "../../utility/data";

const Navbar = ({ openMenu, setOpenMenu }) => {
  return (
    <Container openMenu={openMenu}>
      <ul>
        {navLinks.map((link, index) => {
          const { url, text } = link;
          return (
            <li key={index}>
              <StyledLink href={url} onClick={() => setOpenMenu(!openMenu)}>
                <a>{text}</a>
              </StyledLink>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Navbar;
