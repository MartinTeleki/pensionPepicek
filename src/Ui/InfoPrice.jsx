import styles from "./infoPrice.module.css";

const postylkaCena = 50;
const mazlicci = 100;
const minimalniDelkaRezervaceObdobi = "1.7. 30.8.";
const minimalniDelkaObytovani = "7 nocí";

function InfoPrice() {
  return (
    <div>
      <p className={styles.price}>
        Zapůjčení dětské postýlky/1 noc{" "}
        <span className={styles.fullPrice}>{postylkaCena} Kč.</span>
      </p>
      <br />
      <p>
        Vaše domácí miláčky po domluvě rádi ubytujeme /1 noc{" "}
        <span className={styles.fullPrice}>{mazlicci} Kč.</span>
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
      <p>
        V období od {minimalniDelkaRezervaceObdobi} je minimální délka pobytu{" "}
        {minimalniDelkaObytovani}.{" "}
      </p>
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
