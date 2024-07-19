import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";
import Maincontant from "./Component/Maincontant/Maincontant";
import { IoMdMenu } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";




function App() {
  let [darkMode, setdarkmode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  const getClassName = () => {
    if (isSmallScreen) {
      return 'hide';
    } else if (isToggled) {
      return 'hide';
    } else {
      return 'show';
    }
  };


  return (
    <div className={getClassName()} >
      <div className="flex fixed w-full z-[12]">
        <Sidebar className="side-menu-data" />
        <div className="w-full relative">
          <Header />
          <div className="absolute top-[-2px] left-[-2px] text-white bg-[#202020] p-3" onClick={handleClick}>
            <IoMdMenu className="text-[28px] menu-icon transition-all duration-500 ease-out hover:cursor-pointer" />
            <GoArrowRight  className="text-[28px] arrow-icon hidden transition-all duration-500 ease-out hover:cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-[calc(100%-240px)] main-contant-data ms-auto transition-all duration-500 ease-out">
        <Maincontant />
      </div>
    </div>
  );
}

export default App;
