import projectsData from "./hooks/useSetupProjects";
import "./project.css";
import ProjectCard from "./components/ProjectCards";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  siteLink: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default function Projects() {
  const { t } = useTranslation(); // ✅ Correção aqui

  return (
    <div>
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={t(project.title)} // Traduzindo os textos
          description={t(project.description)}
          repoLink={project.repoLink}
          siteLink={project.siteLink}
          imageLink={project.imageLink}
          image={project.image}
        />
      ))}
    </div>
  );
}
