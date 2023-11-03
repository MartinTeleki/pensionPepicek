import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Ui/Home";
import Akce from "./Ui/Akce";

import "./index.css";
import Ubytovani from "./Ui/Ubytovani";
import Cenik from "./Ui/Cenik";
import Aktivity from "./Ui/Aktivity";
import Kontakt from "./Ui/Kontakt";
import Fotografie from "./Ui/Fotografie";
import Header from "./Ui/Header";
import Footer from "./Ui/Footer";

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/akce" element={<Akce />} />
          <Route path="/ubytovani" element={<Ubytovani />} />
          <Route path="/cenik" element={<Cenik />} />
          <Route path="/aktivity" element={<Aktivity />} />
          <Route path="/kontakty" element={<Kontakt />} />
          <Route path="/fotografie" element={<Fotografie />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
