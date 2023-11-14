import { Link } from "react-router-dom";
import styles from "./Ubytovani.module.css";
import Price from "./Price";
import pokojnadkolarnou from "../img/pokojnadkolarnou.webp";
import pokojnadkrcmou from "../img/pokojnadkrcmou.webp";
import pokojslunce from "../img/pokojslunce.webp";
import pokojpohoda from "../img/pokojpohoda.webp";
import pokojjezero from "../img/pokojjezero.webp";

function Ubytovani() {
  return (
    <div>

    
      <div className={styles.layout}>
        <ul className={styles.apartmanLinks}>
          <div className={styles.apartmanContainer}>
            <div className={styles.linkContainer}>
              <Link to="/ubytovani/nadkrcmou">Apartmány Nad Krčmou</Link>
            </div>

            <img src={pokojnadkolarnou} alt="pokoj Nad Krčmou" />
          </div>
          <div className={styles.apartmanContainer}>
            <div className={styles.linkContainer}>
              <Link to="/ubytovani/nadkolarnou">Apartmán Nad Kolárnou</Link>
            </div>
            <div>
              <img src={pokojnadkrcmou} alt="pokoj Nad Kolárnou" />
            </div>
          </div>
          <div className={styles.apartmanContainer}>
            <div className={styles.linkContainer}>
              <Link to="/ubytovani/slunce">Apartmán Slunce</Link>
            </div>
            <div>
              <img src={pokojslunce} alt="pokoj Slunce" />
            </div>
          </div>
          <div className={styles.apartmanContainer}>
            <div className={styles.linkContainer}>
              <Link to="/ubytovani/pohoda">Apartmán Pohoda</Link>
            </div>
            <div>
              <img src={pokojpohoda} alt="pokoj Pohoda" />
            </div>
          </div>
          <div className={styles.apartmanContainer}>
            <div className={styles.linkContainer}>
              <Link to="/ubytovani/jezero">Apartmán Jezero</Link>
            </div>
            <div>
              <img src={pokojjezero} alt="pokoj Jezero" />
            </div>
          </div>
          
        </ul>
      </div>
      <div className={styles.priceContainer}>
       
        <Price />
      </div>
      
    
    </div>
  );
}

export default Ubytovani;
