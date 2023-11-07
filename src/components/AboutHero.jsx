import Wrapper from "../assets/wrappers/AboutHero";

import MainImg from "./MainImg";
import Status from "./Status";

const AboutHero = () => {
  return (
    <Wrapper>
      <div className="section">
        <div className="info">
          <div className="info-left">
            <p>Hello, I am Samuel!</p>
            <p>
              {" "}
              I am a self taught Full-stack developer. I have a variety of
              different skill sets that would make me a great asset to any team.
              I can build a fully funtioning web application from scratch that
              has a smooth user experience.
            </p>
            <p>
              My love for technology is growing daily. As I develope my skills
              and strengthen my knowledge in the industry I hope to create new
              innovative ideas with a cohesive team. I embrace the challeges
              that come my way daily and hope to explore and push the bouderies
              of techology.
            </p>
            <p>
              Z will craft responsive websites where technologies meet
              creativity
            </p>
          </div>
          <div className="info-right">
            <MainImg />
            <Status upper="Currently working on" lower="Portfolio" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutHero;
