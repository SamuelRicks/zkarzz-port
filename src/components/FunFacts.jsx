import Wrapper from "../assets/wrappers/FunFacts";

const FunFacts = ({ text }) => {
  return (
    <Wrapper>
      <div className="box-inside">
        <p>{text}</p>
      </div>
    </Wrapper>
  );
};

export default FunFacts;
