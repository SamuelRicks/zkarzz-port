import Wrapper from "../assets/wrappers/About";
import { AboutHero, Skills, Title } from "../components";
import FunFacts from "../components/FunFacts";

const About = () => {
  return (
    <Wrapper>
      <Title title=" About" />
      <AboutHero />
      <Title title="Skills" />
      {/* <FunFacts
          text={["I like ", <span>pizza</span>, " and ", <span>pasta.</span>]}
        /> */}

      <div className="skill-area">
        <Skills
          title="languages"
          text="Python, Javascritpt, HTML, EJS6, REST, SCSS"
        />
        <Skills title="Databases" text="SQLite, PostgreSQL, Mongo" />
        <Skills
          title="Tools"
          text="VSCode, Git, Postman, ThunderClient, Figma"
        />
        <Skills
          title="FrameWorks"
          text="React, Vue, Discord.js, Flask, Express.js"
        />
      </div>
    </Wrapper>
  );
};

export default About;
