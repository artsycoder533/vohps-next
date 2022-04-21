import { useState } from "react";
import { Container, StyledImage } from "./style";
import Navbar from "../Navbar/Navbar";
import Hamburger from "../Hamburger/Hamburger";
import logo from "../../public/images/logo.png";


const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container>
      <p>**All sessions are currently being held by online teletherapy. **</p>
      <StyledImage
        src={logo}
        alt="Visions of Hope logo"
        width={200}
        height={246}
      />
      <Hamburger openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </Container>
  );
};

export default Header;
