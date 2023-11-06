import Wrapper from "../assets/wrappers/Status";

const Status = ({ upper, lower }) => {
  return (
    <Wrapper>
      <div className="contain-box">
        <div className="status"></div>
        <div className="text">
          <p>{upper}</p>
          <p>
            <span>{lower}</span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Status;
