import styles from "./infoPrice.module.css";

function InfoPrice() {
  return (
    <div>
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
  );
}

export default InfoPrice;
