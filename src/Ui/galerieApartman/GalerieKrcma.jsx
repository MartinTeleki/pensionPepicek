import styles from "./GalerieApartman.module.css";
import krcma from "../../img/krcma.webp";
import krcma2 from "../../img/krcma2.webp";
import krcma3 from "../../img/krcma3.webp";
import krcma4 from "../../img/krcma4.webp";
import ButtonInfo from "./ButtonInfo";
import { useNavigate } from "react-router-dom";

function GalerieKrcma() {
  const navigate = useNavigate();
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
        <div className={styles.button}>
          <ButtonInfo onClick={() => navigate(-1)}>Zpět do galerie</ButtonInfo>
        </div>
      </section>
    </div>
  );
}

export default GalerieKrcma;
