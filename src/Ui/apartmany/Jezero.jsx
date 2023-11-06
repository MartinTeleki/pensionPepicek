import styles from "./jezero.module.css";
import pokojjezero1 from "../../img/pokojjezero1.webp";
import pension2 from "../../img/pension2.webp";

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
            <p>
              Zapůjčení dětské postýlky/1 noc{" "}
              <span className={styles.fullPrice}>50 Kč.</span>
            </p>
            <br />
            <p>
              Vaše domácí miláčky po domluvě rádi ubytujeme /1 noc{" "}
              <span className={styles.fullPrice}>100 Kč.</span>
            </p>
            <br />
            <p>
              Pronájem sálu restaurace{" "}
              <span>
                {" "}
                <b>dle dohody.</b>
              </span>
            </p>

            <br />
            <p>V období od 1.7 - 30.8. je minimální délka pobytu 7 nocí. </p>
            <br />
            <p>
              Uvedené ceny jsou pouze za ubytování. Stravování v penzionu
              neposkytujeme-děkujeme za pochopení.{" "}
            </p>
            <br />
            <p>Parkování v areálu penzionu zdarma. </p>
            <br />
            <p>
              Možnost pronájmu sálu restaurace po předchozí domluvě pro různé
              události.{" "}
            </p>
            <br />
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
