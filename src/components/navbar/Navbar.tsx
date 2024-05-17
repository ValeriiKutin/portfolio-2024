"use client";
import Link from "next/link";
import "./navbar.css";
import { Container } from "../container/Container";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/features/store/store";
import DarkModeSwith from "../dark-mode-switch/DarkModeSwith";
// import { toggleTheme } from "@/lib/features/Buttons";

export const NavBar = () => {
  // const isToggleValue = useSelector(
  //   (state: RootState) => state.buttons.isToggle
  // );

  // const dispatch = useDispatch<AppDispatch>();

  // const handleToggleTheme = () => {
  //   dispatch(toggleTheme());
  // };

  return (
    <Container>
      <div className="NavBar">
        <Link
          // style={{ color: isToggleValue ? "#fff" : "#000" }}
          className="link-navbar"
          href={"/"}
        >
          Home
        </Link>
        <Link
          // style={{ color: isToggleValue ? "#fff" : "#000" }}
          className="link-navbar"
          href={"/about"}
        >
          About me
        </Link>
        <Link
          // style={{ color: isToggleValue ? "#fff" : "#000" }}
          className="link-navbar"
          href={"/portfolio"}
        >
          Portfolio
        </Link>
        <DarkModeSwith />
        {/*      <button className="theame">

          {true ? "🌕" : "🌑"}
        </button> */}
      </div>
    </Container>
  );
};
