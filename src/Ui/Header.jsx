import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../img/logo8.png";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  const isActive = location.pathname;
  console.log(isActive);

  const handleChangePage = () => {
    setOpen(false);
  };

  return (
    <header className={styles.layout}>
      <div className={styles.logo}>
        <NavLink to="/domu">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <nav>
        <ul
          className={`${styles.navItems} ${isOpen ? styles.showMenu : ""} 
          }`}
        >
          <NavLink
            className={`${styles.linkItems} ${
              location.pathname === "/domu" ? styles.active : ""
            }`}
            to="/domu"
            onClick={handleChangePage}
          >
            Domů
          </NavLink>

          <NavLink
            className={`${styles.linkItems} ${
              location.pathname === "/akce" ? styles.active : ""
            }`}
            to="/akce"
            onClick={handleChangePage}
          >
            Akce
          </NavLink>
          <NavLink
            className={`${styles.linkItems} ${
              location.pathname === "/ubytovani" ? styles.active : ""
            }`}
            to="/ubytovani"
            onClick={handleChangePage}
          >
            Ubytování
          </NavLink>
          <NavLink
            className={`${styles.linkItems} ${
              location.pathname === "/aktivity" ? styles.active : ""
            }`}
            to="/aktivity"
            onClick={handleChangePage}
          >
            Aktivity
          </NavLink>
          <NavLink
            className={`${styles.linkItems} ${
              location.pathname === "/kontakt" ? styles.active : ""
            }`}
            to="/kontakt"
            onClick={handleChangePage}
          >
            Kontakt
          </NavLink>
          <NavLink
            className={`${styles.linkItems} ${
              location.pathname === "/galerie" ? styles.active : ""
            }`}
            to="/galerie"
            onClick={handleChangePage}
          >
            Galerie
          </NavLink>
        </ul>
      </nav>
      <div className={styles.hamburgerMenu}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </header>
  );
}

export default Header;
