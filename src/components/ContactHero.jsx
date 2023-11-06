import Wrapper from "../assets/wrappers/ContactHero";
import { Skills } from "../components";
import discord from "../assets/images/discord.svg";

const ContactHero = () => {
  return (
    <Wrapper>
      <p className="about-me">
        I’m interested in freelance opportunities. However, if you have other
        request or question, don’t hesitate to contact me
      </p>
      <div className="info">
        <Skills title="Email" text="sricks.dev@gmail.com" />
      </div>
    </Wrapper>
  );
};

export default ContactHero;
