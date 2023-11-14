import styles from "./Price.module.css";
import { Link } from "react-router-dom";
import ButtonInfo from "./galerieApartman/ButtonInfo";

//Cena za noc
const SlunceCenaNoc = 650;
const JezeroCenaNoc = 650;
const PohodaCenaNoc = 650;
const KolarnaCenaNoc = 650;
const KrcmaCenaNoc = 650;

//cena za noc plně pbsazeno
const SluncePlneObsazenoNoc = 3500;
const JezeroPlneObsazenoNoc = 1650;
const PohodaPlneObsazenoNoc = 3200;
const KolarnaPlneObsazenoNoc = 1650;
const KrcmaPlneObsazenoNoc = 2200;

function Price() {
  return (
    <>
      {/* Slunce */}
      <div className={styles.columns}>
        <ul className={styles.price}>
          <li className={styles.header}>Apartmán Slunce</li>
          <li className={styles.grey}>
            Osoba: <br /> Kč {SlunceCenaNoc} / noc
          </li>
          <li className={styles.grey}>
            Plně obsazený: <br /> Kč {SluncePlneObsazenoNoc} / noc
          </li>
          <li className={styles.white}>2x manželská postel + 3x jednolůžko</li>

          <li className={styles.grey}>
            <ButtonInfo to="/ubytovani/slunce" className={styles.button}>
              Více info
            </ButtonInfo>
          </li>
        </ul>
      </div>

      {/* Jezero */}
      <div className={styles.columns}>
        <ul className={styles.price}>
          <li className={styles.header}>Apartmán Jezero</li>
          <li className={styles.grey}>
            Osoba: <br /> Kč {JezeroCenaNoc} / noc
          </li>
          <li className={styles.grey}>
            Plně obsazený: <br /> Kč {JezeroPlneObsazenoNoc} / noc
          </li>
          <li className={styles.white}>1x manželská postel + 1x jednolůžko</li>

          <li className={styles.grey}>
            <ButtonInfo to="/ubytovani/jezero" className={styles.button}>
              Více info
            </ButtonInfo>
          </li>
        </ul>
      </div>
      {/* Pohoda */}
      <div className={styles.columns}>
        <ul className={styles.price}>
          <li className={styles.header}>Apartmán Pohoda</li>
          <li className={styles.grey}>
            Osoba: <br /> Kč {PohodaCenaNoc} / noc
          </li>
          <li className={styles.grey}>
            Plně obsazený: <br /> Kč {PohodaPlneObsazenoNoc} / noc
          </li>
          <li className={styles.white}>1x manželská postel + 4* jednolůžko</li>

          <li className={styles.grey}>
            <ButtonInfo to="/ubytovani/pohoda" className={styles.button}>
              Více info
            </ButtonInfo>
          </li>
        </ul>
      </div>

      {/* Nad Kolárnou */}
      <div className={styles.columns}>
        <ul className={styles.price}>
          <li className={styles.header}>Apartmán Nad Kolárnou</li>
          <li className={styles.grey}>
            Osoba: <br /> Kč {KolarnaCenaNoc} / noc
          </li>
          <li className={styles.grey}>
            Plně obsazený: <br /> Kč {KolarnaPlneObsazenoNoc} / noc
          </li>
          <li className={styles.white}>1x manželská postel + 1x jednolůžko</li>

          <li className={styles.grey}>
            <ButtonInfo to="/ubytovani/nadkolarnou" className={styles.button}>
              Více info
            </ButtonInfo>
          </li>
        </ul>
      </div>
      {/* Nad Krčmou  */}
      <div className={styles.columns}>
        <ul className={styles.price}>
          <li className={styles.header}>Apartmán Nad Krčmou</li>
          <li className={styles.grey}>
            Osoba: <br /> Kč {KrcmaCenaNoc} / noc
          </li>
          <li className={styles.grey}>
            Plně obsazený: <br /> Kč {KrcmaPlneObsazenoNoc} / noc
          </li>
          <li className={styles.white}>1x manželská postel + 2x jednolůžko</li>

          <li className={styles.grey}>
            <ButtonInfo to="/ubytovani/nadkrcmou" className={styles.button}>
              Více info
            </ButtonInfo>
          </li>
        </ul>
      </div>

      {/* Ostatní */}
      <div className={styles.columns}>
        <ul className={styles.price}>
          <li className={styles.header}>Sál a prostory restaurace</li>
          <li className={styles.grey}>Vše po domluvě s majiteli</li>
          <li className={styles.grey}>Soukromé, rodinné a firemní akce.</li>
          <li className={styles.white}></li>

          <li className={styles.grey}>
            <ButtonInfo to="/kontakt" className={styles.button}>
              Více info
            </ButtonInfo>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Price;
