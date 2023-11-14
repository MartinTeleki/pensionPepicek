import { BrowserRouter} from "react-router-dom";
import "./index.css";
import Header from "./Ui/Header";
import Footer from "./Ui/Footer";

import Main from "./Ui/Main";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
