import styles from "./Price.module.css";
import { Link } from "react-router-dom";

function Price() {
  return (
    <>
      {/* Slunce */}
      <div className={styles.columns}>
        <ul className={styles.price}>
          <li className={styles.header}>Apartmán Slunce</li>
          <li className={styles.grey}>
            Osoba: <br /> Kč 650 / noc
          </li>
          <li className={styles.grey}>
            Plně obsazený: <br /> Kč 3500 / noc
          </li>

          <li className={styles.grey}>
            <a href="#" className={styles.button}>
              Více info
            </a>
          </li>
        </ul>
      </div>

      {/* Jezero */}
      <div className={styles.columns}>
        <ul className={styles.price}>
          <li className={styles.header}>Apartmán Jezero</li>
          <li className={styles.grey}>
            Osoba: <br /> Kč 650 / noc
          </li>
          <li className={styles.grey}>
            Plně obsazený: <br /> Kč 1650 / noc
          </li>

          <li className={styles.grey}>
            <a href="#" className={styles.button}>
              Více info
            </a>
          </li>
        </ul>
      </div>
      {/* Pohoda */}
      <div className={styles.columns}>
        <ul className={styles.price}>
          <li className={styles.header}>Apartmán Pohoda</li>
          <li className={styles.grey}>
            Osoba: <br /> Kč 650 / noc
          </li>
          <li className={styles.grey}>
            Plně obsazený: <br /> Kč 3200 / noc
          </li>

          <li className={styles.grey}>
            <a href="#" className={styles.button}>
              Více info
            </a>
          </li>
        </ul>
      </div>

      {/* Nad Kolárnou */}
      <div className={styles.columns}>
        <ul className={styles.price}>
          <li className={styles.header}>Apartmán Nad Kolárnou</li>
          <li className={styles.grey}>
            Osoba: <br /> Kč 650 / noc
          </li>
          <li className={styles.grey}>
            Plně obsazený: <br /> Kč 1650 / noc
          </li>

          <li className={styles.grey}>
            <a href="#" className={styles.button}>
              Více info
            </a>
          </li>
        </ul>
      </div>
      {/* Nad Krčmou  */}
      <div className={styles.columns}>
        <ul className={styles.price}>
          <li className={styles.header}>Apartmán Nad Krčmou</li>
          <li className={styles.grey}>
            Osoba: <br /> Kč 650 / noc
          </li>
          <li className={styles.grey}>
            Plně obsazený: <br /> Kč 2200 / noc
          </li>

          <li className={styles.grey}>
            <a href="#" className={styles.button}>
              Více info
            </a>
          </li>
        </ul>
      </div>

      {/* Ostatní */}
      <div className={styles.columns}>
        <ul className={styles.price}>
          <li className={styles.header}>Sál a prostory restaurace</li>
          <li className={styles.grey}>Vše po domluvě s majiteli</li>
          <li className={styles.grey}>Soukromé, rodinné a firemní akce.</li>

          <li className={styles.grey}>
            <a href="#" className={styles.button}>
              Více info
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Price;
