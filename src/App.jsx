import { ThemeProvider } from "./context/ThemeProvider";
import Route from "./rotas/routes";
import './context/style.css'

export default function App() {
  return (
    <ThemeProvider>
      <Route />
    </ThemeProvider>
  );
}
