import styles from "./Footer.module.css"


export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        &copy; Created by{" "}
        <a
          href="https://github.com/MartinTeleki?tab=repositories"
          className={styles.footerLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Mgr. Martin Teleki
        </a>
      </p>
    </div>
  );
}