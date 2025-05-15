import { useTranslation } from "react-i18next";
import gitBg from "../img/github/download.gif";
import './Github.css';

export default function Github() {

  const {t} = useTranslation();
  return (
    <div className="relative flex flex-col rounded-lg overflow-hidden transition-transform duration-300 hover:scale-110">
      <a href="https://github.com/andreodev" target="_blank" className="relative block">
        <img src={gitBg} alt="GitHub Background" className="w-full h-52 object-cover rounded-lg" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 rounded-lg">
          <span className="text-highlight text-3xl font-bold mb-12 font-sans glow">{t('github.title')}</span>
          <span className="text-highlight font-bold text-xl glow text-center">{t('github.subtitle')}</span>
        </div>
      </a>
    </div>
  );
}
