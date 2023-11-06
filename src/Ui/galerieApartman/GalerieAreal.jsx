import styles from "./GalerieApartman.module.css";
import apartman1 from "../../img/apartman1.webp";
import apartman2 from "../../img/apartman2.webp";
import apartman3 from "../../img/apartman3.webp";
import apartman4 from "../../img/apartman4.webp";
import apartman5 from "../../img/apartman5.webp";
import apartman6 from "../../img/apartman6.webp";
import apartman7 from "../../img/apartman7.webp";
import apartman8 from "../../img/apartman8.webp";
import apartman9 from "../../img/apartman9.webp";
import apartman10 from "../../img/apartman10.webp";
import apartman11 from "../../img/apartman11.webp";
import apartman12 from "../../img/apartman12.webp";
import apartman13 from "../../img/apartman13.webp";
import apartman14 from "../../img/apartman14.webp";

function GalerieAreal() {
  return (
    <div className={styles.layout}>
      <section className={styles.apartmanSection}>
        <div>
          <img src={apartman1} alt="zahrada" />
        </div>
        <div>
          <img src={apartman2} alt=" parkoviště" />
        </div>
        <div>
          <img src={apartman3} alt="parkoviště" />
        </div>
        <div>
          <img src={apartman4} alt="parkoviště" />
        </div>
        <div>
          <img src={apartman5} alt="předzahrada" />
        </div>
        <div>
          <img src={apartman6} alt="pískoviště" />
        </div>
        <div>
          <img src={apartman7} alt="apartmány" />
        </div>
        <div>
          <img src={apartman8} alt="dvůr" />
        </div>
        <div>
          <img src={apartman9} alt="terasa" />
        </div>
        <div>
          <img src={apartman10} alt="vířivka" />
        </div>
        <div>
          <img src={apartman11} alt="dětské hřiště" />
        </div>
        <div>
          <img src={apartman12} alt="vstup do dvora" />
        </div>
        <div>
          <img src={apartman13} alt="penzion U Pepíčka" />
        </div>
      </section>
    </div>
  );
}

export default GalerieAreal;
5;
