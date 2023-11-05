import styles from "./NadKolarnou.module.css";
import pokojpohoda1 from "../../img/pokojpohoda1.jpg";
import pension4 from "../../img/pension4.jpg";

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
