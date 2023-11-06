import { HiHashtag } from "react-icons/hi";
import Wrapper from "../assets/wrappers/Title";

const Title = ({ title }) => {
  return (
    <Wrapper>
      <div>
        <h2>
          <span>
            <HiHashtag />
          </span>
          {title}
          <span>
            <hr />
          </span>
        </h2>
      </div>
    </Wrapper>
  );
};

export default Title;
