import Wrapper from "../assets/wrappers/Project";
import { ProjectTile, Title } from "../components";
import girl from "../assets/images/girl.svg";

const Projects = () => {
  return (
    <Wrapper>
      <Title title=" Projects" />
      <div className="project-area">
        <ProjectTile
          image={girl}
          purpose="a new way to job seek"
          elements="react vue node javascript"
          title="Jobify"
          link="https://jobify-app-z755.onrender.com"
        />
        <ProjectTile
          image={girl}
          purpose="a new way to job seek"
          elements="react vue node javascript"
          title="Jobify"
          link="https://jobify-app-z755.onrender.com"
        />
        <ProjectTile
          image={girl}
          purpose="a new way to job seek"
          elements="react vue node javascript"
          title="Jobify"
          link="https://jobify-app-z755.onrender.com"
        />
      </div>
    </Wrapper>
  );
};

export default Projects;
