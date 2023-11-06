import styles from "./GalerieApartman.module.css";
import okoli1 from "../../img/okoli1.webp";
import okoli2 from "../../img/okoli2.webp";
import okoli3 from "../../img/okoli3.webp";
import okoli4 from "../../img/okoli4.webp";
import okoli5 from "../../img/okoli5.webp";
import okoli6 from "../../img/okoli6.webp";
import okoli7 from "../../img/okoli7.webp";
import okoli8 from "../../img/okoli8.webp";
function GalerieOkoli() {
  return (
    <div className={styles.layout}>
      <section className={styles.apartmanSection}>
        <div>
          <img src={okoli1} alt="Prachatice" />
        </div>
        <div>
          <img src={okoli2} alt="pastva" />
        </div>
        <div>
          <img src={okoli3} alt="mraky" />
        </div>
        <div>
          <img src={okoli4} alt="rybník" />
        </div>
        <div>
          <img src={okoli5} alt="pláž" />
        </div>
        <div>
          <img src={okoli6} alt="rybník" />
        </div>
        <div>
          <img src={okoli7} alt="pastvina" />
        </div>
        <div>
          <img src={okoli8} alt="rybník" />
        </div>
      </section>
    </div>
  );
}

export default GalerieOkoli;
