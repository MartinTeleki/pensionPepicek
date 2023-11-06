import styles from "./GalerieApartman.module.css";
import jezero1 from "../../img/jezero1.webp";
import jezero2 from "../../img/jezero2.webp";
import jezero3 from "../../img/jezero3.webp";
import jezero4 from "../../img/jezero4.webp";
import jezero5 from "../../img/jezero5.webp";
import jezero6 from "../../img/jezero6.webp";
import jezero7 from "../../img/jezero7.webp";

function GalerieJezero() {
  return (
    <div className={styles.layout}>
      <section className={styles.apartmanSection}>
        <div>
          <img src={jezero4} alt="ložnice" />
        </div>
        <div>
          <img src={jezero2} alt="koupelna" />
        </div>
        <div>
          <img src={jezero3} alt="schodiště" />
        </div>
        <div>
          <img src={jezero5} alt="manželská postel" />
        </div>
        <div>
          <img src={jezero6} alt="kuchyně" />
        </div>
        <div>
          <img src={jezero7} alt="jídelní stůl" />
        </div>
        <div>
          <img src={jezero1} alt="sprchový kout" style={{ height: "400px" }} />
        </div>
      </section>
    </div>
  );
}

export default GalerieJezero;
