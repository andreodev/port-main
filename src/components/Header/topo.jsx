import { useTranslation } from "react-i18next";
import icon from "../img/icons.png";
import discord from "../img/social/discord.png";
import github from "../img/social/github.png";
import linkedin from "../img/social/linkedin.png";

export default function Header() {
  const { t } = useTranslation();

  const sociais = [
    { src: discord, alt: "Discord", link: t("https://discord.gg/7Xw79guB") },
    { src: github, alt: "GitHub", link: t("https://github.com/andreodev") },
    { src: linkedin, alt: "LinkedIn", link: t("https://www.linkedin.com/in/andreo-henrique/") },
  ];

  return (
    <div>
      <section className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
        <div className="flex-shrink-0 md:mb-0">
          <img
            src={icon}
            alt="icon-andreo"
            className="w-60 md:w-68 md:h-[19rem] xl:h-[18rem]  lg:h-[18rem] object-cover clip-icon xl:rounded-none lg:rounded-none md:rounded-none sm:rounded-full md:block" 
          />
        </div>
        <div className="text-white flex-shrink-1 w-full md:w-[500px] text-center md:text-left">
          <h1 className="font-bold text-2xl md:text-4xl">{t("Info.name")}</h1>
          <p className="font-bold text-lg md:text-xl">{t("Info.dev")}</p>
          <p className="">{t("Info.ativo")}</p>
          <hr className="mt-2 mb-4 border-white w-full md:w-2/3 lg:w-full " />
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 overflow-x-auto mb-4">
            {sociais.map((tech, index) => (
              <a
                key={index}
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-75"
              >
                <img
                  src={tech.src}
                  alt={tech.alt}
                  className="w-10 h-10 md:w-12 md:h-12 object-cover"
                />
              </a>
            ))}
          </div>
          <nav className="bg-opacity-30 rounded-lg">
            <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 justify-center md:justify-start">
              <li>
                <a href="#/" className="hover:underline">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#/projetos" className="hover:underline">
                  {t('nav.projects')}
                </a>
              </li>
              <li>
                <a href="#/contato" className="hover:underline">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
}
