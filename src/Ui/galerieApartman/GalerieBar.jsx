import styles from "./GalerieApartman.module.css";
import bar from "../../img/bar.webp";
import bar2 from "../../img/bar2.webp";
import bar3 from "../../img/bar3.webp";
import bar4 from "../../img/bar4.webp";
import bar5 from "../../img/bar5.webp";
import bar6 from "../../img/bar6.webp";
import bar7 from "../../img/bar7.webp";
import bar8 from "../../img/bar8.webp";

function GalerieBar() {
  return (
    <div className={styles.layout}>
      <section className={styles.apartmanSection}>
        <div>
          <img src={bar} alt="posezení " />
        </div>
        <div>
          <img src={bar2} alt="bar a krb" />
        </div>
        <div>
          <img src={bar3} alt="krčma" />
        </div>
        <div>
          <img src={bar4} alt="stoly na oslavu" />
        </div>
        <div>
          <img src={bar5} alt="bar" />
        </div>
        <div>
          <img src={bar6} alt="sváteeční oběd" />
        </div>
        <div>
          <img src={bar7} alt="raut" />
        </div>
        <div>
          <img src={bar8} alt="oslava" />
        </div>
      </section>
    </div>
  );
}

export default GalerieBar;
