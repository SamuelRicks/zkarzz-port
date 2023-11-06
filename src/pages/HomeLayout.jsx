import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/HomeLayout";
import { BigSidebar, Navbar, SmallSidebar, Footer } from "../components";
import { createContext, useContext, useState } from "react";
import BigNavbar from "../components/BigNavbar";

const homeLayoutContext = createContext();

const HomeLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("is dark theme");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <homeLayoutContext.Provider
      value={{ showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar }}
    >
      <Wrapper>
        <main className="home">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <BigNavbar />
            <Navbar />
            <div className="home-layout">
              <Outlet />
              <Footer />
            </div>
          </div>
        </main>
      </Wrapper>
    </homeLayoutContext.Provider>
  );
};
export const useHomeLayoutContext = () => useContext(homeLayoutContext);
export default HomeLayout;
