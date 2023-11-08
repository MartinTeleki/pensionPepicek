import styles from "./Galerie.module.css";
import { Link } from "react-router-dom";
import pokojnadkolarnou from "../img/pokojnadkolarnou.webp";
import pokojnadkrcmou from "../img/pokojnadkrcmou.webp";
import pokojslunce from "../img/pokojslunce.webp";
import pokojpohoda from "../img/pokojpohoda.webp";
import pokojjezero from "../img/pokojjezero.webp";
import okoli1 from "../img/okoli1.webp";
import apartman1 from "../img/apartman1.webp";
import bar5 from "../img/bar5.webp";

function Galerie() {
  return (
    <div className={styles.layout}>
      <ul className={styles.apartmanLinks}>
        <div className={styles.apartmanContainer}>
          <div className={styles.linkContainer}>
            <Link to="/galerie/nadkrcmou">Galerie apartmán Nad Krčmou</Link>
          </div>

          <img src={pokojnadkolarnou} alt="pokoj Nad Krčmou" />
        </div>
        <div className={styles.apartmanContainer}>
          <div className={styles.linkContainer}>
            <Link to="/galerie/nadkolarnou">Galerie apartmán Nad Kolárnou</Link>
          </div>
          <div>
            <img src={pokojnadkrcmou} alt="pokoj Nad Kolárnou" />
          </div>
        </div>
        <div className={styles.apartmanContainer}>
          <div className={styles.linkContainer}>
            <Link to="/galerie/slunce">Galerie apartmán Slunce</Link>
          </div>
          <div>
            <img src={pokojslunce} alt="pokoj Slunce" />
          </div>
        </div>
        <div className={styles.apartmanContainer}>
          <div className={styles.linkContainer}>
            <Link to="/galerie/pohoda">Galerie apartmán Pohoda</Link>
          </div>
          <div>
            <img src={pokojpohoda} alt="pokoj Pohoda" />
          </div>
        </div>
        <div className={styles.apartmanContainer}>
          <div className={styles.linkContainer}>
            <Link to="/galerie/jezero">Galerie apartmán Jezero</Link>
          </div>
          <div>
            <img src={pokojjezero} alt="pokoj Jezero" />
          </div>
        </div>

        <div className={styles.apartmanContainer}>
          <div className={styles.linkContainer}>
            <Link to="/galerie/okoli">Galerie okolí penzionu</Link>
          </div>
          <div>
            <img src={okoli1} alt="pokoj Jezero" />
          </div>
        </div>

        <div className={styles.apartmanContainer}>
          <div className={styles.linkContainer}>
            <Link to="/galerie/bar">Galerie Baru</Link>
          </div>
          <div>
            <img src={bar5} alt="pokoj Jezero" />
          </div>
        </div>

        <div className={styles.apartmanContainer}>
          <div className={styles.linkContainer}>
            <Link to="/galerie/areal">Galerie areál</Link>
          </div>
          <div>
            <img src={apartman1} alt="areál penzionu Pepíček" />
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Galerie;
