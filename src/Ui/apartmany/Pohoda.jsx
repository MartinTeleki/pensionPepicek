import styles from "./Apartmany.module.css";
import pokojpohoda1 from "../../img/pokojpohoda1.webp";
import pension4 from "../../img/pension4.webp";
import InfoPrice from "../InfoPrice";
import { useNavigate } from "react-router-dom";
import ButtonInfo from "../galerieApartman/ButtonInfo";

function pohoda() {
  const navigate = useNavigate()
  return (
    <div className={styles.layout}>
      <section className={styles.apartmanSection}>
        <div>
          <h2>Apartmán Pohoda</h2>

          <p>
            Apartmán je určen pro 6 osob. Skládá se ze dvou pokojů. V prvním
            pokoji se nachází manželská postel s jednolůžkem. Ve druhém pokoji
            se nachází tři trojlůžka. Apartmán je plně vybaven moderní
            kuchyňskou linkou, které je součástí kuchyňská trouba, rychlovarná
            konvice, lednice a sklokeramická varná deska. V apartmánu se nachází
            koupelna s WC.
          </p>
          <div className={styles.price}>
            <p>
              Cena za noc/1 osoba{" "}
              <span className={styles.singlePrice}>650 Kč</span>{" "}
            </p>
            <br />
            <p>
              Plně obsazený apartmán{" "}
              <span className={styles.fullPrice}>3200 Kč</span>
            </p>
            <br />
            <InfoPrice />
          </div>
        </div>
      </section>

      <section className={styles.apartmanSection}>
        <div>
          <img src={pokojpohoda1} alt="Apartmán nad kolárnou - terasa " />
        </div>
      </section>

      <section className={styles.apartmanSection}>
        <div>
          <img src={pension4} alt="Apartmán nad kolárnou - kuchyň" />
        </div>
      </section>
        <div className={styles.button}>
          <ButtonInfo onClick={() => navigate(-1)}>Zpět na ubytování</ButtonInfo>
        </div>
    </div>
  );
}

export default pohoda;
