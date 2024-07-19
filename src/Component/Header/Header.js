import React, { useRef, useState } from "react";
import "../Header/Header.css";
import { IoMdMenu, IoIosSearch, IoMdHome } from "react-icons/io";
import { RiFullscreenFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { IoClose, IoSettingsOutline } from "react-icons/io5";
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import { render } from 'react-dom';
import ReactFullscreen from 'react-easyfullscreen';
import acc_img from "../../Assets/Images/1.jpg";
import acc_img_one from "../../Assets/Images/2.jpg";
import profile_icon from "../../Assets/icon/profile.svg";
import myproject_icon from "../../Assets/icon/myproject.svg";
import massage_icon from "../../Assets/icon/massage.svg";
import bell_icon from "../../Assets/icon/bell.svg";
import setting_icon from "../../Assets/icon/setting.svg";
import logout_icon from "../../Assets/icon/logout.svg";



function Header() {

  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };


  const [open, setOpen] = useState(false)

  // full screen
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      // Request full screen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit full screen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setIsFullScreen(!isFullScreen);
  };



  return (


    <div className=" ">
      <div className="pl-[52px] pe-4 h-[50px] bg-[#2c2c2c] flex justify-between items-center">
        <div>
          <form action="">
            <div className="text-white bg-[#202020] h-[48px] flex items-center max-lg:hidden">
              <div className="ps-3">
                <IoIosSearch className="text-3xl" />
              </div>
              <input className="form-control bg-transparent indent-3 outline-none py-3 text-[#6e6e6e] capitalize  px-1 placeholder-[#6e6e6e]" type="text" placeholder="search" />
            </div>
          </form>
        </div>
        <div>
          <ul className="h-full text-white flex items-center gap-5 max-lg:gap-2 max-sm:gap-0">
            <li className={activeIndex === 0 ? "hover:bg-[#202020] relative p-2.5 active-show active:bg-[#202020]" : "unactive hover:bg-[#202020] active:bg-[#202020] relative p-2.5"}>
              <IoSettingsOutline className="text-2xl hover:text-[#0d99ff] cursor-pointer max-sm:text-[18px]" onClick={() => handleClick(0)} />
              <div className="dropdown-menu rounded absolute top-[47px] right-0 w-[18rem] pt-4 overflow-hidden bg-white">
                <div className="h-[370px] overflow-y-scroll p-4">
                  <ul className="timeline relative text-black after:absolute after:top-8 after:bottom-0 after:w-[3px] after:bg-[#E6E6E6]">
                    <li>
                      <div className="relative top-7 z-10 left-[-9px] border-2 border-solid w-5 h-5 bg-white border-[#0d99ff1a] rounded-full p-1 box-shadow after:absolute after:bg-[#0d99ff] after:w-[9px] after:h-[9px] after:rounded-full">
                      </div>
                      <div className="ml-10 relative  border-solid border-l-[3px] py-[5px] ps-4 pe-2 border-[#0d99ff] before:absolute before:h-[5px] before:w-[5px] before:transform before:rotate-45 before:left-[-6px] before:top-4 before:bg-[#0d99ff]">
                        <a className="" href="#">
                          <span className="text-xs text-[#888888bf] mb-1 opacity-[0.8] tracking-tight">10 minutes ago</span>
                          <h6 className="text-[13px] text-[#374557] font-semibold">Youtube, a video-sharing website, goes live <strong className="text-[#0d99ff]">  $500</strong>.</h6>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="relative top-7 z-10 left-[-9px] border-2 border-solid w-5 h-5 bg-white border-[#d3edf5] rounded-full p-1 box-shadow after:absolute after:bg-[#58bad7] after:w-[9px] after:h-[9px] after:rounded-full">
                      </div>
                      <div className="ml-10 relative  border-solid border-l-[3px] py-[5px] ps-4 pe-2 border-[#58bad7] before:absolute before:h-[5px] before:w-[5px] before:transform before:rotate-45 before:left-[-6px] before:top-4 before:bg-[#58bad7]">
                        <a className="" href="#">
                          <span className="text-xs text-[#888888bf] mb-1 opacity-[0.8] tracking-tight">20 minutes ago</span>
                          <h6 className="text-[13px] text-[#374557] font-semibold">New order placed <strong className="text-[#0d99ff]">#XF-2356</strong>.</h6>
                          <p className="text-xs text-[#888888bf]">Quisque a consequat ante Sit amet magna at volutapt...</p>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="relative top-7 z-10 left-[-9px] border-2 border-solid w-5 h-5 bg-white border-[#ffdede] rounded-full p-1 box-shadow after:absolute after:bg-[#FF5E5E] after:w-[9px] after:h-[9px] after:rounded-full">
                      </div>
                      <div className="ml-10 relative  border-solid border-l-[3px] py-[5px] ps-4 pe-2 border-[#FF5E5E] before:absolute before:h-[5px] before:w-[5px] before:transform before:rotate-45 before:left-[-6px] before:top-4 before:bg-[#FF5E5E]">
                        <a className="" href="#">
                          <span className="text-xs text-[#888888bf] mb-1 opacity-[0.8] tracking-tight">30 minutes ago</span>
                          <h6 className="text-[13px] text-[#374557] font-semibold">john just buy your product <strong className="text-[#0d99ff]">Sell $250</strong>.</h6>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="relative top-7 z-10 left-[-9px] border-2 border-solid w-5 h-5 bg-white border-[#daf5e6] rounded-full p-1 box-shadow after:absolute after:bg-[#3AC977] after:w-[9px] after:h-[9px] after:rounded-full">
                      </div>
                      <div className="ml-10 relative  border-solid border-l-[3px] py-[5px] ps-4 pe-2 border-[#3AC977] before:absolute before:h-[5px] before:w-[5px] before:transform before:rotate-45 before:left-[-6px] before:top-4 before:bg-[#3AC977]">
                        <a className="" href="#">
                          <span className="text-xs text-[#888888bf] mb-1 opacity-[0.8] tracking-tight">15 minutes ago</span>
                          <h6 className="text-[13px] text-[#374557] font-semibold">StumbleUpon is acquired by eBay.</h6>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="relative top-7 z-10 left-[-9px] border-2 border-solid w-5 h-5 bg-white border-[#ffeccc] rounded-full p-1 box-shadow after:absolute after:bg-[#FF9F00] after:w-[9px] after:h-[9px] after:rounded-full">
                      </div>
                      <div className="ml-10 relative  border-solid border-l-[3px] py-[5px] ps-4 pe-2 border-[#FF9F00] before:absolute before:h-[5px] before:w-[5px] before:transform before:rotate-45 before:left-[-6px] before:top-4 before:bg-[#FF9F00]">
                        <a className="" href="#">
                          <span className="text-xs text-[#888888bf] mb-1 opacity-[0.8] tracking-tight">20 minutes ago</span>
                          <h6 className="text-[13px] text-[#374557] font-semibold">Mashable, a news website and blog, goes live.</h6>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="relative top-7 z-10 left-[-9px] border-2 border-solid w-5 h-5 bg-white border-[#0d99ff1a] rounded-full p-1 box-shadow after:absolute after:bg-[#6e6e6e] after:w-[9px] after:h-[9px] after:rounded-full">
                      </div>
                      <div className="ml-10 relative  border-solid border-l-[3px] py-[5px] ps-4 pe-2 border-[#6e6e6e] before:absolute before:h-[5px] before:w-[5px] before:transform before:rotate-45 before:left-[-6px] before:top-4 before:bg-[#6e6e6e]">
                        <a className="" href="#">
                          <span className="text-xs text-[#888888bf] mb-1 opacity-[0.8] tracking-tight">10 minutes ago</span>
                          <h6 className="text-[13px] text-[#374557] font-semibold">Mashable, a news website and blog, goes live.</h6>
                        </a>
                      </div>
                    </li>

                  </ul>

                </div>
              </div>
            </li>
            <li className={activeIndex === 1 ? "hover:bg-[#202020] relative p-2.5 active-show active:bg-[#202020]" : "unactive hover:bg-[#202020] relative p-2.5"}>
              <FaRegBell className="text-2xl hover:text-[#0d99ff] cursor-pointer max-sm:text-[18px]" onClick={() => handleClick(1)} />
              <div className="dropdown-menu rounded absolute top-[47px] right-0 w-[18rem] pt-4 overflow-hidden bg-white">
                <div className="h-[370px] overflow-y-scroll p-4 pb-0">
                  <ul>
                    <li className="flex items-center gap-2 pb-3">
                      <div class="">
                        <img class="inline-block h-9 w-9 rounded-full ring-2 ring-white" src={acc_img_one} alt="" />
                      </div>
                      <div>
                        <h6 className="text-[#2c2c2c] text-[13px] font-semibold">Dr sultads Send you Photo</h6>
                        <small className="text-[12px] text-[#888888]">29 July 2020 - 02:26 PM</small>
                      </div>
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <div class="bg-[#d3edf5] text-[#58bad7] w-9 h-9 rounded-full text-[13px] font-bold flex justify-center items-center">
                        KG
                      </div>
                      <div>
                        <h6 className="text-[#2c2c2c] text-[13px] font-semibold">Resport created successfully</h6>
                        <small className="text-[12px] text-[#888888]">29 July 2020 - 02:26 PM</small>
                      </div>
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <div class="bg-[#daf5e6] text-[#3AC977] w-9 h-9 rounded-full text-[13px] font-bold flex justify-center items-center">
                        <IoMdHome className="text-xl" />
                      </div>
                      <div>
                        <h6 className="text-[#2c2c2c] text-[13px] font-semibold">Reminder : Treatment Time!</h6>
                        <small className="text-[12px] text-[#888888]">29 July 2020 - 02:26 PM</small>
                      </div>
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <div class="">
                        <img class="inline-block h-9 w-9 rounded-full ring-2 ring-white" src={acc_img_one} alt="" />
                      </div>
                      <div>
                        <h6 className="text-[#2c2c2c] text-[13px] font-semibold">Dr sultads Send you Photo</h6>
                        <small className="text-[12px] text-[#888888]">29 July 2020 - 02:26 PM</small>
                      </div>
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <div class="bg-[#ffdede] text-[#FF5E5E] w-9 h-9 rounded-full text-[13px] font-bold flex justify-center items-center">
                        KG
                      </div>
                      <div>
                        <h6 className="text-[#2c2c2c] text-[13px] font-semibold">Resport created successfully</h6>
                        <small className="text-[12px] text-[#888888]">29 July 2020 - 02:26 PM</small>
                      </div>
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <div class="bg-[#0d99ff1a] text-[#0d99ff] w-9 h-9 rounded-full text-[13px] font-bold flex justify-center items-center">
                        <IoMdHome className="text-xl" />
                      </div>
                      <div>
                        <h6 className="text-[#2c2c2c] text-[13px] font-semibold">Reminder : Treatment Time!</h6>
                        <small className="text-[12px] text-[#888888]">29 July 2020 - 02:26 PM</small>
                      </div>
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <div class="">
                        <img class="inline-block h-9 w-9 rounded-full ring-2 ring-white" src={acc_img_one} alt="" />
                      </div>
                      <div>
                        <h6 className="text-[#2c2c2c] text-[13px] font-semibold">Dr sultads Send you Photo</h6>
                        <small className="text-[12px] text-[#888888]">29 July 2020 - 02:26 PM</small>
                      </div>
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <div class="bg-[#d3edf5] text-[#58bad7] w-9 h-9 rounded-full text-[13px] font-bold flex justify-center items-center">
                        KG
                      </div>
                      <div>
                        <h6 className="text-[#2c2c2c] text-[13px] font-semibold">Resport created successfully</h6>
                        <small className="text-[12px] text-[#888888]">29 July 2020 - 02:26 PM</small>
                      </div>
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <div class="bg-[#daf5e6] text-[#3AC977] w-9 h-9 rounded-full text-[13px] font-bold flex justify-center items-center">
                        <IoMdHome className="text-xl" />
                      </div>
                      <div>
                        <h6 className="text-[#2c2c2c] text-[13px] font-semibold">Reminder : Treatment Time!</h6>
                        <small className="text-[12px] text-[#888888]">29 July 2020 - 02:26 PM</small>
                      </div>
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <div class="">
                        <img class="inline-block h-9 w-9 rounded-full ring-2 ring-white" src={acc_img_one} alt="" />
                      </div>
                      <div>
                        <h6 className="text-[#2c2c2c] text-[13px] font-semibold">Dr sultads Send you Photo</h6>
                        <small className="text-[12px] text-[#888888]">29 July 2020 - 02:26 PM</small>
                      </div>
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <div class="bg-[#ffdede] text-[#FF5E5E] w-9 h-9 rounded-full text-[13px] font-bold flex justify-center items-center">
                        KG
                      </div>
                      <div>
                        <h6 className="text-[#2c2c2c] text-[13px] font-semibold">Resport created successfully</h6>
                        <small className="text-[12px] text-[#888888]">29 July 2020 - 02:26 PM</small>
                      </div>
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <div class="bg-[#0d99ff1a] text-[#0d99ff] w-9 h-9 rounded-full text-[13px] font-bold flex justify-center items-center">
                        <IoMdHome className="text-xl" />
                      </div>
                      <div>
                        <h6 className="text-[#2c2c2c] text-[13px] font-semibold">Reminder : Treatment Time!</h6>
                        <small className="text-[12px] text-[#888888]">29 July 2020 - 02:26 PM</small>
                      </div>
                    </li>
                  </ul>
                </div>
                <a className="block py-4 px-7 text-center text-[#0d99ff] text-[13px] border-t-2 border-[#f1f1f1] border-solid" href="#">See all notifications</a>
              </div>
            </li>
            <li className="hover:bg-[#202020] p-2.5">
              <MdOutlineEmail className="text-2xl hover:text-[#0d99ff] cursor-pointer max-sm:text-[18px]" onClick={setOpen} />

              <Transition.Root show={open} as={Fragment}>
                <Dialog className="relative z-10" onClose={setOpen}>
                  <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </Transition.Child>
                  <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-500 sm:duration-700" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leaveFrom="translate-x-0" leaveTo="translate-x-full">
                          <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                            <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                              <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                <button type="button" className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" onClick={() => setOpen(false)}>
                                  <span className="absolute -inset-2.5" />
                                  <span className="sr-only">Close panel</span>
                                  <IoClose className="h-6 w-6" aria-hidden="true" />
                                </button>
                              </div>
                            </Transition.Child>
                            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                              <div className="px-4 sm:px-6">
                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                  Panel titlefvfvvf
                                </Dialog.Title>
                              </div>
                              <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </Transition.Root>
            </li>
            <li className="hover:bg-[#202020] p-2.5">
              <RiFullscreenFill className={isFullScreen ? "text-2xl hover:text-[#0d99ff] cursor-pointer max-sm:text-[18px]" : "text-2xl hover:text-[#0d99ff] cursor-pointer max-sm:text-[18px]"} onClick={toggleFullScreen} />

            </li>
            <li className={activeIndex === 2 ? " active-show active:bg-[#202020]" : " unactive hover:bg-[#202020]"}>
              <div className="flex cursor-pointer items-center gap-2 max-sm:ps-1" onClick={() => handleClick(2)}>
                <div class="">
                  <img class="inline-block h-7 w-7 rounded-full ring-2 ring-white" src={acc_img} alt="" />
                </div>
                <div className="max-sm:hidden">
                  <h6 className="text-[13px] text-white font-semibold">Thomas Fleming</h6>
                  <p className="text-xs text-white">info@gmail.com</p>
                </div>
              </div>
              <div className="dropdown-menu acc-dropmenu rounded absolute top-[48px] right-8 w-[275px] py-[6px] bg-white">
                <div className="flex items-center border-b-2 border-[#f1f1f1] border-solid py-[8px] px-[20px]">
                  <div class="mr-2">
                    <img class="inline-block h-11 w-11 rounded-md ring-2 ring-white" src={acc_img} alt="" />
                  </div>
                  <div>
                    <h6 className="text-[13px] text-[#2c2c2c] font-semibold">Thomas Fleming</h6>
                    <p className="text-xs text-[#888888] ">info@gmail.com</p>
                  </div>
                </div>
                <div className="py-[6px]">
                  <ul>
                    <li className="py-2 px-5 text-[#888888] text-[13px] flex items-center gap-4 hover:bg-[#0d99ff1a] hover:cursor-pointer hover:text-[#0d99ff]">
                    <img src={profile_icon} className="" alt="" />progile
                    </li>
                    <li className="py-2 px-5 text-[#888888] text-[13px] flex items-center gap-4 hover:bg-[#0d99ff1a] hover:cursor-pointer hover:text-[#0d99ff]">
                    <img src={myproject_icon} className="" alt="" />My project
                    <span className="text-white bg-[#c5c5c5] text-[11px] rounded-full py-[5px] px-2 leading-3">4</span>
                    </li>
                    <li className="py-2 px-5 text-[#888888] text-[13px] flex items-center gap-4 hover:bg-[#0d99ff1a] hover:cursor-pointer hover:text-[#0d99ff]">
                    <img src={massage_icon} className="" alt="" />Message
                    </li>
                    <li className="py-2 px-5 text-[#888888] text-[13px] flex items-center gap-4 hover:bg-[#0d99ff1a] hover:cursor-pointer hover:text-[#0d99ff] border-b-2 border-[#f1f1f1] border-solid">
                    <img src={bell_icon} className="" alt="" />Notification
                    </li>
                    <li className="py-2 mt-1 px-5 text-[#888888] text-[13px] flex items-center gap-4 hover:bg-[#0d99ff1a] hover:cursor-pointer hover:text-[#0d99ff]">
                    <img src={setting_icon} className="" alt="" />Setting
                    </li>
                    <li className="py-2 px-5 text-[#ff5e5e] text-[13px] flex items-center gap-4 hover:bg-[#0d99ff1a] hover:cursor-pointer">
                    <img src={logout_icon} className="" alt="" />Logout
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>

        </div>


      </div>
    </div>


  );
}

export default Header;
