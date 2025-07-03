import { ThemeProvider } from "./context/ThemeProvider";
import Route from "./rotas/routes";
import './context/style.css'
import { Analytics } from "@vercel/analytics/react"
import ParticlesBackground from "./components/BgParticles/index.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <ParticlesBackground />
      <Analytics />
      <Route />
    </ThemeProvider>
  );
}
