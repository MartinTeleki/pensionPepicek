import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        <div className={styles.iconsContainer}>
          <span className="material-symbols-outlined">mail</span> +420 777138131
        </div>{" "}
        <br />
        <div className={styles.iconsContainer}>
          <span className="material-symbols-outlined">phone</span>{" "}
          recepce@penzionupepicka.cz
        </div>
        <br />
        <div className={styles.iconsContainer}>
          <span style={{ marginRight: "5px" }}>&copy; Created by</span>

          <a
            href="https://github.com/MartinTeleki?tab=repositories"
            className={styles.footerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Mgr. Martin Teleki
          </a>
        </div>
      </p>
    </div>
  );
}
