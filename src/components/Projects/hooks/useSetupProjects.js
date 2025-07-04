import { useTranslation } from "react-i18next";
import one from "../../img/projetos/p1.webp";
import three from "../../img/projetos/p3.png";
import four from "../../img/projetos/p4.webp";
import five from "../../img/projetos/pj5.png";
import six from "../../img/projetos/pj6.png"

const images = [one,  three, four, five, six];

export function useSetupProjects() {
  const { t } = useTranslation(); // ✅ Hook dentro da função

  return images.map((image, index) => ({
    title: t(`Projects.Project${index + 1}.title`),
    description: t(`Projects.Project${index + 1}.description`),
    repoLink: t(`Projects.Project${index + 1}.repoLink`),
    siteLink: t(`Projects.Project${index + 1}.siteLink`),
    imageLink: t(`Projects.Project${index + 1}.imageLink`),
    image: image,
  }));
}
