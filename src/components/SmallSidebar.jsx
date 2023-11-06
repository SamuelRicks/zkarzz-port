import Wrapper from "../assets/wrappers/SmallSidebar";
import { IoMdClose } from "react-icons/io";
import Logo from "./Logo";
import { useHomeLayoutContext } from "../pages/HomeLayout";
import NavLinks from "./NavLinks";
import Media from "./Media";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useHomeLayoutContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <button type="button " className="close-btn" onClick={toggleSidebar}>
            <IoMdClose />
          </button>
          <NavLinks />
          <div className="media">
            <Media />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
