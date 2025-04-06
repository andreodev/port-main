import { ThemeProvider } from "./context/ThemeProvider";
import Route from "./rotas/routes";
import './context/style.css'
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <ThemeProvider>
      <Analytics />
      <Route />
    </ThemeProvider>
  );
}
