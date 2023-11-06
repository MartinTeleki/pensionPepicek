import styles from "./GalerieApartman.module.css";
import kolarna1 from "../../img/kolarna1.webp";
import kolarna3 from "../../img/kolarna3.webp";
import apartman5 from "../../img/apartman5.webp";

function GalerieKolarna() {
  return (
    <div className={styles.layout}>
      <section className={styles.apartmanSection}>
        <div>
          <img src={kolarna3} alt="ložnice" />
        </div>
        <div>
          <img src={kolarna1} alt="koupelna" />
        </div>
        <div>
          <img src={apartman5} alt="koupelna" />
        </div>
      </section>
    </div>
  );
}

export default GalerieKolarna;
