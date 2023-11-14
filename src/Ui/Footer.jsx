import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";

console.log(FacebookIcon);

export default function Footer() {
  const phoneNumber = "+420 777 138 131";
  const email = "recepce@penzionupepicka.cz";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className={styles.contentContainer}>
      <div className={styles.footer}>
        <div className={styles.iconsContainer}>
          <span className="material-symbols-outlined">phone</span>
          <span className={styles.kontakt} onClick={handleCallClick}>
            {" "}
            {phoneNumber}
          </span>
        </div>{" "}
        <br />
        <div className={styles.iconsContainer}>
          <span className="material-symbols-outlined">mail</span>{" "}
          <span className={styles.kontakt} onClick={handleEmailClick}>
            {email}
          </span>
        </div>
        <br />
        <div className={styles.iconsContainer} style={{ marginBottom: "10px" }}>
          <Link
            href="https://www.facebook.com/penzionu.pepicka"
            className={styles.footerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon style={{ transform: "translateY(5px)" }} /> Facebook
          </Link>
        </div>
        <div>
          <span style={{ marginRight: "5px" }}>&copy; Created by</span>

          <Link
            href="https://www.facebook.com/penzionu.pepicka"
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
      </div>
    </div>
  );
}
