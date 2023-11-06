import Wrapper from "../assets/wrappers/Media";
import github from "../assets/images/github.svg";
import discord from "../assets/images/discord.svg";
import facebook from "../assets/images/facebook.svg";

const Media = () => {
  return (
    <Wrapper>
      <div className="media-container">
        <a href="https://github.com/SamuelRicks/" target="blank">
          <img src={github} alt="github" className="icon github" />
        </a>
        <img src={facebook} alt="facebook" className="icon facebook" />
        <a href="https://discord.gg/6eArjMX2" target="blank">
          <img src={discord} alt="discord" className="icon discord" />
        </a>
      </div>
    </Wrapper>
  );
};

export default Media;
