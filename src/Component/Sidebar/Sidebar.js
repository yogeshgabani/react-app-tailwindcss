import React from "react";
import "../Sidebar/Sidebar.css"
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import logo_main from "../../Assets/icon/logo.svg";
import logo_main_title from "../../Assets/icon/logo-title.svg";
import aikit_icon from "../../Assets/icon/aikit.svg";
import apps_icon from "../../Assets/icon/apps.svg";
import blog_icon from "../../Assets/icon/blog.svg";
import bootstrap_icon from "../../Assets/icon/bootstrap.svg";
import charts_icon from "../../Assets/icon/charts.svg";
import cms_icon from "../../Assets/icon/cms.svg";
import corehr_icon from "../../Assets/icon/core-hr.svg";
import dashboard_icon from "../../Assets/icon/dashboard.svg";
import employees_icon from "../../Assets/icon/employee.svg";
import finance_icon from "../../Assets/icon/finance.svg";
import forms_icon from "../../Assets/icon/forms.svg";
import manage_icon from "../../Assets/icon/manage-client.svg";
import pages_icon from "../../Assets/icon/pages.svg";
import performance_icon from "../../Assets/icon/performance.svg";
import plugin_icon from "../../Assets/icon/plugin.svg";
import projects_icon from "../../Assets/icon/projects.svg";
import reports_icon from "../../Assets/icon/reports.svg";
import svgicon_icon from "../../Assets/icon/svg-icon.svg";
import table_icon from "../../Assets/icon/table.svg";
import tasks_icon from "../../Assets/icon/tasks.svg";
import widget_icon from "../../Assets/icon/widget.svg";










