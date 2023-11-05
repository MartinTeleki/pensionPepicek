import styles from "./NadKolarnou.module.css";
import pokojjezero1 from "../../img/pokojjezero1.jpg";
import pension2 from "../../img/pension2.jpg";


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
