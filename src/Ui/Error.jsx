import styles from "./Error.module.css";
import { useNavigate } from "react-router";

function Error() {
  const navigate = useNavigate(); 

  return (
    <div className={styles.container}>

    <div className={styles.mars}>
      <img
        src="https://assets.codepen.io/1538474/404.svg"
        className={styles.logo404}
        />
      <img
        src="https://assets.codepen.io/1538474/meteor.svg"
        className={styles.meteor}
        />
      <p className={styles.title}>Ah ne!!</p>
      <p className={styles.subtitle}>
        Špatně si napsal URL 😭 <br />
      </p>
      <div align="center">
        <a className={styles.btnBack} href="#" onClick={() => navigate("/domu")} >
          Zpět na hlavní stránku
        </a>
      </div>
      <img
        src="https://assets.codepen.io/1538474/astronaut.svg"
        className={styles.astronaut}
      />
      <img
        src="https://assets.codepen.io/1538474/spaceship.svg"
        className={styles.spaceship}
        />
    </div>
        </div>
  );
}

export default Error;
