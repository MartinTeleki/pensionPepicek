import styles from "./jezero.module.css";
import pokojjezero1 from "../../img/pokojjezero1.webp";
import pension2 from "../../img/pension2.webp";
import InfoPrice from "../InfoPrice";

function Jezero() {
  return (
    <div className={styles.layout}>
      <section className={styles.apartmanSection}>
        <div>
          <h2>Apartmán Jezero</h2>

          <p>
            Apartmán Jezero je určen pro 3 osoby. Je vybaven manželskou postelí,
            jednolůžkem a samozřejmostí je koupelna s WC. Apartmán je vybaven
            kompletně vybavenou kuchyňskou linkou.
          </p>
          <div className={styles.price}>
            <p>
              Cena za noc/1 osoba{" "}
              <span className={styles.singlePrice}>650 Kč</span>{" "}
            </p>
            <br />
            <p>
              Plně obsazený apartmán{" "}
              <span className={styles.fullPrice}>1650 Kč</span>
            </p>
            <br />
         <InfoPrice/>
          </div>
        </div>
      </section>

      <section className={styles.apartmanSection}>
        <div>
          <img src={pokojjezero1} alt="Apartmán nad kolárnou - terasa " />
        </div>
      </section>

      <section className={styles.apartmanSection}>
        <div>
          <img src={pension2} alt="Apartmán nad kolárnou - terasa " />
        </div>
      </section>
    </div>
  );
}

export default Jezero;
