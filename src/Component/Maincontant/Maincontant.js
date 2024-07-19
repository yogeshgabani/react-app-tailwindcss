import "../Maincontant/Maincontant.css";
import React, { useEffect, useRef, useState } from "react";
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import home_icon from '../../Assets/icon/dashboard.svg';
import { IoClose } from "react-icons/io5";
import Linechart from "../Charts/Linechart";
import { TableData, Maprecord, Bestsellingproduct, Employee } from "../Charts//Activetable";
import { Menu } from '@headlessui/react'

import { LuCalendarDays } from "react-icons/lu";
import Donut from "../Charts/Donut";
import Projectchart from "../Charts/Projectchart";
import { BiError } from "react-icons/bi";
import { MdDeleteOutline, MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { CiEdit, CiSettings } from "react-icons/ci";
import { FaCheck, FaFileExcel } from "react-icons/fa";
import Earnings from "../Charts/Earnings";
import WorldMap from "https://cdn.skypack.dev/react-world-map@2.3.0";
import chatimg from "../../Assets/Images/pic2.jpg";
import { BsSend } from "react-icons/bs";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Donut2 from "../Charts/Donut2";
import { GoPlus } from "react-icons/go";
import { FiUploadCloud } from "react-icons/fi";











function Maincontant() {


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const [open, setOpen] = useState(false)

  const [open1, setOpen1] = useState(false)

  const [open2, setOpen2] = useState(false)
  const cancelButtonRef = useRef(null)



  const [startDate, setStartDate] = useState(new Date());


  const [selected, onSelect] = React.useState('na');


  return (

    <div>
      <div className="page-title flex gap-1 max-[480px]:flex-wrap justify-between items-center py-[10px] pt-14 px-7 bg-white border border-b-1 border-[#E6E6E6] border-solid max-[524px]:px-[10px]">
        <ul className="flex items-center ">
          <li>
            <h5 className="text-[#2c2c2c] font-medium text-[17px] mr-8 max-sm:text-[15px]">Dashboard</h5>
          </li>
          <li className="flex  items-center text-[#828690] font-medium text-[13px]">
            <img src={home_icon} className="pr-2" alt="" />
            home
          </li>
          <li className="pl-2 text-[#0d99ff] font-medium text-[13px]">
            /  Dashboard
          </li>
        </ul>
        <a className=" text-[#0d99ff] font-medium text-[13px] max-sm:text-[11px]" href="#" onClick={setOpen}>+ Add Task</a>
      </div>



      <div className="p-6  max-[768px]:p-3">


        <div class="grid grid-cols-8 gap-6">
          <div class="col-start-1 col-span-6 max-[1450px]:col-span-full">
            <div className="grid grid-cols-4 gap-6 max-[1199px]:grid-cols-2 max-[768px]:grid-cols-1">
              <div>
                <div className="flex justify-between items-center p-4 pb-0 bg-white">
                  <div>
                    <h6 className="text-[15px] font-normal text-[#2c2c2c]">Total Deposit</h6>
                    <h3 className="text-[24px] font-semibold text-[#2c2c2c]">$1200.00</h3>
                  </div>
                  <div className="w-10 h-10 bg-[#0d99ff1a] flex justify-center items-center rounded-md text-[#0D99FF]">
                    $
                  </div>
                </div>
                <div className="app">
                  <div className="row">
                    <div className="mixed-chart">
                      <Linechart />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="app">
                  <div className="row">
                    <div className="mixed-chart">
                      <Donut />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center p-4 pb-0 bg-white">
                  <div>
                    <h6 className="text-[15px] font-normal text-[#2c2c2c]">Total Deposit</h6>
                    <h3 className="text-[24px] font-semibold text-[#2c2c2c]">$1200.00</h3>
                  </div>
                  <div className="w-10 h-10 bg-[#ffdede66] flex justify-center items-center rounded-md text-[#FF5E5E]">
                    $
                  </div>
                </div>
                <div className="app">
                  <div className="row">
                    <div className="mixed-chart">
                      <Linechart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white ">
                <div className="flex justify-between items-center p-4 pb-0">
                  <div>
                    <h6 className="text-[15px] font-normal text-[#2c2c2c]">Total Deposit</h6>
                    <h3 className="text-[24px] font-semibold text-[#2c2c2c]">20</h3>
                  </div>
                  <div className="w-10 h-10 bg-[#0d99ff1a] flex justify-center items-center rounded-md text-[#0D99FF]">
                    <LuCalendarDays />
                  </div>
                </div>
                <div className="px-4 pt-6 w-full">
                  <div className="flex items-center justify-between">
                    <p className="text-[14px] text-[#888888]" >Tasks Not Finished</p>
                    <p className="text-[14px] text-[#888888]" >20/28</p>
                  </div>
                  <input type="range" value={60} className="w-full" />
                </div>
              </div>
            </div>


            <div className="grid grid-cols-2 max-[1199px]:grid-cols-1 gap-6 pt-6">

              {/* Projects Overview */}

              <div className=" border border-solid border-[#E6E6E6] bg-white rounded">
                <div className="p-6 text-[#2c2c2c] text-[16px] flex max-[524px]:flex-wrap items-center justify-between max-[424px]:flex-wrap  max-[424px]:gap-1">
                  <h4 className="font-semibold">Projects Overview</h4>
                  <ul className="text-[#0d99ff] flex py-[5px]  px-4 items-center gap-2 max-[424px]:flex-wrap  max-[424px]:gap-1 max-[424px]:px-0">
                    <li className="rounded text-[13px] py-[5px] text-white px-4 bg-[#0d99ff]" >Week</li>
                    <li className="rounded text-[13px] py-[5px] px-4 bg-[#f2f2f2]" >Month</li>
                    <li className="rounded text-[13px] py-[5px] px-4 bg-[#f2f2f2]" >Year</li>
                    <li className="rounded text-[13px] py-[5px] px-4 bg-[#f2f2f2]" >All</li>
                  </ul>
                </div>
                <div className="">
                  <Projectchart />
                </div>
                <div className="flex w-full project-detail border-t-2 border-solid border-[#E6E6E6] max-[572px]:hidden">
                  <div className="text-center w-full border-r-[1px] border-solid border-[#E6E6E6] py-4">
                    <h2 className="text-[#2c2c2c] text-[16px]">12,721</h2>
                    <span className="text-[#888888] text-[14px]">Number of Projects</span>
                  </div>
                  <div className="text-center w-full border-r-[1px] border-solid border-[#E6E6E6] py-4">
                    <h2 className="text-[#2d99ff] text-[16px]">721</h2>
                    <span className="text-[#888888] text-[14px]">Active Projects</span>
                  </div>
                  <div className="text-center w-full border-r-[1px] border-solid border-[#E6E6E6] py-4">
                    <h2 className="text-[#2c2c2c] font-semibold text-[16px]">$2,50,523</h2>
                    <span className="text-[#888888] text-[14px]">Revenue</span>
                  </div>
                  <div className="text-center w-full py-4">
                    <h2 className="text-[#3ac977] text-[16px]">12,275h</h2>
                    <span className="text-[#888888] text-[14px]">Working Hours</span>
                  </div>
                </div>
              </div>


              {/* My To Do Items */}
              <div className=" border border-solid border-[#E6E6E6] bg-white rounded">
                <div className="p-6 text-[#2c2c2c] text-[16px] flex items-center justify-between max-[424px]:flex-wrap  max-[424px]:gap-1">
                  <h4 className="font-semibold">My To Do Items</h4>
                  <div>
                    <a className="text-[14px] text-[#2d99ff] mr-3" href="#">View All</a>
                    <a className="text-[14px] text-black" href="#">+ Add To Do</a>
                  </div>
                </div>
                <div className="p-4 border-b-[1px] border-[#E6E6E6] border-solid">
                  <div className="flex justify-between items-center ">
                    <div>
                      <span className="text-[#ff9f00] text-[14px] flex items-center gap-2 mb-2"><BiError className="text-[20px]" />Latest to do's</span>
                      <div className="flex items-center">
                        <input type="checkbox" class="w-4 h-4 mr-1 checked:bg-blue-500" />
                        <label className="text-[14px] font-normal text-[#2c2c2c]" htmlFor="">Compete this projects Monday</label>
                      </div>
                      <span className="text-[14px] text-[#888888]">2023-12-26 07:15:00</span>
                    </div>
                    <div className="flex">
                      <div className="w-7 h-7 flex justify-center items-center rounded bg-[#ffdede66] me-1">
                        <MdDeleteOutline className="text-[#FF5E5E] text-[20px]" />
                      </div>
                      <div className="w-7 h-7 flex justify-center items-center rounded bg-[#0d99ff1a]">
                        <CiEdit className="text-[#0D99FF] text-[20px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-b-[1px] border-[#E6E6E6] border-solid">
                  <div className="flex justify-between items-center ">
                    <div>
                      <span className="text-[#3ac977] text-[14px] flex items-center gap-2 mb-2"><FaCheck className="text-[20px]" />Latest finished to do's</span>
                      <div className="flex items-center">
                        <input type="checkbox" class="w-4 h-4 mr-1 checked:bg-blue-500" />
                        <label className="text-[14px] font-normal text-[#2c2c2c]" htmlFor="">Compete this projects Monday</label>
                      </div>
                      <span className="text-[14px] text-[#888888]">2023-12-26 07:15:00</span>
                    </div>
                    <div className="flex">
                      <div className="w-7 h-7 flex justify-center items-center rounded bg-[#ffdede66] me-1">
                        <MdDeleteOutline className="text-[#FF5E5E] text-[20px]" />
                      </div>
                      <div className="w-7 h-7 flex justify-center items-center rounded bg-[#0d99ff1a]">
                        <CiEdit className="text-[#0D99FF] text-[20px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-b-[1px] border-[#E6E6E6] border-solid">
                  <div className="flex justify-between items-center ">
                    <div>
                      <div className="flex items-center">
                        <input type="checkbox" class="w-4 h-4 mr-1 checked:bg-blue-500" />
                        <label className="text-[14px] font-normal text-[#2c2c2c]" htmlFor="">Compete this projects Monday</label>
                      </div>
                      <span className="text-[14px] text-[#888888]">2023-12-26 07:15:00</span>
                    </div>
                    <div className="flex">
                      <div className="w-7 h-7 flex justify-center items-center rounded bg-[#ffdede66] me-1">
                        <MdDeleteOutline className="text-[#FF5E5E] text-[20px]" />
                      </div>
                      <div className="w-7 h-7 flex justify-center items-center rounded bg-[#0d99ff1a]">
                        <CiEdit className="text-[#0D99FF] text-[20px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-b-[1px] border-[#E6E6E6] border-solid">
                  <div className="flex justify-between items-center ">
                    <div>
                      <div className="flex items-center">
                        <input type="checkbox" class="w-4 h-4 mr-1 checked:bg-blue-500" />
                        <label className="text-[14px] font-normal text-[#2c2c2c]" htmlFor="">Compete this projects Monday</label>
                      </div>
                      <span className="text-[14px] text-[#888888]">2023-12-26 07:15:00</span>
                    </div>
                    <div className="flex">
                      <div className="w-7 h-7 flex justify-center items-center rounded bg-[#ffdede66] me-1">
                        <MdDeleteOutline className="text-[#FF5E5E] text-[20px]" />
                      </div>
                      <div className="w-7 h-7 flex justify-center items-center rounded bg-[#0d99ff1a]">
                        <CiEdit className="text-[#0D99FF] text-[20px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center ">
                    <div>
                      <div className="flex items-center">
                        <input type="checkbox" class="w-4 h-4 mr-1 checked:bg-blue-500" />
                        <label className="text-[14px] font-normal text-[#2c2c2c]" htmlFor="">Compete this projects Monday</label>
                      </div>
                      <span className="text-[14px] text-[#888888]">2023-12-26 07:15:00</span>
                    </div>
                    <div className="flex">
                      <div className="w-7 h-7 flex justify-center items-center rounded bg-[#ffdede66] me-1">
                        <MdDeleteOutline className="text-[#FF5E5E] text-[20px]" />
                      </div>
                      <div className="w-7 h-7 flex justify-center items-center rounded bg-[#0d99ff1a]">
                        <CiEdit className="text-[#0D99FF] text-[20px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="col-span-2 max-[1450px]:col-span-full">

            {/* Total earninggs */}
            <div className=" border border-solid border-[#E6E6E6] bg-white rounded">
              <div className="p-6 text-[#2c2c2c] text-[16px]">
                <h4 className="font-semibold">Total Earnings</h4>
              </div>
              <div className="text-center">
                <h2 className="text-[#2c2c2c] font-semibold text-[38px] mb-2">$6,743.00</h2>
                <ul className="flex justify-center">
                  <li className="text-[14px] my-1 mx-4 text-[#888888]">Day</li>
                  <li className="text-[14px] my-1 mx-4 text-[#888888]">Week</li>
                  <li className="text-[14px] my-1 mx-4 text-[#888888]">Month</li>
                  <li className="text-[14px] my-1 mx-4 text-[#888888]">year</li>
                </ul>
              </div>
              <div>
                <Earnings />
              </div>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-2 max-[1680px]:grid-cols-1 gap-6 pt-6">


          {/* active projects */}

          <div className=" border border-solid border-[#E6E6E6] bg-white rounded">
            <div className="flex justify-between items-center p-6 text-[#2c2c2c] text-[16px]  max-[424px]:flex-wrap  max-[424px]:gap-1">
              <h4 className="font-semibold">Active Projects</h4>
              <button className="text-[13px] flex items-center gap-1 font-normal bg-[#0d99ff1a] text-[#0d99ff] px-3 py-1 rounded hover:text-white hover:bg-[#0d99ff]"><FaFileExcel />Export Report</button>
            </div>
            <div className="overflow-auto h-[280px]">
              <table class="table-auto overflow-x-scroll max-[992px]:min-w-[900px] max-[992px]:overflow-y-scroll w-full">
                <thead>
                  <tr className="text-[#374557] text-[13px]  bg-[#F0F4F9]">
                    <th className="px-4 py-2 font-medium text-start">Project Name</th>
                    <th className="px-4 py-2 font-medium text-start">Project Lead</th>
                    <th className="px-4 py-2 font-medium text-start">Progress</th>
                    <th className="px-4 py-2 font-medium text-start">Assignee</th>
                    <th className="px-4 py-2 font-medium text-start">Status</th>
                    <th className="px-4 py-2 font-medium text-start">Due Date</th>
                  </tr>
                </thead>
                {TableData.map((data, key) => {
                  return (
                    <tbody>
                      <tr className="w-full" key={key}>
                        <td className="px-4 py-2 text-[13px] text-[#888888]">{data.name}</td>
                        <td className="px-4 py-2 text-[13px] text-[#888888]">
                          <div className="flex items-center gap-2">
                            <img className="h-8 w-8 rounded-full" src={data.proj_lead_img} alt="" />
                            <p className="text-[13px]">{data.proj_name}</p>
                          </div>
                        </td>
                        <td className="px-4 py-2 text-[13px] flex items-center gap-1">

                          <div className="h-[6px] bg-[#dbdbdb] w-full">
                            <div style={{ backgroundColor: data.progress_color, width: data.width }} className="h-[6px] rounded">
                            </div>
                          </div>
                          {/* <input style={{ accentColor: data.progress_color }} type="range" /> */}
                          <p style={{ color: data.progress_color }}>{data.progress}</p>
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex -space-x-2 overflow-hidden">
                            <img className="inline-block h-8 rounded-full" src={data.assign_imgone} alt="" />
                            <img className="inline-block h-8 rounded-full" src={data.assign_imgtwo} alt="" />
                            <img className="inline-block h-8 rounded-full" src={data.assign_imgthree} alt="" />
                            <img className="inline-block h-8 rounded-full" src={data.assign_imgfour} alt="" />
                          </div>
                        </td>
                        <td className="px-4 py-2">
                          <span style={{ backgroundColor: data.status_bg, color: data.status_color }} className="py-1 px-3 text-[12px] rounded font-medium">{data.status}</span>
                        </td>
                        <td className="px-4 py-2 text-[13px] text-[#888888]">{data.date}</td>
                      </tr>
                    </tbody>

                  );
                })}
              </table>
            </div>
            <div className="px-3 pt-3 flex justify-between items-center mb-4">
              <p className="text-[#888888] text-[12px]">Showing 1 to 5 of 15 entries</p>
              <div className="flex items-center text-[#0d99ff]">
                <MdKeyboardArrowLeft className="text-[20px]" />
                <a className="text-[13px] mx-1 h-6 w-6 text-center leading-6 rounded bg-[#0d99ff] text-white" href="#">1</a>
                <a className="text-[13px] mx-1 h-6 w-6 text-center leading-6 rounded " href="#">2</a>
                <a className="text-[13px] mx-1 h-6 w-6 text-center leading-6 rounded " href="#">3</a>
                <MdKeyboardArrowRight className="text-[20px]" />
              </div>
            </div>
          </div>

          <div className="border flex border-solid border-[#E6E6E6] bg-white rounded max-[524px]:flex-wrap">

            {/* Active users */}

            <div className="w-full border border-r-[1px] border-[#e6e6e6]">
              <div className="flex justify-between items-center p-6 text-[#2c2c2c] text-[16px]">
                <h4 className="font-semibold">Active Users</h4>
              </div>

              <div>
                <WorldMap selected={selected} onSelect={onSelect} />
              </div>

            </div>
            <div className="px-5 pt-6 w-1/2 overflow-auto h-[380px] max-[524px]:w-full">
              {Maprecord.map((value, key) => {
                return (
                  <div className="flex items-center gap-3 w-full border-[#E6E6E6] border-b-[1px] py-3 border-solid">
                    <div>
                      <img src={value.country} alt="" />
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between items-center">
                        <p className="text-[#2c2c2c] text-[14px]" >{value.title}</p>
                        <p className="text-[#888888] text-[14px]">{value.range}</p>
                      </div>
                      <div className="h-[5px] bg-[#f6f6f6]">
                        <div style={{ width: value.range }} className="h-[5px] rounded bg-[#0d99ff]">
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        <div className="grid grid-cols-10 gap-6 mt-6">

          {/* chat section */}
          <div className=" border-[1px] border-solid col-span-3 p-6 border-[#E6E6E6] bg-white rounded  max-[1490px]:col-span-full">
            <div className="flex justify-between items-center  text-[#2c2c2c] text-[16px]">
              <h4 className="font-semibold">Chat</h4>
              {/* <button className="text-[13px] flex items-center gap-1 font-normal"><CiSettings className="text-[20px]" />Export Report<MdKeyboardArrowDown /></button> */}
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-[13px] text-[#0d99ff]">
                    <CiSettings className="-mr-1 h-5 w-5" aria-hidden="true" />
                    Settings
                    <MdKeyboardArrowDown className="-mr-1 h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="absolute right-0 z-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? 'bg-[#0d99ff1a] text-[#0d99ff]' : '', 'text-[#0d99ff] block px-4 py-2 text-sm')}>
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? 'bg-[#0d99ff1a] text-[#0d99ff]' : 'text-gray-700', 'block px-4 py-2 text-sm')} >
                            Group
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? 'bg-[#0d99ff1a] text-[#0d99ff]' : 'text-gray-700', 'block px-4 py-2 text-sm')} >
                            Chat
                          </a>
                        )}
                      </Menu.Item>

                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className="mt-4">
              <div className="flex">
                <img className="rounded-full w-7 h-7" src={chatimg} alt="" />
                <div className="ms-1 flex flex-col items-start">
                  <p className="bg-[#E8F2FF] px-[15px] py-[10px] border-solid border-0 text-[13px] mb-1 rounded-[10px] rounded-tl-none">Good morning</p>
                  <p className="bg-[#E8F2FF] px-[15px] py-[10px] border-solid border-0 text-[13px] mb-1 rounded-[10px] rounded-tl-none">Can you arrange schedule for next meeting?</p>
                  <span className="text-[11px] text-[#eff2f4] font-bold">12:45 PM</span>
                </div>
              </div>
              <span className="text-center block mb-4 text-[14px] text-[#eff2f4] font-bold">Today</span>
              <div className="flex flex-col items-end">
                <p className="bg-[#CFDDF0] px-[15px] py-[10px] border-solid border-0 text-[13px] mb-1 rounded-[10px] rounded-br-none">Very Good morning</p>
                <p className="bg-[#CFDDF0] px-[15px] py-[10px] border-solid border-0 text-[13px] mb-1 rounded-[10px] rounded-br-none">Okay, I’ll arrange it soon. i noftify you when</p>
                <p className="bg-[#CFDDF0] px-[15px] py-[10px] border-solid border-0 text-[13px] mb-1 rounded-[10px] rounded-br-none">Very Good morning</p>
                <p className="bg-[#CFDDF0] px-[15px] py-[10px] border-solid border-0 text-[13px] mb-1 rounded-[10px] rounded-br-none text-right">Okay, I’ll arrange it soon. i noftify you when it’s done <br />+91-235 2574 2566 <br />kk Sharma<br />pan card eeer2063i</p>
                <span className="text-[11px] text-[#eff2f4] font-bold">9.30 AM</span>
              </div>
            </div>
            <div className="bg-[#f5f5f5] flex justify-between items-center gap-3 p-2 mt-4 rounded">
              <textarea name="text" className="bg-[#f5f5f5] resize-none text-[#6e6e6e] p-2 text-[13px] outline-none w-full" rows={1} id="" placeholder="Hello Hanuman..."></textarea>
              <button className="border-[0d99ff] bg-[#0d99ff] p-2 font-semibold text-[15px] rounded text-white flex items-center gap-1 hover:bg-[#007ed9]">Send<BsSend /></button>

            </div>
          </div>

          {/* best selling product */}
          <div className=" border border-solid col-span-4  border-[#E6E6E6] bg-white rounded   max-[1490px]:col-span-full">
            <div className="flex justify-between items-center p-6 text-[#2c2c2c] text-[16px] max-[390px]:flex-wrap max-[390px]:gap-2">
              <h4 className="font-semibold">Best Selling Products</h4>
              <Menu as="div" className="relative inline-block text-left">
                <div className="flex items-center gap-1">
                  <h1 className="text-[14px] w-full text-[#eff2f4] font-bold">SORT BY</h1>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-[13px] text-[#0d99ff]">
                    Today
                    <MdKeyboardArrowDown className="-mr-1 h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="absolute right-0 z-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? 'bg-[#0d99ff1a] text-[#0d99ff]' : '', 'text-[#0d99ff] block px-4 py-2 text-sm')}>
                            Today
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? 'bg-[#0d99ff1a] text-[#0d99ff]' : 'text-gray-700', 'block px-4 py-2 text-sm')} >
                            Week
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? 'bg-[#0d99ff1a] text-[#0d99ff]' : 'text-gray-700', 'block px-4 py-2 text-sm')} >
                            Month
                          </a>
                        )}
                      </Menu.Item>

                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className="overflow-auto">
              <table class="table-auto overflow-x-scroll max-[1740px]:min-w-[600px] max-[1740px]:overflow-y-scroll w-full">
                <thead>
                  <tr className="text-[#374557] text-[13px]  bg-[#F0F4F9]">
                    <th className="px-4 py-2 font-medium text-start">Project Name</th>
                    <th className="px-4 py-2 font-medium text-start">Price</th>
                    <th className="px-4 py-2 font-medium text-start">Orders</th>
                    <th className="px-4 py-2 font-medium text-start">Stock</th>
                    <th className="px-4 py-2 font-medium text-start">Amount</th>
                  </tr>
                </thead>
                {Bestsellingproduct.map((value, key) => {
                  return (
                    <tbody >
                      <tr className="w-full border-b-[1px] border-[#E6E6E6] border-solid" key={key} >
                        <td className="px-4 py-2 text-[13px] text-[#888888]">
                          <div className="flex items-center gap-2">
                            <img className="h-11 w-11 rounded" src={value.image} alt="" />
                            <div>
                              <h6 className="text-[14px] font-medium text-[#2c2c2c]">{value.title}</h6>
                              <span className="text-[12px] text-[#888888]">{value.date}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-2 text-[13px] text-[#0d99ff]">{value.price}</td>
                        <td className="px-4 py-2 text-[13px] text-[#888888]">{value.order}</td>

                        <td className="px-4 py-2">
                          <span style={{ background: value.bg_color, color: value.text_color }} className="py-1 px-3 text-[12px] rounded font-medium">{value.stock}</span>
                        </td>
                        <td className="px-4 py-2 text-[13px] text-[#888888]">{value.amount}</td>
                      </tr>
                    </tbody>

                  );
                })}
              </table>
            </div>
            <div className="px-3 pt-3 flex justify-between items-center mb-4">
              <p className="text-[#888888] text-[12px]">Showing 1 to 5 of 15 entries</p>
              <div className="flex items-center text-[#0d99ff]">
                <MdKeyboardArrowLeft className="text-[20px]" />
                <a className="text-[13px] mx-1 h-6 w-6 text-center leading-6 rounded bg-[#0d99ff] text-white" href="#">1</a>
                <a className="text-[13px] mx-1 h-6 w-6 text-center leading-6 rounded " href="#">2</a>
                <a className="text-[13px] mx-1 h-6 w-6 text-center leading-6 rounded " href="#">3</a>
                <MdKeyboardArrowRight className="text-[20px]" />
              </div>
            </div>
          </div>

          {/* Upcoming Schedules */}
          <div className=" border border-solid border-[#E6E6E6] bg-white rounded col-span-3 max-[1490px]:col-span-5 max-[1024px]:col-span-full">
            <div className="flex justify-between items-center p-6 text-[#2c2c2c] text-[16px]">
              <h4 className="font-semibold">Upcoming Schedules</h4>
            </div>
            <div className="p-6 pb-0 pt-0">
              <Calendar className="!w-full !border-0" onChange={setStartDate} value={startDate} />
            </div>
            <div className="border-solid border-[#E6E6E6] border-t-[1px]">
              <h6 className="text-[14px] text-[#0d99ff] px-5 py-2 uppercase font-medium">events</h6>
              <div className="px-5 h-[170px] overflow-scroll">
                <div className="border-solid border-[#E6E6E6] border-b-[1px] flex justify-between items-center gap-1">
                  <div className="py-[10px]  flex items-center">
                    <div className="w-[55px] h-[55px] bg-[#0d99ff1a] py-1 rounded text-center">
                      <h6 className="font-semibold text-[20px] text-[#0d99ff]">26</h6>
                      <p className="text-[14px] text-[#2c2c2c]">Mon</p>
                    </div>
                    <div className="ml-1">
                      <h6 className="font-medium text-[15px] text-[#2c2c2c]">Development planning</h6>
                      <span className="text-[13px] text-[#888888]">w3it Technologies</span>
                    </div>
                  </div>
                  <span className="text-[14px] text-[#2c2c2c]">12:05 PM</span>
                </div>
                <div className="border-solid border-[#E6E6E6] border-b-[1px] flex justify-between items-center gap-1">
                  <div className="py-[10px]  flex items-center">
                    <div className="w-[55px] h-[55px] bg-[#0d99ff1a] py-1 rounded text-center">
                      <h6 className="font-semibold text-[20px] text-[#0d99ff]">26</h6>
                      <p className="text-[14px] text-[#2c2c2c]">Mon</p>
                    </div>
                    <div className="ml-1">
                      <h6 className="font-medium text-[15px] text-[#2c2c2c]">Development planning</h6>
                      <span className="text-[13px] text-[#888888]">w3it Technologies</span>
                    </div>
                  </div>
                  <span className="text-[14px] text-[#2c2c2c]">12:05 PM</span>
                </div>
                <div className="border-solid border-[#E6E6E6] border-b-[1px] flex justify-between items-center gap-1">
                  <div className="py-[10px]  flex items-center">
                    <div className="w-[55px] h-[55px] bg-[#0d99ff1a] py-1 rounded text-center">
                      <h6 className="font-semibold text-[20px] text-[#0d99ff]">26</h6>
                      <p className="text-[14px] text-[#2c2c2c]">Mon</p>
                    </div>
                    <div className="ml-1">
                      <h6 className="font-medium text-[15px] text-[#2c2c2c]">Development planning</h6>
                      <span className="text-[13px] text-[#888888]">w3it Technologies</span>
                    </div>
                  </div>
                  <span className="text-[14px] text-[#2c2c2c]">12:05 PM</span>
                </div>
                <div className="border-solid border-[#E6E6E6] border-b-[1px] flex justify-between items-center gap-1">
                  <div className="py-[10px]  flex items-center">
                    <div className="w-[55px] h-[55px] bg-[#0d99ff1a] py-1 rounded text-center">
                      <h6 className="font-semibold text-[20px] text-[#0d99ff]">26</h6>
                      <p className="text-[14px] text-[#2c2c2c]">Mon</p>
                    </div>
                    <div className="ml-1">
                      <h6 className="font-medium text-[15px] text-[#2c2c2c]">Development planning</h6>
                      <span className="text-[13px] text-[#888888]">w3it Technologies</span>
                    </div>
                  </div>
                  <span className="text-[14px] text-[#2c2c2c]">12:05 PM</span>
                </div>
                <div className="border-solid border-[#E6E6E6] border-b-[1px] flex justify-between items-center gap-1">
                  <div className="py-[10px]  flex items-center">
                    <div className="w-[55px] h-[55px] bg-[#0d99ff1a] py-1 rounded text-center">
                      <h6 className="font-semibold text-[20px] text-[#0d99ff]">26</h6>
                      <p className="text-[14px] text-[#2c2c2c]">Mon</p>
                    </div>
                    <div className="ml-1">
                      <h6 className="font-medium text-[15px] text-[#2c2c2c]">Development planning</h6>
                      <span className="text-[13px] text-[#888888]">w3it Technologies</span>
                    </div>
                  </div>
                  <span className="text-[14px] text-[#2c2c2c]">12:05 PM</span>
                </div>
              </div>

            </div>
          </div>

          {/* Projects Status */}
          <div className="border border-solid border-[#E6E6E6] bg-white col-span-3 max-[1490px]:col-span-5 max-[1024px]:col-span-full">
            <div className="flex justify-between items-center p-6 text-[#2c2c2c] text-[16px]">
              <h4 className="font-semibold">Projects Status</h4>
              <Menu as="div" className="relative inline-block text-left">
                <div className="flex items-center gap-1">
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-[13px] text-[#0d99ff]">
                    Today
                    <MdKeyboardArrowDown className="-mr-1 h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="absolute right-0 z-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? 'bg-[#0d99ff1a] text-[#0d99ff]' : '', 'text-[#0d99ff] block px-4 py-2 text-sm')}>
                            Today
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? 'bg-[#0d99ff1a] text-[#0d99ff]' : 'text-gray-700', 'block px-4 py-2 text-sm')} >
                            Week
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? 'bg-[#0d99ff1a] text-[#0d99ff]' : 'text-gray-700', 'block px-4 py-2 text-sm')} >
                            Month
                          </a>
                        )}
                      </Menu.Item>

                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <Donut2 />
          </div>

          {/* employees list data */}
          <div className="border border-solid border-[#E6E6E6] bg-white col-span-7 max-[1490px]:col-span-full">
            <div className="flex justify-between items-center p-6 text-[#2c2c2c] text-[16px]  max-[624px]:flex-wrap  max-[624px]:gap-1">
              <h4 className="font-semibold">Employees</h4>
              <div className="flex items-center gap-2  max-[524px]:flex-wrap  max-[524px]:gap-2">
                <button className="text-[13px] flex items-center gap-1 font-normal bg-[#0d99ff1a] text-[#0d99ff] px-3 py-1 rounded hover:text-white hover:bg-[#0d99ff]"><FaFileExcel />Export Report</button>
                <button className="text-[13px] flex items-center gap-1 font-normal bg-[#0d99ff] text-white px-3 py-1 rounded hover:text-white hover:bg-[#007ed9]" onClick={setOpen1}><GoPlus />Add Employee</button>
                <button className="text-[13px] flex items-center gap-1 font-normal bg-[#2c2c2c] text-white px-3 py-1 rounded hover:text-white hover:bg-[#252525]" onClick={setOpen2}><GoPlus />Invite Employee</button>
              </div>
            </div>
            <div className="overflow-auto h-[280px]">
              <table class="table-auto overflow-x-scroll max-[1099px]:min-w-[992px] max-[1099px]:overflow-y-scroll w-full">
                <thead>
                  <tr className="text-[#374557] text-[13px]  bg-[#F0F4F9]">
                    <th className="px-4 py-2 font-medium text-start">Employee ID</th>
                    <th className="px-4 py-2 font-medium text-start">Employee Name</th>
                    <th className="px-4 py-2 font-medium text-start">Email Address</th>
                    <th className="px-4 py-2 font-medium text-start">Contact Number</th>
                    <th className="px-4 py-2 font-medium text-start">Gender</th>
                    <th className="px-4 py-2 font-medium text-start">Location</th>
                    <th className="px-4 py-2 font-medium text-start">Status</th>
                  </tr>
                </thead>
                {Employee.map((value, key) => {
                  return (
                    <tbody >
                      <tr className="w-full border-b-[1px] border-[#E6E6E6] border-solid" key={key} >
                        <td className="px-4 py-2 text-[13px] text-[#888888]">{value.id}</td>
                        <td className="px-4 py-2 text-[13px] text-[#888888]">
                          <div className="flex items-center gap-2">
                            <img className="h-11 w-11 rounded" src={value.image} alt="" />
                            <div>
                              <h6 className="text-[14px] font-medium text-[#2c2c2c]">{value.title}</h6>
                              <span className="text-[12px] text-[#888888]">{value.job}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-2 text-[13px] text-[#0d99ff]">{value.email}</td>
                        <td className="px-4 py-2 text-[13px] text-[#888888]">{value.contact}</td>
                        <td className="px-4 py-2 text-[13px] text-[#888888]">{value.gender}</td>
                        <td className="px-4 py-2 text-[13px] text-[#888888]">{value.location}</td>

                        <td className="px-4 py-2">
                          <span style={{ background: value.bg_color, color: value.text_color }} className="py-1 px-3 text-[12px] rounded font-medium">{value.status}</span>
                        </td>
                      </tr>
                    </tbody>

                  );
                })}
              </table>
            </div>
            <div className="px-3 pt-3 flex justify-between items-center mb-4">
              <p className="text-[#888888] text-[12px]">Showing 1 to 5 of 15 entries</p>
              <div className="flex items-center text-[#0d99ff]">
                <MdKeyboardArrowLeft className="text-[20px]" />
                <a className="text-[13px] mx-1 h-6 w-6 text-center leading-6 rounded bg-[#0d99ff] text-white" href="#">1</a>
                <a className="text-[13px] mx-1 h-6 w-6 text-center leading-6 rounded " href="#">2</a>
                <a className="text-[13px] mx-1 h-6 w-6 text-center leading-6 rounded " href="#">3</a>
                <MdKeyboardArrowRight className="text-[20px]" />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="p-4 border-t-[1px] border-[#E6E6E6] border-solid text-center">
        <p className="text-[#918f8f] font-[14px] max-[524px]:text-[13px]">Copyright © Developed by <span className="text-[#0d99ff]">DexignZone</span> 2024</p>

      </div>









      {/* task add canvas */}

      <Transition.Root show={open} as={Fragment}>
        <Dialog className="relative z-10" onClose={setOpen}>
          <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-500 sm:duration-700" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leaveFrom="translate-x-0" leaveTo="translate-x-full">
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-[800px] top-[50px]">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white  shadow-xl">
                      <div className="px-4 sm:px-6 bg-white fixed w-full py-6">
                        <Dialog.Title className="text-base flex items-center justify-between  font-semibold leading-6 text-gray-900">
                          <h6 className="text-[16px] text-[#2c2c2c]">Add New Title</h6>
                          <IoClose className="h-8 w-8 bg-[#ffdede] text-[18px] opacity-[0.5] rounded-[6px] p-1 text-[#ff0000] cursor-pointer hover:opacity-[0.75]" aria-hidden="true" onClick={() => setOpen(false)} />
                        </Dialog.Title>
                      </div>
                      <form action="">
                        <div className="grid grid-cols-2 gap-4 mt-20 flex-1 px-4 sm:px-6">
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Title</span>
                              <input type="text" name="email" class="mt-1 px-3 py-[6px] h-11 bg-white  text-[13px] border-[1px]  block w-full rounded-md shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff]" placeholder="Title" />
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] mb-1 after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Project</span>
                              <select class=" row-start-1 col-start-1 bg-white border-[1px] border-[#E6E6E6] text-[13px] h-11 text-[#888888] block w-full rounded-md indent-3  dark:bg-slate-800 ...">
                                <option>Project</option>
                                <option>Salesmate</option>
                                <option>Active Campaign</option>
                                <option>Insightly</option>
                              </select>
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Start Date</span>
                              <input type="date" name="email" class="mt-1 px-3 py-[6px] h-11 bg-white  text-[13px] border-[1px] shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff] block w-full rounded-md" placeholder="" />
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">End Date</span>
                              <input type="date" name="email" class="mt-1 px-3 py-[6px] h-11 bg-white  text-[13px] border-[1px] shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff] block w-full rounded-md" placeholder="" />
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Estimated Hour</span>
                              <input type="time" name="email" class="mt-1 px-3 py-[6px] h-11 bg-white  text-[13px] border-[1px] shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff] block w-full rounded-md" placeholder="" />
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] mb-1 after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Status</span>
                              <select class=" row-start-1 col-start-1 bg-white border-[1px] border-[#E6E6E6] text-[13px] h-11 text-[#888888] block w-full rounded-md indent-3  dark:bg-slate-800 ...">
                                <option>Status</option>
                                <option>In Process</option>
                                <option>Pending</option>
                                <option>Completed</option>
                              </select>
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] mb-1 after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Priority</span>
                              <select class=" row-start-1 col-start-1 bg-white border-[1px] border-[#E6E6E6] text-[13px] h-11 text-[#888888] block w-full rounded-md indent-3  dark:bg-slate-800 ...">
                                <option>Priority</option>
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                              </select>
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] mb-1 after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Category</span>
                              <select class=" row-start-1 col-start-1 bg-white border-[1px] border-[#E6E6E6] text-[13px] h-11 text-[#888888] block w-full rounded-md indent-3  dark:bg-slate-800 ...">
                                <option>Category</option>
                                <option>Designing</option>
                                <option>Development</option>
                                <option>React Developer</option>
                              </select>
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] mb-1 after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Permission</span>
                              <select class=" row-start-1 col-start-1 bg-white border-[1px] border-[#E6E6E6] text-[13px] h-11 text-[#888888] block w-full rounded-md indent-3  dark:bg-slate-800 ...">
                                <option>Permission</option>
                                <option>Public</option>
                                <option>Private</option>
                              </select>
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] mb-1 after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Deadline</span>
                              <select class=" row-start-1 col-start-1 bg-white border-[1px] border-[#E6E6E6] text-[13px] h-11 text-[#888888] block w-full rounded-md indent-3  dark:bg-slate-800 ...">
                                <option>Deadline</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] mb-1 after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">assigned</span>
                              <select class=" row-start-1 col-start-1 bg-white border-[1px] border-[#E6E6E6] text-[13px] h-11 text-[#888888] block w-full rounded-md indent-3  dark:bg-slate-800 ...">
                                <option>assigned</option>
                                <option>Burnard</option>
                                <option>Surgey Brin</option>
                              </select>
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Responsible Person</span>
                              <input type="text" name="text" value="James, Harry" class="mt-1 px-3 py-[6px] h-11 bg-white  text-[13px] border-[1px]  block w-full rounded-md shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff]" placeholder="Title" />
                            </label>
                          </div>
                        </div>
                        <div className="px-4 pt-4 sm:px-6">
                          <label class="block">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Description</span>
                            <textarea rows={"3"} class="mt-1  px-3 py-[6px] h-auto bg-white  text-[13px] border-[1px]  block w-full rounded-md shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff]" />
                          </label>
                        </div>
                        <div className="px-4 pt-4 sm:px-6">
                          <label class="block">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Summary</span>
                            <textarea rows={"3"} class="mt-1  px-3 py-[6px] h-auto bg-white  text-[13px] border-[1px]  block w-full rounded-md shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff]" />
                          </label>
                        </div>
                        <div className="px-7 pt-4 flex mb-14">
                          <button className="py-[11px] px-[25px]  text-[15px] rounded-md bg-[#ffdede] text-[#FF5E5E] border border-solid border-[#ffdede] font-medium leading-5 hover:bg-[#FF5E5E] hover:text-white">Cancel</button>
                          <button className="ml-2 py-[11px] px-[25px] text-[15px] rounded-md bg-[#0d99ff] text-white border border-solid border-[#0d99ff] font-medium leading-5 hover:bg-[#007ed9]">Help Desk</button>
                        </div>
                      </form>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* employee add canvas */}

      <Transition.Root show={open1} as={Fragment}>
        <Dialog className="relative z-10" onClose={setOpen1}>
          <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 max-[524px]:pl-0">
                <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-500 sm:duration-700" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leaveFrom="translate-x-0" leaveTo="translate-x-full">
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-[800px] top-[50px]">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white  shadow-xl">
                      <div className="px-4 sm:px-6 bg-white fixed z-1 w-full py-6">
                        <Dialog.Title className="text-base flex items-center justify-between  font-semibold leading-6 text-gray-900">
                          <h6 className="text-[16px] text-[#2c2c2c]">Add Employee</h6>
                          <IoClose className="h-8 w-8 bg-[#ffdede] text-[18px] opacity-[0.5] rounded-[6px] p-1 text-[#ff0000] cursor-pointer hover:opacity-[0.75]" aria-hidden="true" onClick={() => setOpen1(false)} />
                        </Dialog.Title>
                      </div>
                      <form action="">
                        <div className="px-4 pt-4 sm:px-6 mt-20 mb-4">
                          <label class="block">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Profile Picture</span>
                            <div className="flex flex-col justify-center items-center min-h-6 py-3 border-[1px] boreder-[#DDDFE1] border-dashed rounded">
                              <FiUploadCloud className="text-[#888888] text-[40px] font-normal opacity-[0.2]" />
                              <input className="text-[14px] max-[524px]:w-[200px]" type="file" />
                            </div>
                          </label>
                        </div>
                        <div className="grid grid-cols-2 gap-4  flex-1 px-4 sm:px-6">
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Employee ID</span>
                              <input type="text" name="email" class="mt-1 px-3 py-[6px] h-11 bg-white  text-[13px] border-[1px]  block w-full rounded-md shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff]" />
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] mb-1 after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Employee Name</span>
                              <input type="text" name="email" class="mt-1 px-3 py-[6px] h-11 bg-white  text-[13px] border-[1px]  block w-full rounded-md shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff]" />
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Employee Email</span>
                              <input type="text" name="email" class="mt-1 px-3 py-[6px] h-11 bg-white  text-[13px] border-[1px] shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff] block w-full rounded-md" placeholder="" />
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Password</span>
                              <input type="text" name="email" class="mt-1 px-3 py-[6px] h-11 bg-white  text-[13px] border-[1px] shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff] block w-full rounded-md" placeholder="" />
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Designation</span>
                              <input type="text" name="email" class="mt-1 px-3 py-[6px] h-11 bg-white  text-[13px] border-[1px] shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff] block w-full rounded-md" placeholder="" />
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] mb-1 after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Department</span>
                              <select class=" row-start-1 col-start-1 bg-white border-[1px] border-[#E6E6E6] text-[13px] h-11 text-[#888888] block w-full rounded-md indent-3  dark:bg-slate-800 ...">
                                <option>Please Select</option>
                                <option>Software</option>
                                <option>Designer</option>
                                <option>Developer</option>
                              </select>
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] mb-1 after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Country</span>
                              <select class=" row-start-1 col-start-1 bg-white border-[1px] border-[#E6E6E6] text-[13px] h-11 text-[#888888] block w-full rounded-md indent-3  dark:bg-slate-800 ...">
                                <option>IND</option>
                                <option>USA</option>
                                <option>UK</option>
                                <option>CAN</option>
                              </select>
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] mb-1 after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Mobile</span>
                              <input type="phone" name="email" class="mt-1 px-3 py-[6px] h-11 bg-white  text-[13px] border-[1px]  block w-full rounded-md shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff]" />
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] mb-1 after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Gender</span>
                              <select class=" row-start-1 col-start-1 bg-white border-[1px] border-[#E6E6E6] text-[13px] h-11 text-[#888888] block w-full rounded-md indent-3  dark:bg-slate-800 ...">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                              </select>
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] mb-1 after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Joining Date</span>
                              <input type="date" name="email" class="mt-1 px-3 py-[6px] h-11 bg-white  text-[13px] border-[1px]  block w-full rounded-md shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff]" />
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] mb-1 after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Date of Date</span>
                              <input type="date" name="email" class="mt-1 px-3 py-[6px] h-11 bg-white  text-[13px] border-[1px]  block w-full rounded-md shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff]" />
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] mb-1 after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Reporting To</span>
                              <input type="text" name="email" class="mt-1 px-3 py-[6px] h-11 bg-white  text-[13px] border-[1px]  block w-full rounded-md shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff]" />
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] mb-1 after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Language Select</span>
                              <select class=" row-start-1 col-start-1 bg-white border-[1px] border-[#E6E6E6] text-[13px] h-11 text-[#888888] block w-full rounded-md indent-3  dark:bg-slate-800 ...">
                                <option>English</option>
                                <option>Hindi</option>
                                <option>French</option>
                              </select>
                            </label>
                          </div>
                          <div>
                            <label class="block">
                              <span class="after:content-['*'] mb-1 after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">User Role</span>
                              <select class=" row-start-1 col-start-1 bg-white border-[1px] border-[#E6E6E6] text-[13px] h-11 text-[#888888] block w-full rounded-md indent-3  dark:bg-slate-800 ...">
                                <option>Permanent</option>
                                <option>Part Time</option>
                                <option>Per Hours</option>
                              </select>
                            </label>
                          </div>
                        </div>
                        <div className="px-4 pt-4 sm:px-6">
                          <label class="block">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Address</span>
                            <textarea rows={"3"} class="mt-1  px-3 py-[6px] h-auto bg-white resize-none text-[13px] border-[1px]  block w-full rounded-md shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff]" />
                          </label>
                        </div>
                        <div className="px-4 pt-4 sm:px-6">
                          <label class="block">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">About</span>
                            <textarea rows={"3"} class="mt-1  px-3 py-[6px] h-auto bg-white resize-none  text-[13px] border-[1px]  block w-full rounded-md shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff]" />
                          </label>
                        </div>
                        <div className="px-7 pt-4 flex mb-14">
                          <button className="py-[11px] px-[25px]  text-[15px] rounded-md bg-[#ffdede] text-[#FF5E5E] border border-solid border-[#ffdede] font-medium leading-5 hover:bg-[#FF5E5E] hover:text-white">Cancel</button>
                          <button className="ml-2 py-[11px] px-[25px] text-[15px] rounded-md bg-[#0d99ff] text-white border border-solid border-[#0d99ff] font-medium leading-5 hover:bg-[#007ed9]">Submit</button>
                        </div>
                      </form>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>


      {/* invite employee */}
      <Transition.Root show={open2} as={Fragment}>
        <Dialog className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen2}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0" >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white">
                    <div className=" ">
                      <div className="mt-3 text-center ">
                        <Dialog.Title as="h3" className="text-base flex justify-between items-center border-[#cccccc] border-solid border-b-[1px] py-4 px-7 font-semibold leading-6 text-gray-900">
                          <h4>Invite Employee</h4>
                          <IoClose className="h-8 w-8 bg-[#ffdede] text-[18px] opacity-[0.5] rounded-[6px] p-1 text-[#ff0000] cursor-pointer hover:opacity-[0.75]" aria-hidden="true" onClick={() => setOpen2(false)} />
                        </Dialog.Title>
                        <div className="mt-2 p-7 text-start">
                          <div className="">
                            <label class="block">
                              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Email ID</span>
                              <input type="email" name="email" class="mt-1 px-3 py-[6px] h-11 bg-white  text-[13px] border-[1px]  block w-full rounded-md shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff]" placeholder="hello@gmail.com" />
                            </label>
                          </div>
                          <div className="mt-3">
                            <label class="block">
                              <span class="after:content-['*'] mb-1 after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Employment date</span>
                              <input type="date" name="email" class="mt-1 px-3 py-[6px] h-11 bg-white  text-[13px] border-[1px]  block w-full rounded-md shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff]" />
                            </label>
                          </div>
                          <div className="flex mt-3 justify-between gap-5">
                            <div className="w-full">
                              <label class="block">
                                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">First Name</span>
                                <input type="text" name="email" class="mt-1 px-3 py-[6px] h-11 bg-white  text-[13px] border-[1px] shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff] block w-full rounded-md" placeholder="Name" />
                              </label>
                            </div>
                            <div className="w-full">
                              <label class="block">
                                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Last Name</span>
                                <input type="text" name="email" class="mt-1 px-3 py-[6px] h-11 bg-white  text-[13px] border-[1px] shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] focus:outline-none focus:border-[#0d99ff] block w-full rounded-md" placeholder="Surname" />
                              </label>
                            </div>
                          </div>
                          <div className="mt-3">
                            <label class="block">
                              <span class="after:content-['*'] mb-1 after:ml-0.5 after:text-red-500 block  text-[13px] font-medium text-[#888888]">Send Invitation Email</span>
                              <input type="email" name="email" class="mt-1 px-3 py-[6px] h-11 bg-white text-[13px] border-[1px]  block w-full rounded-md shadow-sm border-[#E6E6E6] placeholder-[3E6E6E6] placeholder:text-center focus:outline-none focus:border-[#0d99ff]" placeholder="+ invite" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 border-[#cccccc] border-solid border-t-[1px] flex justify-end items-center">
                    <button className="py-[11px] max-[524px]:px-[10px] px-[25px]  text-[15px] rounded-md bg-[#ffdede] text-[#FF5E5E] border border-solid border-[#ffdede] font-medium leading-5 hover:bg-[#FF5E5E] hover:text-white" onClick={() => setOpen2(false)}>Close</button>
                    <button className="ml-2 py-[11px] max-[524px]:px-[10px] px-[25px] text-[15px] rounded-md bg-[#0d99ff] text-white border border-solid border-[#0d99ff] font-medium leading-5 hover:bg-[#007ed9]" onClick={() => setOpen2(false)}  ref={cancelButtonRef}>Save Changes</button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div >
  );
}

export default Maincontant;
