import styles from "./Galerie.module.css";
import { Link } from "react-router-dom";

function Galerie() {
  return (
    <div className={styles.layout}>
      <ul className={styles.apartmanLinks}>
        <Link to="/galerie/areal"> Galerie Areal</Link>

        <Link to="/galerie/bar"> Galerie Bar</Link>

        <Link to="/galerie/jezero"> Galerie Jezero</Link>

        <Link to="/galerie/nadkolarnou"> Galerie Kolárna</Link>

        <Link to="/galerie/nadkrcmou"> Galerie Krcma</Link>

        <Link to="/galerie/okoli"> Galerie Okolí</Link>

        <Link to="/galerie/slunce"> Galerie Slunce</Link>
      </ul>
    </div>
  );
}

export default Galerie;
