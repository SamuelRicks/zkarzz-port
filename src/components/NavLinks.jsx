import { useHomeLayoutContext } from "../pages/HomeLayout";
import { NavLink } from "react-router-dom";
import links from "../utils/links";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar } = useHomeLayoutContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
