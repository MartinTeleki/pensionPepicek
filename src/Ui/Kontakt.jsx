import styles from "./Kontakt.module.css";
import Map from "../API/Map";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import { Translate } from "@mui/icons-material";

const adresaPenzion = "Žitná 48, 384711 Hracholusky";
const cisloRecepce = "+420 777 138 131";
const emailRecepce = "info@penzionupepicka.cz";

function Kontakt() {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.paragraphContainer}>
          <div>
            <p className={styles.info}>
              <Link
                to="https://mapy.cz/zakladni?source=firm&id=13215431&x=14.1338883&y=49.0370899&z=19"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">home</span>{" "}
                {adresaPenzion}
              </Link>
            </p>
          </div>
          <div>
            <p className={styles.info}>
              <span className="material-symbols-outlined">phone</span>{" "}
              <a href="tel:+420777138131">{cisloRecepce} recepce</a>
            </p>
          </div>
          <div>
            <p className={styles.info}>
              <span className="material-symbols-outlined">mail</span>{" "}
              <a href="mailto:info@penzionupepicka.cz">{emailRecepce}</a>
            </p>
          </div>
          <div>
            <p className={styles.info}>
              <Link
                to="https://mapy.cz/zakladni?source=firm&id=13215431&x=14.1338883&y=49.0370899&z=19"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon style={{ transform: "translateY(5px)" }} />{" "}
                Facebook
              </Link>
            </p>
          </div>
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
