import Wrapper from "../assets/wrappers/Footer";
import { Logo } from "../components";
import day from "dayjs";

const Footer = () => {
  const year = day().year();
  return (
    <Wrapper>
      <p>&copy; Copyright {year} </p>
    </Wrapper>
  );
};

export default Footer;