function Sidebar() {

    // menu active index
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (index) => {
        if (activeIndex === index) {
          setActiveIndex(null);
        } else {
          setActiveIndex(index);
        }
      };



    // showmore-less button
    const [showmore, setshowmore] = useState("false");
    const showclick = () => {
        setshowmore(!showmore); 
     };

     // sidemenu open-close button
;












  return (
    <div className= " relative sidemenu-main min-w-[240px] transition-all duration-500 bg-white ease-out">
      <div className="bg-[#2c2c2c] logo-img-sidebar  h-[50px] transition-all duration-500 ease-out flex items-center justify-center gap-2">
        <img className="" src={logo_main} alt="" />
        <img className="logo-title" src={logo_main_title} alt="" />        
      </div>
      <div className="sidemenu transition-all duration-500 ease-out h-[calc(100%-50px)] bg-white fixed w-[240px] overflow-y-auto pt-4 border-r-[1px] border-[#E6E6E6] border-solid ">
        <ul>
          <h4 className="text-[#0d99ff] text-xs font-normal py-[8px] ps-[20px] uppercase">
            your company
          </h4>
          <li className={activeIndex === 0 ? 'active' : 'unactive'}>
            <a className="py-3 px-6 flex menu-hover " href="#" onClick={() => handleClick(0)}>
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
                {/* <IoHomeOutline className="sub-icon sidemenu-icon"  /> */}
                <img src={dashboard_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  dashboard
                </span>
                <IoIosArrowForward className="down-arrow absolute top-0 right-0" />
              </div>
            </a>
            <ul className="sub-menu">
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative  ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Dashboard Light</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative  ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Dashboard Dark</a></li>
            </ul>
          </li>
          <li>
            <a className="py-3 px-6 flex menu-hover" href="#" >
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={employees_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  employees
                </span>
              </div>
            </a>
          </li>
          <li>
            <a className="py-3 px-6 flex menu-hover" href="#">
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={corehr_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  core hr
                </span>
              </div>
            </a>
          </li>
          <li>
            <a className="py-3 px-6 flex menu-hover" href="#">
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={finance_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  finance
                </span>
              </div>
            </a>
          </li>
          <li className={activeIndex === 2 ? 'active' : 'unactive'}> 
            <a className="py-3 px-6 flex menu-hover" href="#" onClick={() => handleClick(2)}>
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={tasks_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  tasks
                </span>
                <IoIosArrowForward className="down-arrow transition-all ease-out duration-500 absolute top-0 right-0" />
              </div>
            </a>
            <ul className="sub-menu">
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative  ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Tasks</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative  ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Task Summary</a></li>
            </ul>
          </li>
          <li>
            <a className="py-3 px-6 flex menu-hover" href="#">
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={performance_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  performance
                </span>
              </div>
            </a>
          </li>
          <li>
            <a className="py-3 px-6 flex menu-hover" href="#">
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={projects_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  projects
                </span>
              </div>
            </a>
          </li>
          <li>
            <a className="py-3 px-6 flex menu-hover" href="#">
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={reports_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  reports
                </span>
              </div>
            </a>
          </li>
          <li>
            <a className="py-3 px-6 flex menu-hover" href="#">
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={manage_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  manage clients
                </span>
              </div>
            </a>
          </li>
          <li>
            <a className="py-3 px-6 flex menu-hover" href="#">
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={blog_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  blog
                </span>
                <span className="uppercase bg-[#FF5E5E] text-[8px] text-white ms-1 py-[2px] px-[5px] rounded ">new</span>
              </div>
            </a>
          </li>
          <li>
            <a className="py-3 px-6 flex menu-hover" href="#">
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={svgicon_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  SVG icons
                </span>
                <span className="uppercase bg-[#FF5E5E] text-[8px] text-white ms-1 py-[2px] px-[5px] rounded ">new</span>
              </div>
            </a>
          </li>
          <h4 className="text-[#0d99ff] text-xs font-normal py-[8px] ps-[20px] uppercase">
            our features
          </h4>
          <li className={activeIndex === 3 ? 'active' : 'unactive'}>
            <a className="py-3 px-6 flex menu-hover" href="#" onClick={() => handleClick(3)}>
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={apps_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  APPS
                </span>
                <span className="uppercase bg-[#FF5E5E] text-[8px] text-white ms-1 py-[2px] px-[5px] rounded ">new</span>
                <IoIosArrowForward className="down-arrow absolute top-0 right-0" />
              </div>
            </a>
            <ul className="sub-menu">
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Chat
                <span className="uppercase bg-[#FF5E5E] text-[8px] text-white ms-1 py-[2px] px-[5px] rounded ">new</span></a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Users Manager
                <span className="uppercase bg-[#FF5E5E] text-[8px] text-white ms-1 py-[2px] px-[5px] rounded ">new</span></a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Customer Manager
                <span className="uppercase bg-[#FF5E5E] text-[8px] text-white ms-1 py-[2px] px-[5px] rounded ">new</span></a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Contacts
                <span className="uppercase bg-[#FF5E5E] text-[8px] text-white ms-1 py-[2px] px-[5px] rounded ">new</span></a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Email</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Calendar</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Shop</a></li>
            </ul>
          </li>
          <li className={activeIndex === 4 ? 'active' : 'unactive'}>
            <a className="py-3 px-6 flex menu-hover" href="#" onClick={() => handleClick(4)}>
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={aikit_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  ai kit
                </span>
                <span className="uppercase bg-[#FF5E5E] text-[8px] text-white ms-1 py-[2px] px-[5px] rounded ">new</span>
                <IoIosArrowForward className="down-arrow absolute top-0 right-0" />
              </div>
            </a>
            <ul className="sub-menu">
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Auto Writer</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Sheduler</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Repurpose</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">RSS</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Chatbot</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Fine-tune Models</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">AI Menu Prompts</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Settings</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Export/Import Settings</a></li>
            </ul>
          </li>
          <li className={activeIndex === 5 ? 'active' : 'unactive'}>
            <a className="py-3 px-6 flex menu-hover" href="#" onClick={() => handleClick(5)}>
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={cms_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  CMS
                </span>
                <span className="uppercase bg-[#FF5E5E] text-[8px] text-white ms-1 py-[2px] px-[5px] rounded ">new</span>
                <IoIosArrowForward className="down-arrow absolute top-0 right-0" />
              </div>
            </a>
            <ul className="sub-menu">
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Contents</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Menus</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Email Templetes</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Blog</a></li>
               
            </ul>
          </li>
          <li className={activeIndex === 6 ? 'active' : 'unactive'}>
            <a className="py-3 px-6 flex menu-hover" href="#" onClick={() => handleClick(6)}>
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={charts_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  Charts
                </span>
                <IoIosArrowForward className="down-arrow absolute top-0 right-0" />
              </div>
            </a>
            <ul className="sub-menu"> 
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Flot</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Morris</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Chartjs</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Chartlist</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Sparkline</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Peity</a></li>
            </ul>
          </li>
          <li className={activeIndex === 7 ? 'active' : 'unactive'}>
            <a className="py-3 px-6 flex menu-hover" href="#" onClick={() => handleClick(7)}>
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={bootstrap_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  Bootstrap
                </span>
                <IoIosArrowForward className="down-arrow absolute top-0 right-0" />
              </div>
            </a>
            <div className="sub-menu">
                <div className="overflow-hidden sub-menu-list">
                <ul className={!showmore ? "py-2 h-[230px] show-more-menu" : "py-2 h-[230px]"}>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Accordian</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Alert</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Badge</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Button</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Modal</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Button Group</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">List Group</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Cards</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Carousel</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Dropdown</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Popover</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Progressbar</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Tab</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Typography</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Pagination</a></li>                
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Grid</a></li>
                </ul>
                </div>
                 <a className="py-2 text-[#0d99ff] transition-all duration-500 text-[13px] ps-[40px] font-medium" onClick={showclick} href="#">
                <span className="show-more">Show {showmore ? "More +" : "Less -"}</span>
                </a>
            </div>
          </li>
          <li className={activeIndex === 8 ? 'active' : 'unactive'}>
            <a className="py-3 px-6 flex menu-hover" href="#" onClick={() => handleClick(8)}>
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={plugin_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  plugins
                </span>
                <IoIosArrowForward className="down-arrow absolute top-0 right-0" />
              </div>
            </a>
            <ul className="sub-menu">
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Select 2</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Nestable</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Slider</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Sweet Alert</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Light Gallery</a></li>
            </ul>
          </li>
          <li>
            <a className="py-3 px-6 flex menu-hover" href="#">
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={widget_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  widget
                </span>
              </div>
            </a>
          </li>
          <li className={activeIndex === 9 ? 'active' : 'unactive'}>
            <a className="py-3 px-6 flex " href="#" onClick={() => handleClick(9)}>
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={forms_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  forms
                </span>
                <IoIosArrowForward className="down-arrow absolute top-0 right-0" />
              </div>
            </a>
            <ul className="sub-menu">
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Form Elements</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Wizard</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Editor</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Pickers</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Form Validate</a></li>
            </ul>
          </li>
          <li className={activeIndex === 10 ? 'active' : 'unactive'}>
            <a className="py-3 px-6 flex " href="#" onClick={() => handleClick(10)}>
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={table_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  table
                </span>
                <IoIosArrowForward className="down-arrow absolute top-0 right-0" />
              </div>
            </a>
            <ul className="sub-menu">
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Bootstrap</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Datatable</a></li>
            </ul>
          </li>
          <li className={activeIndex === 11 ? 'active' : 'unactive'}>
            <a className="py-3 px-6 flex " href="#" onClick={() => handleClick(11)}>
              <div className="flex w-full gap-2 relative items-center text-[#2c2c2c]">
              <img src={pages_icon} className="sub-icon sidemenu-icon" alt="" />
                <span className="capitalize text-sm hover:text-[#0d99ff]">
                  pages
                </span>
                <IoIosArrowForward className="down-arrow absolute top-0 right-0" />
              </div>
            </a>
            <ul className="sub-menu">
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Login</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Register</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Error</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Lock Screen</a></li>
                <li className="py-[8px]"><a className=" transition-all duration-500 text-[13px] text-[#888888] relative ps-[40px] hover:ps-[61px] hover:text-[#0d99ff] before:absolute before:w-[6px] before:h-[2px] before:bg-[#0d99ff80] before:top-2/4 before:left-7 before:transition-all before:duration-500 hover:before:w-5" href="#">Empty page</a></li>
            </ul>
          </li>
        </ul>
        <div className="py-3 px-6">
          <button className=" help-desk-btn capitalize bg-[#0d99ff] border-solid border-2 px-3 py-1 text-sm rounded text-white border-[#0d99ff] hover:bg-[#007ed9] hover:border-[#007ed9]">
            help desk
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
