import { useState } from "react";
import { Container, StyledImage } from "./style";
import Navbar from "../Navbar/Navbar";
import Hamburger from "../Hamburger/Hamburger";
import Image from "next/image";


const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container>
      <p>**All sessions are currently being held by online teletherapy. **</p>
      <Image
        src="/../public/images/logo.png"
              alt="Visions of Hope logo"
              width="200px"
              height="246px"
      />
      <Hamburger openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </Container>
  );
};

export default Header;
