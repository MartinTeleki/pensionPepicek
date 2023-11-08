import ButtonInfo from "./ButtonInfo";
import styles from "./GalerieApartman.module.css";
import pohoda1 from "../../img/pohoda1.webp";
import pohoda2 from "../../img/pohoda2.webp";
import pohoda3 from "../../img/pohoda3.webp";
import pohoda4 from "../../img/pohoda4.webp";
import { useNavigate } from "react-router-dom";

function GaleriePohoda() {
  const navigate = useNavigate();
  return (
    <div className={styles.layout}>
      <section className={styles.apartmanSection}>
        <div>
          <img src={pohoda1} alt="obyvák s televizí" />
        </div>
        <div>
          <img src={pohoda2} alt="schodiště s kuchyní" />
        </div>
        <div>
          <img src={pohoda3} alt="kuchyně" />
        </div>
        <div>
          <img src={pohoda4} alt="sprchový kout" />
        </div>

        <div className={styles.button}>
          <ButtonInfo onClick={() => navigate(-1)}>Zpět do galerie</ButtonInfo>
        </div>
      </section>
    </div>
  );
}

export default GaleriePohoda;
