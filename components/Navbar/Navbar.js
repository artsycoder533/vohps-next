import { Container, StyledLink } from "./style";
import { navLinks } from "../../utility/data";
import { useRouter } from 'next/router';
import Link from "next/link";

const Navbar = ({ openMenu, setOpenMenu }) => {
  const router = useRouter();

  return (
    <Container openMenu={openMenu}>
      <ul>
        {navLinks.map((link, index) => {
          const { url, text } = link;
          return (
            <li key={index} onClick={()=>setOpenMenu(!openMenu)}>
              <Link href={url} passHref>
                <StyledLink path={router.pathname} href={url}>{text}</StyledLink>
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Navbar;
