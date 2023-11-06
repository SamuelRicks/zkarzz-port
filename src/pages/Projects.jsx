import { ProjectTile, Title } from "../components";
import girl from "../assets/images/girl.svg";

const Projects = () => {
  return (
    <div>
      <Title title=" Projects" />
      <ProjectTile
        image={girl}
        purpose="a new way to job seek"
        elements="react vue node javascript"
        title="Jobify"
        link="https://jobify-app-z755.onrender.com"
      />
    </div>
  );
};

export default Projects;
