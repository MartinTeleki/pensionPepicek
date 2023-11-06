import styles from "./GalerieApartman.module.css";
import krcma from "../../img/krcma.webp";
import krcma2 from "../../img/krcma2.webp";
import krcma3 from "../../img/krcma3.webp";
import krcma4 from "../../img/krcma4.webp";

function GalerieKrcma() {
  return (
    <div className={styles.layout}>
      <section className={styles.apartmanSection}>
        <div>
          <img src={krcma} alt="ložnice a postele" />
        </div>
        <div>
          <img src={krcma2} alt="posezení na balkóně" />
        </div>

        <div>
          <img src={krcma3} alt="koupelna" />
        </div>

        <div>
          <img src={krcma4} alt="kuchyně" />
        </div>
      </section>
    </div>
  );
}

export default GalerieKrcma;
