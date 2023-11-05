import styles from "./pohoda.module.css";
import pokojpohoda1 from "../../img/pokojpohoda1.webp";
import pension4 from "../../img/pension4.webp";

function pohoda() {
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
              <span className={styles.singlePrice}>650 Kč</span> </p>
              <br />
              <p>
              Plně obsazený apartmán{" "}
              <span className={styles.fullPrice}>3200 Kč</span>
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
    </div>
  );
}

export default pohoda;
