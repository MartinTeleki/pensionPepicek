import styles from "./Header.module.css";
import logo from "../img/logo.png";

function Header() {
  return (
    <>
      <header className={styles.layout}>
        <div className="logo">
          <img src={logo} alt="Logo" height={100} width={100} />
        </div>
        <nav>
          <ul className="navItems">
            <li className={styles.pes}>Domů</li>
            <li>Akce</li>
            <li>Ubytování</li>
            <li>Ceník</li>
            <li>Aktivity</li>
            <li>Kontakt</li>
            <li>Fotogalerie</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
