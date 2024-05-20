"use client";
import Link from "next/link";
import "./navbar.css";
import { Container } from "../container/Container";
import DarkModeSwith from "../dark-mode-switch/DarkModeSwith";

export const NavBar = () => {
  return (
    <Container>
      <div className="NavBar">
        <Link className="link-navbar" href={"/"}>
          home
        </Link>
        <Link className="link-navbar" href={"/about"}>
          about me
        </Link>
        <Link className="link-navbar" href={"/portfolio"}>
          portfolio
        </Link>
        <DarkModeSwith />
        {/*🌕🌑*/}
      </div>
    </Container>
  );
};
