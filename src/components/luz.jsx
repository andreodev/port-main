import { useTheme } from "../context/ThemeProvider";
import { Lightbulb, LightbulbOff } from "lucide-react";
import { useState } from "react";

export default function Luz() {
  const { toggleTheme } = useTheme();
  const [ligado, setLigado] = useState(false);

  function handleClick() {
    setLigado(!ligado);
    toggleTheme();
  }

  return (
    <div className="relative w-20 h-20 sm:w-32 sm:h-[7.2rem] lg:w-36 lg:h-28 mb-5 mx-auto flex items-center justify-center">
      <button
        onClick={handleClick}
        className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full transition bg-gray-200 hover:bg-gray-300"
        aria-label="Alternar Luz"
      >
        {ligado ? (
            <LightbulbOff size={40} className="text-gray-500" />
        ) : (
            <Lightbulb size={40} className="text-yellow-500" />
        )}
      </button>
    </div>
  );
}
