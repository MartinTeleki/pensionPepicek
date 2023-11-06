import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const phoneNumber = "+420777138131";
  const email = "recepce@penzionupepicka.cz";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className={styles.footer}>
      <>
        <div className={styles.iconsContainer}>
          <span className="material-symbols-outlined">phone</span>
          <span className={styles.kontakt} onClick={handleCallClick}>
            {" "}
            +420777138131
          </span>
        </div>{" "}
        <br />
        <div className={styles.iconsContainer}>
          <span className="material-symbols-outlined">mail</span>{" "}
          <span className={styles.kontakt} onClick={handleCallClick}>
            recepce@penzionupepicka.cz{" "}
          </span>
        </div>
        <br />
        <div>
          <span style={{ marginRight: "5px" }}>&copy; Created by</span>

          <Link
            href="https://github.com/MartinTeleki?tab=repositories"
            className={styles.footerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Mgr. Martin Teleki
          </Link>
          <br />
          <br />
          <span>martinteleki@seznam.cz</span>
        </div>
      </>
    </div>
  );
}
