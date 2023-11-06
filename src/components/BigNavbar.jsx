import Wrapper from "../assets/wrappers/BigNavbar";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const BigNavbar = () => {
  return (
    <Wrapper>
      <div className="big-nav ">
        <div className="logo">
          <Logo />
        </div>
        <NavLinks />
      </div>
    </Wrapper>
  );
};

export default BigNavbar;
