import Link from "next/link";
import React, { useState } from "react";
import Image from "../../../node_modules/next/image";
import { FiMenu, FiPhone } from "../../../node_modules/react-icons/fi";
import { Nav, Nav2, Container, Logo, MenuContent, MenuLabel } from "./styled";

export default function Header() {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };
  return (
    <>
      <Container show={show}>
        <MenuContent>
          <MenuLabel onClick={toggleMenu}>
            <FiMenu />
          </MenuLabel>
        </MenuContent>
        <Logo>
          <Link href="/">
            <a>
              <Image src="/logo.jpg" width="80px" height="80px" alt="Logo" />
            </a>
          </Link>
        </Logo>
        <Nav show={show}>
          <a href="#about" onClick={toggleMenu}>
            Sobre mim
          </a>
          <a href="#works" onClick={toggleMenu}>
            Trabalhos
          </a>
          <a href="#personalProjects" onClick={toggleMenu}>
            Projetos pessoais
          </a>
          <a href="#universityProjects" onClick={toggleMenu}>
            Projetos da faculdade
          </a>
        </Nav>
        <Nav2>
          <a
            href="https://api.whatsapp.com/send?phone=5511941901415"
            target="blank"
          >
            <FiPhone />
          </a>
        </Nav2>
      </Container>
    </>
  );
}