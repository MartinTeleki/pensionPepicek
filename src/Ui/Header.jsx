import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../img/logo8.png";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={styles.layout}>
      <div className={styles.logo}>
        <Link to="/domu">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul className={`${styles.navItems} ${isOpen ? styles.showMenu : ""}`}>
          <Link className={styles.linkItems} to="/domu">
            Domů
          </Link>
          <Link className={styles.linkItems} to="/akce">
            Akce
          </Link>
          <Link className={styles.linkItems} to="/ubytovani">
            Ubytování
          </Link>
          <Link className={styles.linkItems} to="/cenik">
            Aktivity
          </Link>
          <Link className={styles.linkItems} to="/aktivity">
            Kontakt
          </Link>
          <Link className={styles.linkItems} to="/kontakt">
            Fotografie
          </Link>
        </ul>
      </nav>
      <div className={styles.hamburgerMenu}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </header>
  );
}

export default Header;
