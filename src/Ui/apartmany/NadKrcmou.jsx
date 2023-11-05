import styles from "./NadKolarnou.module.css";
import pokojnadkolarnou1 from "../../img/pokojnadkolarnou1.jpg";
import pokojnadkolarnou2 from "../../img/pokojnadkolarnou2.jpg";
import pokojnadkolarnou3 from "../../img/pokojnadkolarnou3.jpg";
import pokojnadkolarnou4 from "../../img/pokojnadkolarnou4.jpg";
import pokojnadkolarnou5 from "../../img/pokojnadkolarnou5.jpg";

function nadKrcmou() {
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
    </div>
  );
}

export default nadKrcmou;
