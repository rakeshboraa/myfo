"use client"
import { AlignLeft, ArrowLeft, ArrowRight, Dot, ExternalLink, Instagram, Linkedin, Share, Twitter } from "lucide-react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import KeyFeatures from "@/components/KeyFeatures";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex container mx-auto ">
        <div className="flex-4">
          <div className="px-4 ">
            <div className="mx-auto border-l flex border-r">
              <div className="pb-20 flex-[3.129] px-4">
                <div className="w-[157px] pt-4">
                  <img src="main_logo.png" />
                </div>
                <div className="w-full mt-[40px]  rounded">
                  <img src="hher.png" className="w-full object-contain  " />
                </div>
                <div>
                  <div className="flex mt-16 gap-3">
                    <div className="flex-1">
                      <h1 className="text-[23px]">Why Choose MYFO?</h1>
                      <p className="text-[15px]">Our platform brings the tools and features you need into one place.</p>
                    </div>
                    <div className="flex-2">
                      <div className="grid grid-cols-2 gap-5">
                        <div className="w-[264px]">
                          <div className="w-[264px]">
                            <img src="img1.png" className="rounded" />
                          </div>
                          <div className="flex gap-2 items-center mt-3">
                            <Share className="w-3 h-3" />
                            <h1 className="text-[12px]">Holistic Wealth Management</h1>
                          </div>
                          <p className="mt-2 text-[10px]">
                            MYFO consolidates all your financial tools and data into one intuitive platform, offering a comprehensive view of your wealth and empowering you to make informed decisions with ease.
                          </p>
                        </div>
                        <div className="w-[264px]">
                          <div className="w-[264px]">
                            <img src="img1.png" className="rounded" />
                          </div>
                          <div className="flex gap-2 items-center mt-3">
                            <Share className="w-3 h-3" />
                            <h1 className="text-[12px]">Holistic Wealth Management</h1>
                          </div>
                          <p className="mt-2 text-[10px]">
                            MYFO consolidates all your financial tools and data into one intuitive platform, offering a comprehensive view of your wealth and empowering you to make informed decisions with ease.
                          </p>
                        </div>
                        <div className="w-[264px]">
                          <div className="w-[264px]">
                            <img src="img1.png" className="rounded" />
                          </div>
                          <div className="flex gap-2 items-center mt-3">
                            <Share className="w-3 h-3" />
                            <h1 className="text-[12px]">Holistic Wealth Management</h1>
                          </div>
                          <p className="mt-2 text-[10px]">
                            MYFO consolidates all your financial tools and data into one intuitive platform, offering a comprehensive view of your wealth and empowering you to make informed decisions with ease.
                          </p>
                        </div>
                        <div className="w-[264px]">
                          <div className="w-[264px]">
                            <img src="img1.png" className="rounded" />
                          </div>
                          <div className="flex gap-2 items-center mt-3">
                            <Share className="w-3 h-3" />
                            <h1 className="text-[12px]">Holistic Wealth Management</h1>
                          </div>
                          <p className="mt-2 text-[10px]">
                            MYFO consolidates all your financial tools and data into one intuitive platform, offering a comprehensive view of your wealth and empowering you to make informed decisions with ease.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <KeyFeatures />
                  <Testimonial />
                  <div className="flex mt-10">
                    <img src="heros.png" className="rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex px-4 absolute bg-[#DCDBD5]">
            <div className=" border-l w-full flex-5 pl-4">
              <div className="flex">
                <div className="flex-2 pb-14 flex-col border-r text-[14px] pt-5 ">
                  <div className="flex">
                    <div className="flex-1">
                      Product
                      <ul className="capitalize mt-2 gap-2">
                        <li className="flex justify-between gap-7 pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                        <li className="flex justify-between pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                        <li className="flex justify-between pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                        <li className="flex justify-between pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                      </ul>
                    </div>
                    <div className="flex-1">
                      Company
                      <ul className="capitalize mt-2 gap-2">
                        <li className="flex justify-between pr-13 gap-7 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                        <li className="flex justify-between pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                        <li className="flex justify-between pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                        <li className="flex justify-between pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                      </ul>
                    </div>
                    <div className="flex-1">
                      Resources
                      <ul className="capitalize mt-2 gap-2">
                        <li className="flex justify-between pr-13 gap-7 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                        <li className="flex justify-between pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                        <li className="flex justify-between pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                        <li className="flex justify-between pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex mt-24 flex-col gap-3">
                    <h1 className="text-[23px] ">Join the MYFO community</h1>
                    <p className="text-[16px] w-[90%]">Join our email list and get access to special free insights on financial and wealth management; exclusive only to our subscribers.
                    </p>
                  </div>
                  <div className="flex mt-6 w-[90%] max-w-md rounded-md overflow-hidden border border-gray-300 bg-gray-100">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 bg-gray-100 outline-none"
                    />
                    <button className="px-4 py-2 bg-gray-300 hover:bg-gray-400 transition">
                      Subscribe
                    </button>
                  </div>
                  <div className="h-[210px] mt-10 pr-5 ">
                    <img src="/my.png" className="w-full h-full" />
                  </div>
                </div>
                <div className="flex-2 pb-14  flex items-end border-r">
                  <div className="h-[210px]  px-5 ">
                    <img src="/fo.png" className="w-full h-full" />
                  </div>
                </div>
                <div className="flex-[1.333]">

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${isSidebarOpen ? 'flex-[1.2] ' : 'w-16'} py-4  bg-transparent pr-4 sticky top-0 self-start transition-all duration-300 ease-in-out overflow-hidden`}>
          <div className="flex flex-col ">
            <div className="pt-2">
              <div className="flex justify-between">
                <button
                  onClick={toggleSidebar}
                  className="w-[30px] h-[30px] bg-[#f2f2f2] flex items-center justify-center border border-[#A0A2A0] rounded hover:bg-gray-300 transition-colors"
                >
                  <AlignLeft className="w-4 h-4" />
                </button>
                {isSidebarOpen && (
                  <div className="flex text-[9px] h-[30px] gap-2">
                    <button className="px-2 bg-[#A0A2A0] flex items-center justify-center border border-[#A0A2A0] rounded">
                      Log In
                    </button>
                    <button className="px-2 bg-[#f2f2f2] flex items-center justify-center border border-[#A0A2A0] rounded">
                      Demo
                    </button>
                    <button className="px-2 bg-[#f2f2f2] flex items-center justify-center border border-[#A0A2A0] rounded">
                      9:02 PM NYC
                    </button>
                  </div>
                )}
              </div>
              {isSidebarOpen && (
                <div className="pt-10 flex gap-4">
                  <Instagram className="w-4" />
                  <Linkedin className="w-4" />
                  <Twitter className="w-4" />
                </div>
              )}
            </div>

            {isSidebarOpen && (
              <>
                <div className="">
                  <div className="h-[201px]">
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-between items-center">
                      <h3 className="text-[13px]">News+Blogs</h3>
                    </div>
                    <div className="mt-2 flex gap-2 justify-center items-center bg-[#F2F2F2] p-2 border border-[#A0A2A0] rounded">
                      <div className="w-[90px] h-[40px]">
                        <img src="/hero.png" className="h-full w-full" />
                      </div>
                      <div className="text-[9px] flex flex-col">
                        <div className="flex justify-between items-center">
                          <span>New Blog</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                        <h1>Deloitte's blueprint for the future: How family offices are adapting to complexity in 2024</h1>
                      </div>
                    </div>
                    <div className="mt-2 flex gap-2 justify-center items-center bg-[#F2F2F2] p-2 border border-[#A0A2A0] rounded">
                      <div className="w-[90px] h-[40px]">
                        <img src="/hero.png" className="h-full w-full" />
                      </div>
                      <div className="text-[9px] flex flex-col">
                        <div className="flex justify-between items-center">
                          <span>New Blog</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                        <h1>Deloitte's blueprint for the future: How family offices are adapting to complexity in 2024</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex justify-between items-center">
                    <h3 className="text-[13px]">As Seen On</h3>
                  </div>
                  <div className="mt-2 flex gap-2 justify-center items-center bg-[#F2F2F2] p-2 border border-[#A0A2A0] rounded">
                    <div className="w-[90px] h-[40px]">
                      <img src="/hero.png" className="h-full w-full" />
                    </div>
                    <div className="text-[9px] flex flex-col">
                      <div className="flex justify-between items-center">
                        <span>New Blog</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                      <h1>Deloitte's blueprint for the future: How family offices are adapting to complexity in 2024</h1>
                    </div>
                  </div>
                  <div className="mt-2 flex gap-2 justify-center items-center bg-[#F2F2F2] p-2 border border-[#A0A2A0] rounded">
                    <div className="w-[90px] h-[40px]">
                      <img src="/hero.png" className="h-full w-full" />
                    </div>
                    <div className="text-[9px] flex flex-col">
                      <div className="flex justify-between items-center">
                        <span>New Blog</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                      <h1>Deloitte's blueprint for the future: How family offices are adapting to complexity in 2024</h1>
                    </div>
                  </div>
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </>
  );
}