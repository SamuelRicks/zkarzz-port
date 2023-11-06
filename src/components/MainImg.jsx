import Wrapper from "../assets/wrappers/MainImg";
import main from "../assets/images/main.svg";
import circle from "../assets/images/circle.svg";

const MainImg = () => {
  return (
    <Wrapper>
      <div className="main-img">
        <img src={main} alt="bird" className="img front-main" />
        <img src={circle} alt="background circle" className="img back-main" />
      </div>
    </Wrapper>
  );
};

export default MainImg;
