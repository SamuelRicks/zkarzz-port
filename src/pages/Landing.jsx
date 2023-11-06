import Wrapper from "../assets/wrappers/LandingPage";
import { About, Projects, Contact } from "../pages";
import { Hero, Title, Media, Footer } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <Hero />
      <div className="wide-view">
        <Projects />
      </div>
      <div className="wide-view">
        <About />
      </div>
      <div className="wide-view">
        <Contact />
      </div>
    </Wrapper>
  );
};

export default Landing;
