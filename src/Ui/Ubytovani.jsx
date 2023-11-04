import { Link } from "react-router-dom";
import styles from "./Ubytovani.module.css";
import pokojnadkolarnou from "../img/pokojnadkolarnou.jpg";
import pokojnadkrcmou from "../img/pokojnadkrcmou.jpg";
import pokojslunce from "../img/pokojslunce.jpg";
import pokojpohoda from "../img/pokojpohoda.jpg";
import pokojjezero from "../img/pokojjezero.jpg";

function Ubytovani() {
  return (
    <div className={styles.layout}>
  
        <ul className={styles.apartmanLinks}>
          <Link to="/ubytovani/nadkrcmou">Apartmány Nad Krčmou</Link>
          <div>
            <img src={pokojnadkolarnou} alt="pokoj Nad Kolárnou" />
          </div>
          <Link to="/ubytovani/nadkolarnou">Apartmán Nad Kolárnou</Link>
          <div>
            <img src={pokojnadkrcmou} alt="pokoj Nad Krcmou" />
          </div>
          <Link to="/ubytovani/slunce">Apartmány Slunce</Link>
          <div>
            <img src={pokojslunce} alt="pokoj Slunce" />
          </div>
          <Link to="/ubytovani/pohoda">Apartmány Pohoda</Link>
          <div>
            <img src={pokojpohoda} alt="pokoj Pohoda" />
          </div>
          <Link to="/ubytovani/jezero">Apartmány Jezero</Link>
          <div>
            <img src={pokojjezero} alt="pokoj Jezero" />
          </div>
        </ul>
    
    </div>
  );
}

export default Ubytovani;
