import { Link } from "react-router-dom";
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
        <Link to="/domu">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul className={`${styles.navItems} ${isOpen ? styles.showMenu : ""}`}>
          <Link
            className={styles.linkItems}
            to="/domu"
            onClick={handleChangePage}
          >
            Domů
          </Link>

          <Link
            className={styles.linkItems}
            to="/akce"
            onClick={handleChangePage}
          >
            Akce
          </Link>
          <Link
            className={styles.linkItems}
            to="/ubytovani"
            onClick={handleChangePage}
          >
            Ubytování
          </Link>
          <Link
            className={styles.linkItems}
            to="/cenik"
            onClick={handleChangePage}
          >
            Aktivity
          </Link>
          <Link
            className={styles.linkItems}
            to="/aktivity"
            onClick={handleChangePage}
          >
            Kontakt
          </Link>
          <Link
            className={styles.linkItems}
            to="/kontakt"
            onClick={handleChangePage}
          >
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
