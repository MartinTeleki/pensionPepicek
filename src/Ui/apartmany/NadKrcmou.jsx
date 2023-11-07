import styles from "./Apartmany.module.css";
import pokojnadkolarnou1 from "../../img/pokojnadkolarnou1.webp";
import pokojnadkolarnou2 from "../../img/pokojnadkolarnou2.webp";
import pokojnadkolarnou3 from "../../img/pokojnadkolarnou3.webp";
import pokojnadkolarnou4 from "../../img/pokojnadkolarnou4.webp";
import pokojnadkolarnou5 from "../../img/pokojnadkolarnou5.webp";
import InfoPrice from "../InfoPrice";
import ButtonInfo from "../galerieApartman/ButtonInfo";
import { useNavigate } from "react-router-dom";

function nadKrcmou() {
  const navigate = useNavigate()
  return (
    <div className={styles.layout}>
      <section className={styles.apartmanSection}>
        <div>
          <h2>Apartmány nad krčmou</h2>

          <p>
            Nově postavené 3 jednotlivé apartmány. Každý apartmán je vybaven
            čtyřmi lůžky, jídelním stolem, TV, kuchyňským koutem se
            sklokeramickou varnou deskou, mikrovlnnou troubou a lednicí s
            mrazákem. Koupelna se sprchovým koutem, WC a umyvadlem. Vytápění
            podlahovým topením. Venkovní posezení na prostorné terase. Hosté
            mohou plně využívat velikou zahradu s pískovištěm, dětským hřištěm a
            nadzemním bazénem.
          </p>

          <div className={styles.price}>
            <p>
              Cena za noc/1 osoba{" "}
              <span className={styles.singlePrice}>650 Kč.</span>{" "}
            </p>
            <br />
            <p>
              Plně obsazený apartmán{" "}
              <span className={styles.fullPrice}>2200 Kč.</span>
            </p>
            <br />
            <InfoPrice />
          </div>
        </div>
      </section>

      <section className={styles.apartmanSection}>
        <div>
          <img src={pokojnadkolarnou1} alt="Apartmán nad kolárnou - terasa " />
        </div>
      </section>

      <section className={styles.apartmanSection}>
        <div>
          <img src={pokojnadkolarnou2} alt="Apartmán nad kolárnou - kuchyň" />
        </div>
      </section>

      <section className={styles.apartmanSection}>
        <div>
          <img src={pokojnadkolarnou3} alt="Apartmán nad kolárnou - ložnice" />
        </div>
      </section>

      <section className={styles.apartmanSection}>
        <div>
          <img src={pokojnadkolarnou4} alt="Apartmán nad kolárnou - koupelna" />
        </div>
      </section>

      <section className={styles.apartmanSection}>
        <div>
          <img src={pokojnadkolarnou5} alt="Apartmán nad kolárnou -balkón" />
        </div>
      </section>
      <div className={styles.button}>
          <ButtonInfo onClick={() => navigate(-1)}>Zpět na ubytování</ButtonInfo>
        </div>
    </div>

    
    
  );
}

export default nadKrcmou;
