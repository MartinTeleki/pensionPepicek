import ButtonInfo from "./ButtonInfo";
import styles from "./GalerieApartman.module.css";
import { useNavigate } from "react-router-dom";

function GaleriePohoda() {
  const navigate = useNavigate();
  return (
    <div className={styles.layout}>
      <section className={styles.apartmanSection}>
        <div>
          <img src="" alt="" />
        </div>

        <div className={styles.button}>
          <ButtonInfo onClick={() => navigate(-1)}>Zpět do galerie</ButtonInfo>
        </div>
      </section>
    </div>
  );
}

export default GaleriePohoda;
