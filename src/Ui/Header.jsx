import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../img/logo8.png";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false);

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
        <ul className={`${styles.navItems} ${isOpen ? styles.showMenu : ""}`}>
          <NavLink
            className={styles.linkItems} 
            to="/domu"  
            onClick={handleChangePage}
          >
            Domů
          </NavLink>

          <NavLink
            className={styles.linkItems}
            to="/akce"
            onClick={handleChangePage}
          >
            Akce
          </NavLink>
          <NavLink
            className={styles.linkItems}
            to="/ubytovani"
            onClick={handleChangePage}
          >
            Ubytování
          </NavLink>
          <NavLink
            className={styles.linkItems}
            to="/aktivity"
            onClick={handleChangePage}
          >
            Aktivity
          </NavLink>
          <NavLink
            className={styles.linkItems}
            to="/kontakt"
            onClick={handleChangePage}
          >
            Kontakt
          </NavLink>
          <NavLink
            className={styles.linkItems}
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
