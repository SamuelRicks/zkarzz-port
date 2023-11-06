import Wrapper from "../assets/wrappers/BigSidebar";
import NavLinks from "./NavLinks";
import line from "../assets/images/line.svg";
import Media from "./Media";
import { useHomeLayoutContext } from "../pages/HomeLayout";

const Bigsidebar = () => {
  const { showSidebar } = useHomeLayoutContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <img src={line} alt="line" />
          </header>
          <div className="media">
            <Media />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Bigsidebar;
