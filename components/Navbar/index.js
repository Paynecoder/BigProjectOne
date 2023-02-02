import styles from "@/components/Navbar/Navbar.module.css";
import bear from "@/public/Navbar/BurrFavi.svg";
import homeico from "@/public/Navbar/home.svg";
import quizico from "@/public/Navbar/quiz.svg";
import tutico from "@/public/Navbar/tut.svg";
import visitico from "@/public/Navbar/visit.svg";
import aboutico from "@/public/Navbar/about.svg";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  /** Keeps track of menu open state */
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.navwrap}>
        <div>
          <Image src={bear} alt="Brrilliant Logo Bear" />
        </div>
        <div>
          <h1 className={styles.nav__title}>
            Brr<span>illiant</span>
          </h1>
        </div>
        <div
          className={`nav__menuwrap ${menuOpen ? "open" : ""}`}
          /** Onclick flip menuOpen state */
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <aside className={`side-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Image src={homeico} />
            <span>Home</span>
          </li>
          <li>
            <Image src={quizico} />
            <span>Quiz</span>
          </li>
          <li>
            <Image src={tutico} />
            <span>Tutorial</span>
          </li>
          <li>
            <Image src={visitico} />
            <span>Visit Burr</span>
          </li>
          <li>
            <Image src={aboutico} />
            <span>About</span>
          </li>
        </ul>
        <Image src={bear} className={styles.menu__bear} />
      </aside>
      <style jsx>
        {`
          .side-menu {
            position: fixed;
            top: 10%;
            right: -101%;
            width: 50%;
            height: 100%;
            background: var(--primary-white);
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
            transition: right 0.25s ease-in-out;
            padding: 2em;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 25px 0 0 25px;
          }

          .side-menu.open {
            right: 0;
          }

          .side-menu > ul {
            display: flex;
            gap: 5em;
            flex-direction: column;
            list-style-type: none;
          }

          .side-menu > ul > li {
            display: flex;
            align-items: center;
            gap: 1em;
            font-family: "Nunito";
          }

          .side-menu > ul > li:hover {
            cursor: pointer;
          }

          .side-menu > ul > li > span {
            font-size: 1.75em;
            font-weight: 900;
            color: var(--primary-gray);
          }

          .side-menu > ul > li > img {
            width: 40px;
            height: 40px;
          }

          .nav__menuwrap {
            display: flex;
            flex-direction: column;
          }

          .nav__menuwrap:hover {
            cursor: pointer;
          }

          .nav__menuwrap > span {
            background-color: var(--primary-beige);
            width: 2.5em;
            margin-bottom: 5px;
            height: 0.5em;
            border-radius: 3px;
            transition: all 0.3s ease-in-out;
          }

          .nav__menuwrap.open span:nth-child(1) {
            transform: rotate(45deg) translate(9px, 9px);
          }

          .nav__menuwrap.open span:nth-child(2) {
            opacity: 0;
          }

          .nav__menuwrap.open span:nth-child(3) {
            transform: rotate(-45deg) translate(9px, -9px);
          }

          @media only screen and (min-width: 600px) {
            .side-menu {
              right: -101%;
              width: 25%;
            }
          }
        `}
      </style>
    </>
  );
}
