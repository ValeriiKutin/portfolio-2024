"use client";
import { Container } from "../components/container/Container";
import { useSelector } from "react-redux";
import { RootState } from "../lib/features/store/store";

export default function Home() {
  const isToggleValue = useSelector(
    (state: RootState) => state.buttons.isToggle
  );
  return (
    <Container>
      <main className="home">
        <div className="home-leftside">
          <img
            className={`main-img ${
              isToggleValue ? "box-shadow-dark" : "box-shadow-light"
            }`}
            src="../../../img/main-image.jpg"
            alt=""
          />
        </div>
        <div className="home-rightside">
          <div className="name-text">
            <p className="text-to-show">Ops...</p>
            <p className="text-to-show-good">Now good!</p>
            <h1
              // className={`btn ${isToggleValue ? "dark-theme" : "light-theme"}`}
              className="btn after:dark:bg-white before:dark:bg-white"
            >
              H , I'm <span className="name">Valerii</span>
              <span className="handmove">🤚</span>
            </h1>
            <h2 className="h2-animate">I'm Front-End Developer.</h2>
          </div>
          <ul className="lists-main">
            <li className="list-item">
              <span className="span-list1">🎵</span>fueled by good music
            </li>
            <li className="list-item">
              <span className="span-list2">🌎</span> based in the{" "}
              <span className="ukraine-color">Ukraine</span>
            </li>
            <li className="list-item">
              <span className="span-list3">📧</span>{" "}
              <a
                className="link-list dark:text-white"
                href="mailto:valerabulon@gmail.com"
              >
                valerabulon@gmail.com
              </a>
            </li>
          </ul>
          <div className="social">
            <a href="#" className="social-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="size-svg-facebook dark:text-white"
              >
                <path
                  className="fill-current"
                  fillRule="evenodd"
                  d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Zm4-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6v-7h-1a1 1 0 1 1 0-2h1V9.5A3.5 3.5 0 0 1 15.5 6h.6a1 1 0 1 1 0 2h-.6A1.5 1.5 0 0 0 14 9.5V11h2.1a1 1 0 1 1 0 2H14v7h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg
                viewBox="0 0 192 192"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="size-svg-insta dark:text-white"
              >
                <path
                  className="stroke-current"
                  strokeWidth="12"
                  d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="30"
                  className="stroke-current"
                  strokeWidth="12"
                />
                <circle cx="135" cy="57" r="9" className="fill-current" />
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="size-svg-github dark:text-white"
              >
                <title>{"github [#142]"}</title>
                <path
                  className="fill-current"
                  fillRule="evenodd"
                  d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"
                />
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="size-svg-linkedid dark:text-white"
              >
                <path
                  className="fill-current"
                  d="M6.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM11 19h1a1 1 0 0 0 1-1v-4.5c0-1.5 3-2.5 3-.5v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-6c0-2-1.5-3-3.5-3S13 10.5 13 10.5V10a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Z"
                />
                <path
                  className="fill-current"
                  fillRule="evenodd"
                  d="M20 1a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h16Zm0 2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </Container>
  );
}
