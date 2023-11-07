import styles from "./GalerieApartman.module.css";
import slunce1 from "../../img/slunce1.webp";
import slunce2 from "../../img/slunce2.webp";
import slunce3 from "../../img/slunce3.webp";
import slunce4 from "../../img/slunce4.webp";
import slunce5 from "../../img/slunce5.webp";
import slunce6 from "../../img/slunce6.webp";
import slunce7 from "../../img/slunce7.webp";
import ButtonInfo from "./ButtonInfo";
import { useNavigate } from "react-router-dom";

function GalerieSlunce() {
  const navigate = useNavigate();

  return (
    <div className={styles.layout}>
      <section className={styles.apartmanSection}>
        <div>
          <img src={slunce1} alt="ložnice" />
        </div>
        <div>
          <img src={slunce2} alt="ložnice" />
        </div>
        <div>
          <img src={slunce3} alt="ložnice" />
        </div>
        <div>
          <img src={slunce4} alt="sprchový kout" />
        </div>
        <div>
          <img src={slunce5} alt="obyvák" />
        </div>
        <div>
          <img src={slunce6} alt="koupelna" />
        </div>
        <div>
          <img src={slunce7} alt="kuchyně" />
        </div>
        <div className={styles.button}>
          <ButtonInfo onClick={() => navigate(-1)}>Zpět do galerie</ButtonInfo>
        </div>
      </section>
    </div>
  );
}

export default GalerieSlunce;
