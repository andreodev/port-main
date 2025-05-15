import { useSetupProjects } from "./hooks/useSetupProjects";
import "./project.css";
import ProjectCard from "./components/ProjectCards";
import PropTypes from "prop-types";

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  siteLink: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default function Projects() {
  const projectsData = useSetupProjects(); // ✅ Agora o hook está sendo chamado corretamente

  return (
    <div>
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title} // Já está traduzido no hook
          description={project.description}
          repoLink={project.repoLink}
          siteLink={project.siteLink}
          imageLink={project.imageLink}
          image={project.image}
        />
      ))}
    </div>
  );
}
