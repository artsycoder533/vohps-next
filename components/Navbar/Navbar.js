import { Container, StyledLink } from "./style";
import { navLinks } from "../../utility/data";
import { useRouter } from 'next/router';
import Link from "next/link";
import { useState } from "react";

const Navbar = ({ openMenu, setOpenMenu }) => {
  const router = useRouter();
  const [path, setPath] = useState(router.pathname);
  console.log(path);

  const setActiveLink = () => {
    setPath(router.pathname);
    setOpenMenu(!openMenu)
  }

  return (
    <Container openMenu={openMenu}>
      <ul>
        {navLinks.map((link, index) => {
          const { url, text } = link;
          return (
            <li key={index} onClick={setActiveLink}>
              <Link href={url} passHref>
                <StyledLink path={path}>{text}</StyledLink>
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Navbar;
