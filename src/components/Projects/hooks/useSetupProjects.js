import { useTranslation } from "react-i18next";
import one from "../../img/projetos/p1.png";
import two from "../../img/projetos/p2.png";
import three from "../../img/projetos/p3.png";
import four from "../../img/projetos/p4.png";

// Mapeia os nomes das imagens para as importações reais
const images = [one, two, three, four];


const projectsData = images.map((image, index) => ({
  title: (`Projects.Project${index + 1}.title`),
  description: (`Projects.Project${index + 1}.description`),
  repoLink: (`Projects.Project${index + 1}.repoLink`),
  siteLink: (`Projects.Project${index + 1}.siteLink`),
  imageLink: (`Projects.Project${index + 1}.imageLink`),
  image: image, // Usa a imagem correspondente ao índice
}));

export default projectsData;
