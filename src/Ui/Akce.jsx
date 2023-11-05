import { Link } from "react-router-dom";

import styles from "./Akce.module.css";
import zabijacka1 from "../img/zabijacka1.jpg";
import zabijacka2 from "../img/zabijacka2.jpg";
import silvestr2023 from "../img/silvestr2023.jpg";
import pension17 from "../img/pension17.jpg";

function Akce() {
  return (
    <div className={styles.layout}>
      <article className={styles.article}>
        <section className={styles.section}>
          <h2>Akce u nás rozhodně stojí za to.</h2>
          <p>Penzion U Pepíčka plánuje pravidelně různé akce.</p>
        </section>

        <section className={styles.section}>
          <h3>Zabijačkové hody - sobota 20.1.2024</h3>
          <div>
            <img src={zabijacka1} alt="zabijačka jihočeská" />
          </div>

          <div>
            <img src={zabijacka2} alt="prase na rožni" />
          </div>

          <p>Zveme Vás do našeho penzionu na pravou jihočeskou zabijačku.</p>
          <p>Začínáme ve 12:00 hod. „Vstupné“ pro neubytované 250,- Kč/os.</p>
          <p>Od 18.00 hod. bude živá hudba od kapely Refresh. </p>
          <p>Aktivní účast vítána.</p>
          <p>
            Ochutnávka dobrot z čuníka samozřejmostí.
            <em>
              Ovárek s křenem, zabijačkový guláš, tlačenka, jitrničky a jelítka.
            </em>
          </p>
          <p>
            Možnost ubytování této víkendové akce od pátku do neděle (19.-21.1.)
          </p>
          <p>
            V ceně je ubytování na 2 noci za 1.550,- Kč pro 1 osobu včetně
            ochutnávky zabijačkových hodů.
          </p>
        </section>

        <section className={styles.section}></section>

        <section className={styles.section}></section>

        <section className={styles.section}></section>
      </article>

      <article className={styles.article}>
        <section className={styles.section}>
          <h3>SILVESTR 2023 oslavte s námi s živou hudbou.</h3>
          <div>
            <img src={silvestr2023} alt="silvestrovská oslava" />
          </div>

          <div>
            <img src={pension17} alt="rout na akce" />
          </div>

          <p>
            Nově nabízíme ubytování se snídaní o silvestrovském víkendu PÁ-PO
            (29.12 až 1.1.). V ceně večerní silvestrovské pohoštění (čepované
            pivo, limo, přípitek a raut).{" "}
          </p>
          <p>Cena za osobu na 3 noci : 2.950,- Kč.</p>
          <p>
            Živá muzika v podání hudební kapely{" "}
            <Link
              to="https://youandmekapela.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              You & Me
            </Link>{" "}
          </p>
        </section>

        <section className={styles.section}></section>

        <section className={styles.section}></section>

        <section className={styles.section}></section>
      </article>
    </div>
  );
}

export default Akce;
