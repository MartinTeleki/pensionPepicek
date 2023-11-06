import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Ui/Home";
import Akce from "./Ui/Akce";
import "./index.css";
import Ubytovani from "./Ui/Ubytovani";
import Cenik from "./Ui/Cenik";
import Aktivity from "./Ui/Aktivity";
import Kontakt from "./Ui/Kontakt";
import Galerie from "./Ui/Galerie";
import Header from "./Ui/Header";
import Footer from "./Ui/Footer";
import NadKrcmou from "./Ui/apartmany/nadKrcmou";
import NadKolarnou from "./Ui/apartmany/nadKolarnou";
import Slunce from "./Ui/apartmany/slunce";
import Pohoda from "./Ui/apartmany/pohoda";
import Jezero from "./Ui/apartmany/Jezero";
import GalerieAreal from "./Ui/galerieApartman/GalerieAreal";
import GalerieBar from "./Ui/galerieApartman/GalerieBar";
import GalerieJezero from "./Ui/galerieApartman/GalerieJezero";
import GalerieKolarna from "./Ui/galerieApartman/GalerieKolarna";
import GalerieKrcma from "./Ui/galerieApartman/GalerieKrcma";
import GalerieOkoli from "./Ui/galerieApartman/galerieOkoli";
import GaleriePohoda from "./Ui/galerieApartman/GaleriePohoda";
import GalerieSlunce from "./Ui/galerieApartman/GalerieSlunce";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
