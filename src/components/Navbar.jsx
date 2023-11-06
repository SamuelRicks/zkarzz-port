import Wrapper from "../assets/wrappers/Navbar";
import toggle from "../assets/images/logo2.svg";
import Logo from "./Logo";
import { useHomeLayoutContext } from "../pages/HomeLayout";

const Navbar = () => {
  const { toggleSidebar } = useHomeLayoutContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="logo">
          <a href=".">
            <Logo />
          </a>
        </div>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <img src={toggle} alt="toggle" />
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
