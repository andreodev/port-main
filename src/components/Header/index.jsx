import Header from "./topo.jsx";
import Hora from "../hora.jsx";
import Luz from "../luz.jsx";
import Language from "../Language/language.jsx";
import "../../pages/home.css"; 
import { ThemeProvider } from "../../context/ThemeProvider.jsx";

export default function HeaderFinal() {
  return (
    <ThemeProvider>
      <div className="header-final-container ">
        <Language />
        <header className="flex flex-col md:flex-row justify-between items-center  ">
          <div className=" items-center justify-center md:justify-start bg-opacity-custom person-header">
            <Header />
          </div>
          <div className="md:items-end mt-4">
            <Hora />
            <Luz />

          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}
