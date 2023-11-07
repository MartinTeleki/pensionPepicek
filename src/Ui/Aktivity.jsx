import { Link } from "react-router-dom";

import styles from "./Aktivity.module.css";
import krokodyl from "../img/krokodyl.webp";
import stezkakorunamistromu from "../img/stezkakorunamistromu.webp";
import stezkakorunamistromu2 from "../img/stezkakorunamistromu2.webp";
import ceskykrumlov from "../img/ceskykrumlov.webp";
import ceskykrumlov2 from "../img/ceskykrumlov2.webp";
import ceskykrumlov3 from "../img/ceskykrumlov3.webp";
import helffenburg from "../img/helffenburg.webp";
import zoohluboka from "../img/zoohluboka.webp";
import zoohluboka2 from "../img/zoohluboka2.webp";
import zamekdub from "../img/zamekdub.webp";
import zamekhluboka from "../img/zamekhluboka.webp";
import prachatice1 from "../img/prachatice1.webp";
import prachatice2 from "../img/prachatice2.webp";
import zamekKratochvile from "../img/zamekKratochvile.webp";
import rozhlednalibin from "../img/rozhlednalibin.webp";

function Aktivity() {
  return (
    <div className={styles.layout}>
      <article className={styles.article}>
        <section className={styles.section}>
          <h2>Aktivity v okolí</h2>
          <h3>
            <Link
              to="https://krokodylizoo.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Krokodýlí zoo Protivín <small>- 28km</small>
            </Link>
          </h3>
          <div>
            <img src={krokodyl} alt="krokodýlí zoo Protivín" />
          </div>
        </section>

        <section className={styles.section}>
          <h3>
            <Link
              to="https://www.stezkakorunamistromu.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stezka korunami stromů Lipno <small>- 65km</small>
            </Link>
          </h3>
          <div>
            <img
              src={stezkakorunamistromu}
              alt="stezka korunami stromů Lipno"
            />
          </div>
          <div>
            <img
              src={stezkakorunamistromu2}
              alt="stezka korunami stromů Lipno"
            />
          </div>
        </section>

        <section className={styles.section}>
          <h3>
            <Link
              to="https://www.zoohluboka.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zoo Hluboká nad Vltavou <small>- 25km</small>
            </Link>
          </h3>
          <div>
            <img
              src={zoohluboka}
              alt="Zoologická zahrada Hluboká nad Vltavou"
            />
          </div>
          <div>
            <img src={zoohluboka2} alt="Lední medvěd Hluboká nad Vltavou" />
          </div>
        </section>

        <section className={styles.section}>
          <h3>
            <Link
              to="https://www.helfenburk.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hrad Helfenburk <small>- 23.5km</small>
            </Link>
          </h3>
          <div>
            <img src={helffenburg} alt="hrad Helfenburk" />
          </div>
        </section>

        <section className={styles.section}>
          <h3>
            <Link
              to="https://zamekdub.webnode.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zámek Dub <small>- 14km</small>
            </Link>
          </h3>
          <div>
            <img src={zamekdub} alt="zámek Dub" />
          </div>
        </section>

        <section className={styles.section}>
          <h3>
            <Link
              to="https://www.zamek-hluboka.cz/cs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zámek Hluboká <small>- 30km</small>
            </Link>
          </h3>
          <div>
            <img src={zamekhluboka} alt="zámek Hluboká nad Vltavou" />
          </div>
        </section>

        <section className={styles.section}>
          <h3>
            <Link
              to="https://www.prachatice.eu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prachatice <small>- 14km</small>
            </Link>
          </h3>
          <div>
            <img src={prachatice1} alt="město Prachatice" />
          </div>
          <div>
            <img src={prachatice2} alt="město Prachatice" />
          </div>
        </section>

        <section className={styles.section}>
          <h3>
            <Link
              to="https://www.zamek-kratochvile.cz/cs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zámek Kratochvíle <small>- 4km</small>
            </Link>
          </h3>
          <div>
            <img src={zamekKratochvile} alt="zámek Kratochvíle" />
          </div>
        </section>

        <section className={styles.section}>
          <h3>
            <Link
              to="https://rozhledny.webzdarma.cz/libin.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rozhledna Libín <small>- 21km</small>
            </Link>
          </h3>
          <div>
            <img src={rozhlednalibin} alt="rozhledna Libín" />
          </div>
        </section>

        <section className={styles.section}>
          <h3>
            <Link
              to="https://www.ckrumlov.cz/cz/mesto-cesky-krumlov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Český Krumlov <small>- 35km</small>
            </Link>
          </h3>
          <div>
            <img src={ceskykrumlov} alt="město Český Krumlov" />
          </div>
          <div>
            <img src={ceskykrumlov2} alt="zámek Český krumlov" />
          </div>
          <div>
            <img src={ceskykrumlov3} alt="zahrada Český krumlov" />
          </div>
        </section>

        <section className={styles.section}>
          <h3>Další zajimavé místa v okolí</h3>

          <h4>Hrady:</h4>
          <Link
            to="https://www.hrady.cz/?OID=376"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hrad Hus
          </Link>

          <Link
            to="https://www.jiznicechy.cz/turisticke-cile/305-hrad-rozmberk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hrad Rožmberk
          </Link>

          <h4>Zámky:</h4>

          <Link
            to="http://www.zamekskalice.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zámek Skalice
          </Link>

          <Link
            to=" https://www.zamek-vimperk.cz/cs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zámek Vimperk
          </Link>

          <h4>Ostatní:</h4>
          <Link
            to="https://cs-cz.facebook.com/kamennespiraly/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Menhiry u Pěčnova
          </Link>

          <h4>Rybníky a vodní nádrže:</h4>
          <Link
            to="http://www.sumava.cz/objekt_az/232-kristanovicky-rybnik/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Křišťanovický rybník
          </Link>

          <Link
            to=" https://www.muzeum-st.cz/cs/mlyn-hoslovice/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mlýn Hoslovice
          </Link>

          <h4>Bazény:</h4>

          <Link
            to="http://szmpt.cz/plavecky-bazen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Krytý plavecký bazén Prachatice
          </Link>

          <Link
            to="https://www.sumava.info/volny-cas/koupani-a-vodni-sporty/verejne-koupaliste-hulak-prachatice/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Koupaliště Hulák Prachatice
          </Link>
          <Link
            to="https://www.sumava.info/volny-cas/koupani-a-vodni-sporty/plavecky-bazen-volary/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Plavecký bazén Volary
          </Link>

          <Link
            to="https://www.mesto.vimperk.cz/cz/koupaliste/120/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Koupaliště Vimperk
          </Link>

          <h4>Sportovní zařízení:</h4>
          <Link to="http://szmpt.cz/" target="_blank" rel="noopener noreferrer">
            Sportovní zařízení Prachatice
          </Link>

          <h4>Výšlapy a cesty:</h4>
          <Link
            to=" https://www.jiznicechy.cz/turisticke-cile/699-hornicka-naucna-stezka-albrechtovice"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hornická naučná cesta Albrechtovice
          </Link>
          <Link
            to="https://www.jiznicechy.cz/turisticke-cile/202-poutni-areal-lomec"
            target="_blank"
            rel="noopener noreferrer"
          >
            Poutní areál Lomec
          </Link>
          <h4>Lanové parky:</h4>
          <Link
            to="https://www.sumava.info/volny-cas/lanove-parky/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lanové parky
          </Link>

          <h4>Města a vesnice:</h4>

          <Link
            to=" https://www.jiznicechy.cz/turisticke-cile/33-holasovice-unesco-selske-baroko"
            target="_blank"
            rel="noopener noreferrer"
          >
            Holašovice
          </Link>

          <Link
            to="https://www.jiznicechy.cz/turisticke-cile/392-centrum-mistra-jana-husa-husinec"
            target="_blank"
            rel="noopener noreferrer"
          >
            Centrum mistra Jana Husa v Husinci
          </Link>

          <h4>Muzea:</h4>

          <Link
            to="https://www.jiznicechy.cz/turisticke-cile/369-prachenske-muzeum-v-pisku"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prácheňské muzeum v Písku
          </Link>

          <h4>Pivovary:</h4>

          <Link
            to=" https://www.jiznicechy.cz/turisticke-cile/134-navstevnicke-centrum-budvar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Návštěvnické centrum Budvar
          </Link>

          <h4>Technika:</h4>
          <Link
            to="https://www.cez.cz/cs/o-spolecnosti/kontakty-skupina-cez/informacni-centra/jaderna-elektrarna-temelin.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Infocentrum elektrárny Temelín
          </Link>
          <h4>Historie:</h4>
          <Link
            to="https://www.jiznicechy.cz/turisticke-cile/343-archeopark-netolice"
            target="_blank"
            rel="noopener noreferrer"
          >
            Archeopark Netolice
          </Link>
        </section>
      </article>
    </div>
  );
}

export default Aktivity;
