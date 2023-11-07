import Wrapper from "../assets/wrappers/Hero";
import MainImg from "./MainImg";
import Status from "./Status";

import { useHomeLayoutContext } from "../pages/HomeLayout";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <Wrapper>
      <div className="container section">
        <div className="info">
          <div className="info-left">
            <h1>
              Zkarzzz... is a <span>Full-stack developer</span> and{" "}
              <span>Visionary</span>
            </h1>
            <p>
              Z will craft responsive websites where technologies meet
              creativity
            </p>

            <NavLink to="contact" key="contact" className="contact-me">
              <button type="button"> Contact me!!!</button>
            </NavLink>
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

export default Hero;
