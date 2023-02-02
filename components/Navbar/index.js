import styles from "@/components/Navbar/Navbar.module.css"
import bear from "@/public/Navbar/BurrFavi.svg"
import Image from "next/image"
import { useState } from "react";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false)

function menuHandler() {
  if (menuOpen == true) {
    setMenuOpen(!menuOpen)
    console.log("close")
  } else if (menuOpen == false) {
    setMenuOpen(!menuOpen)
    console.log("open")
  }
}

  return <>
      <div className={styles.navwrap}>
        <div>
          <Image src={bear} alt="Brrilliant Logo Bear"/>
        </div>
        <div>
          <h1 className={styles.nav__title}>Brr<span>illiant</span></h1>
        </div>
        <div className={styles.nav__menuwrap} onClick={() => menuHandler()}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
  </>;
}
