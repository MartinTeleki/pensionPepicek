import React from "react";
import styles from "./Home.module.css";
import pension from "../img/pension.jpg";
import pension2 from "../img/pension2.jpg";
import pension3 from "../img/pension3.jpg";
import pension5 from "../img/pension5.jpg";
import pension6 from "../img/pension6.jpg";
import pension8 from "../img/pension8.jpg";
import pension14 from "../img/pension14.jpeg";
import pension18 from "../img/pension18.jpg";
import pokoj from "../img/pokoj.jpg";
import kuchyn from "../img/kuchyn.jpg";

function Home() {
  return (
    <div>
      <div className={styles.layout}>
        <section className={styles.welcomeSection}>
          <h1 className={styles.welcomeTitle}>
            Vítáme Vás v oáze klidu a pohody.
          </h1>
          <p>
            Srdečně Vás zveme do nového rodinného penzionu s plně vybavenými
            apartmány v obci Žitná u Netolic.
          </p>
          <div>
            <img className={styles.homeImage} src={pension} alt="pension" />
          </div>
        </section>

        <section className={styles.welcomeSection2}>
          <p className={styles.welcomeText2}>
            Ubytování se nachází přímo u lesa s nádherným výhledem na šumavskou
            krajinu, daleko od dopravního hluku.
          </p>

          <div>
            <img className={styles.homeImage} src={pension6} alt="pension" />
          </div>
        </section>

        <section className={styles.welcomeSection}>
          <p className={styles.welcomeText}>
            Pokoje jsou vybaveny televizorem a Wi-Fi připojením.
          </p>

          <div>
            <img className={styles.homeImage} src={pokoj} alt="pension" />
          </div>
        </section>

        <section className={styles.welcomeSection2}>
          <p className={styles.welcomeText}>
            K samostatné přípravě pokrmů může posloužit ubytovaným i plně
            vybavená kuchyňská linka s jídelním koutem.
          </p>

          <div>
            <img className={styles.homeImage} src={kuchyn} alt="pension" />
          </div>
        </section>

        <section className={styles.welcomeSection}>
          <p>
            Penzion u Pepíčka je ideálním místem pro rodiny s dětmi, pro které
            je k dispozici dětské hřiště se skluzavkou, houpačkou, prolézačkami
            a pískovištěm.
            <br />K pohodovému venkovnímu posezení přímo láká prostorná
            zastřešená pergola s velkým grilem.
          </p>

          <div>
            <img className={styles.homeImage} src={pension8} alt="pension" />
          </div>
        </section>

        <section className={styles.welcomeSection2}>
          <p>
            Nově vybudovaný prostor restaurace/baru s výčepem nabízí příjemné
            posezení pod jednou střechou nejenom s přáteli.
          </p>

          <div>
            <img className={styles.homeImage} src={pension14} alt="pension" />
          </div>
        </section>

        <section className={styles.welcomeSection}>
          <p>
            Možnost pořádání soukromých oslav, svateb či firemních akcí po
            dohodě.
          </p>

          <div>
            <img className={styles.homeImage} src={pension18} alt="pension" />
          </div>
        </section>

        <section className={styles.welcomeSection2}>
          <p>
            V létě je penzion ideálním výchozím místem pro výlety. Blízké okolí
            penzionu je hustě protkáno sítí cyklostezek.
            <br />
            Přímo v penzionu zajistíme bezpečné uskladnění Vašich kol a případné
            dobití elektrokol.
          </p>

          <div>
            <img className={styles.homeImage} src={pension5} alt="pension" />
          </div>
        </section>

        <section className={styles.welcomeSection}>
          <p>
            Každý, podle svých možností a touhy poznávat, si může zvolit trasu
            sobě na míru.
          </p>

          <div>
            <img className={styles.homeImage} src={pension3} alt="pension" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
