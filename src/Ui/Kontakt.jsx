import styles from "./Kontakt.module.css";
import Map from "../API/Map";
import { Link } from "react-router-dom";

function Kontakt() {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div>
          <Link
            to="https://mapy.cz/zakladni?source=firm&id=13215431&x=14.1338883&y=49.0370899&z=19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined">home</span> Žitná 48,
            38411 Hracholusky - Žitná, Jihočeský kraj, Česko
          </Link>
          <p className={styles.info}>
            <span className="material-symbols-outlined">phone</span>{" "}
            <a href="tel:+420777138131">+420 777 138 131</a>
          </p>
          <p className={styles.info}>
            <span className="material-symbols-outlined">mail</span>{" "}
            <a href="mailto:info@penzionupepicka.cz">info@penzionupepicka.cz</a>
          </p>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.map}>
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
