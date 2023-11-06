import Wrapper from "../assets/wrappers/LandingPage";
import { About, Projects, Contact } from "../pages";
import { Hero, Title, Media, Footer } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <Hero />
      <div className="wide-view">
        <Title title="projects" />
        <Projects />
      </div>
      <div className="wide-view">
        <Title title="About Me" />
        <About />
      </div>
      <div className="wide-view">
        <Title title="Contact" />
        <Contact />
      </div>
    </Wrapper>
  );
};

export default Landing;
