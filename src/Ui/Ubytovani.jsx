import { Link } from "react-router-dom";
import styles from "./Ubytovani.module.css";
import pokojnadkolarnou from "../img/pokojnadkolarnou.webp";
import pokojnadkrcmou from "../img/pokojnadkrcmou.webp";
import pokojslunce from "../img/pokojslunce.webp";
import pokojpohoda from "../img/pokojpohoda.webp";
import pokojjezero from "../img/pokojjezero.webp";

function Ubytovani() {
  return (
    <div className={styles.layout}>
      <ul className={styles.apartmanLinks}>
        <Link to="/ubytovani/nadkrcmou">Apartmány Nad Krčmou</Link>
        <div>
          <img src={pokojnadkolarnou} alt="pokoj Nad Krčmou" />
        </div>
        <Link to="/ubytovani/nadkolarnou">Apartmán Nad Kolárnou</Link>
        <div>
          <img src={pokojnadkrcmou} alt="pokoj Nad Kolárnou" />
        </div>
        <Link to="/ubytovani/slunce">Apartmán Slunce</Link>
        <div>
          <img src={pokojslunce} alt="pokoj Slunce" />
        </div>
        <Link to="/ubytovani/pohoda">Apartmán Pohoda</Link>
        <div>
          <img src={pokojpohoda} alt="pokoj Pohoda" />
        </div>
        <Link to="/ubytovani/jezero">Apartmán Jezero</Link>
        <div>
          <img src={pokojjezero} alt="pokoj Jezero" />
        </div>
      </ul>
    </div>
  );
}

export default Ubytovani;
