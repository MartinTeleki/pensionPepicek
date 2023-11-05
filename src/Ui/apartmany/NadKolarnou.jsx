import styles from "./NadKolarnou.module.css";
import pokojnadkrcmou from "../../img/pokojnadkrcmou.webp";
import pension7 from "../../img/pension7.webp";

function nadKolarnou() {
  return (
    <div className={styles.layout}>
      <section className={styles.apartmanSection}>
        <div>
          <h2>Apartmány nad krčmou</h2>

          <p>
            Nově vybudovaný apartmán pro 3 osoby nabízí komfortní ubytování v
            separé areálu
          </p>
        </div>
      </section>

      <section className={styles.apartmanSection}>
        <div>
          <img src={pokojnadkrcmou} alt="Apartmán nad kolárnou - terasa " />
        </div>
      </section>

      <section className={styles.apartmanSection}>
        <div>
          <img
            src={pension7}
            style={{ height: "260px" }}
            alt="Apartmán nad kolárnou - terasa "
          />
        </div>
      </section>
    </div>
  );
}

export default nadKolarnou;
