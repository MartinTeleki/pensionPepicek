import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Akce from "./Akce";
import Ubytovani from "./Ubytovani";
import Cenik from "./Cenik";
import Aktivity from "./Aktivity";
import Kontakt from "./Kontakt";
import Galerie from "./Galerie";
import NadKrcmou from "./apartmany/nadKrcmou";
import NadKolarnou from "./apartmany/nadKolarnou";
import Slunce from "./apartmany/slunce";
import Pohoda from "./apartmany/pohoda";
import Jezero from "./apartmany/Jezero";
import GalerieAreal from "./galerieApartman/GalerieAreal";
import GalerieBar from "./galerieApartman/GalerieBar";
import GalerieJezero from "./galerieApartman/GalerieJezero";
import GalerieKolarna from "./galerieApartman/GalerieKolarna";
import GalerieKrcma from "./galerieApartman/GalerieKrcma";
import GalerieOkoli from "./galerieApartman/galerieOkoli";
import GaleriePohoda from "./galerieApartman/GaleriePohoda";
import GalerieSlunce from "./galerieApartman/GalerieSlunce";
import Error from "./Error";

function Main() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route index element={<Home />} />
        <Route path="/domu" element={<Home />} />
        <Route path="/akce" element={<Akce />} />
        <Route path="/ubytovani" element={<Ubytovani />} />
        <Route path="/ubytovani/nadkrcmou" element={<NadKrcmou />} />
        <Route path="/ubytovani/nadkolarnou" element={<NadKolarnou />} />
        <Route path="/ubytovani/slunce" element={<Slunce />} />
        <Route path="/ubytovani/pohoda" element={<Pohoda />} />
        <Route path="/ubytovani/jezero" element={<Jezero />} />

        <Route path="/cenik" element={<Cenik />} />
        <Route path="/aktivity" element={<Aktivity />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/galerie/areal" element={<GalerieAreal />} />
        <Route path="/galerie/bar" element={<GalerieBar />} />
        <Route path="/galerie/jezero" element={<GalerieJezero />} />
        <Route path="/galerie/nadkolarnou" element={<GalerieKolarna />} />
        <Route path="/galerie/nadkrcmou" element={<GalerieKrcma />} />
        <Route path="/galerie/okoli" element={<GalerieOkoli />} />
        <Route path="/galerie/pohoda" element={<GaleriePohoda />} />
        <Route path="/galerie/slunce" element={<GalerieSlunce />} />
      </Routes>
    </div>
  );
}

export default Main;
