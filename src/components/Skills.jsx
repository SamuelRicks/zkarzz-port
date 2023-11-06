import Wrapper from "../assets/wrappers/Skills";

const Skills = ({ title, text }) => {
  return (
    <Wrapper>
      <div className="box-inside">{title}</div>
      <div className="box-inside bottom">
        <p>{text}</p>
      </div>
    </Wrapper>
  );
};

export default Skills;
