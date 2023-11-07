import styles from "./Apartmany.module.css";
import pokojslunce from "../../img/pokojslunce.webp";
import InfoPrice from "../InfoPrice";
import { useNavigate } from "react-router-dom";
import ButtonInfo from "../galerieApartman/ButtonInfo";

function slunce() {
  const navigate = useNavigate();
  return (
    <div className={styles.layout}>
      <section className={styles.apartmanSection}>
        <div>
          <h2>
            Apartmán Slunce <br />
            <small className={styles.small}>
              (vhodné ubytování pro dvě rodiny)
            </small>
          </h2>

          <p>
            V prvním pokoji se nachází manželská postel a jednolůžko. Druhý
            pokoj je vybaben manželskou postelí a dvěmi jednolůžky. Součástí je
            moderně plně vybavená kuchyňská linka, kde naleznete mikrovlnou
            troubu, rychlovarnou konvici, lednici, sklokeramickou varnou desku.
            Součástí apartmánů je koupelna s WC.
          </p>
          <div className={styles.price}>
            <p>
              Cena za noc/1 osoba{" "}
              <span className={styles.singlePrice}>650 Kč</span>{" "}
            </p>
            <br />
            <p>
              Plně obsazený apartmán{" "}
              <span className={styles.fullPrice}>3500 Kč</span>
            </p>
            <br />
            <InfoPrice />
          </div>
        </div>
      </section>

      <section className={styles.apartmanSection}>
        <div>
          <img src={pokojslunce} alt="Apartmán nad kolárnou - terasa " />
        </div>
      </section>
      <div className={styles.button}>
        <ButtonInfo onClick={() => navigate(-1)}>Zpět na ubytování</ButtonInfo>
      </div>
    </div>
  );
}

export default slunce;
