"use client"
import { AlignLeft, ArrowLeft, ArrowRight, Dot, ExternalLink, Instagram, Linkedin, Share, Twitter, X } from "lucide-react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import KeyFeatures from "@/components/KeyFeatures";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Changed default to false for mobile-first approach

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row container mx-auto relative">
        {/* Mobile Menu Button - Fixed position for mobile */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden fixed top-4 right-4 z-50 w-10 h-10 bg-white shadow-lg flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          {isSidebarOpen ? <X className="w-5 h-5" /> : <AlignLeft className="w-5 h-5" />}
        </button>

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={toggleSidebar}
          />
        )}

        <div className="flex-4 w-full lg:w-auto">
          <div className="px-2 sm:px-4">
            <div className="mx-auto lg:border-l flex lg:border-r">
              <div className="pb-10 lg:pb-20 flex-[3.129] px-2 sm:px-4 w-full">
                <div className="w-[100px] sm:w-[120px] lg:w-[157px] pt-4">
                  <img src="main_logo.png" alt="MYFO Logo" className="w-full" />
                </div>
                <div className="w-full mt-[20px] sm:mt-[30px] lg:mt-[40px] rounded">
                  <img src="hher.png" className="w-full object-contain" alt="Hero" />
                </div>
                <div>
                  <div className="flex flex-col lg:flex-row mt-8 lg:mt-16 gap-3 lg:gap-3">
                    <div className="flex-1 mb-4 lg:mb-0">
                      <h1 className="text-[18px] sm:text-[20px] lg:text-[23px]">Why Choose MYFO?</h1>
                      <p className="text-[13px] sm:text-[14px] lg:text-[15px]">Our platform brings the tools and features you need into one place.</p>
                    </div>
                    <div className="flex-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
                        <div className="w-full sm:w-[220px] lg:w-[264px]">
                          <div className="w-full sm:w-[220px] lg:w-[264px]">
                            <img src="img1.png" className="rounded w-full" alt="Feature 1" />
                          </div>
                          <div className="flex gap-2 items-center mt-3">
                            <Share className="w-3 h-3" />
                            <h1 className="text-[11px] sm:text-[12px]">Holistic Wealth Management</h1>
                          </div>
                          <p className="mt-2 text-[9px] sm:text-[10px]">
                            MYFO consolidates all your financial tools and data into one intuitive platform, offering a comprehensive view of your wealth and empowering you to make informed decisions with ease.
                          </p>
                        </div>
                        <div className="w-full sm:w-[220px] lg:w-[264px]">
                          <div className="w-full sm:w-[220px] lg:w-[264px]">
                            <img src="img1.png" className="rounded w-full" alt="Feature 2" />
                          </div>
                          <div className="flex gap-2 items-center mt-3">
                            <Share className="w-3 h-3" />
                            <h1 className="text-[11px] sm:text-[12px]">Holistic Wealth Management</h1>
                          </div>
                          <p className="mt-2 text-[9px] sm:text-[10px]">
                            MYFO consolidates all your financial tools and data into one intuitive platform, offering a comprehensive view of your wealth and empowering you to make informed decisions with ease.
                          </p>
                        </div>
                        <div className="w-full sm:w-[220px] lg:w-[264px]">
                          <div className="w-full sm:w-[220px] lg:w-[264px]">
                            <img src="img1.png" className="rounded w-full" alt="Feature 3" />
                          </div>
                          <div className="flex gap-2 items-center mt-3">
                            <Share className="w-3 h-3" />
                            <h1 className="text-[11px] sm:text-[12px]">Holistic Wealth Management</h1>
                          </div>
                          <p className="mt-2 text-[9px] sm:text-[10px]">
                            MYFO consolidates all your financial tools and data into one intuitive platform, offering a comprehensive view of your wealth and empowering you to make informed decisions with ease.
                          </p>
                        </div>
                        <div className="w-full sm:w-[220px] lg:w-[264px]">
                          <div className="w-full sm:w-[220px] lg:w-[264px]">
                            <img src="img1.png" className="rounded w-full" alt="Feature 4" />
                          </div>
                          <div className="flex gap-2 items-center mt-3">
                            <Share className="w-3 h-3" />
                            <h1 className="text-[11px] sm:text-[12px]">Holistic Wealth Management</h1>
                          </div>
                          <p className="mt-2 text-[9px] sm:text-[10px]">
                            MYFO consolidates all your financial tools and data into one intuitive platform, offering a comprehensive view of your wealth and empowering you to make informed decisions with ease.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <KeyFeatures />
                  <Testimonial />
                  <div className="flex mt-6 lg:mt-10">
                    <img src="heros.png" className="rounded w-full" alt="Heroes" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto lg:border-l flex lg:border-r bg-[#DCDBD5]">
              <div className="w-full flex-5 pl-2 sm:pl-4">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex-2 pb-8 lg:pb-14 flex-col lg:border-r text-[12px] sm:text-[13px] lg:text-[14px] pt-5">
                    <div className="flex flex-col sm:flex-row lg:flex-row">
                      <div className="flex-1 mb-4 sm:mb-0">
                        Product
                        <ul className="capitalize mt-2 gap-2">
                          <li className="flex justify-between gap-7 pr-4 lg:pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                          <li className="flex justify-between pr-4 lg:pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                          <li className="flex justify-between pr-4 lg:pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                          <li className="flex justify-between pr-4 lg:pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                        </ul>
                      </div>
                      <div className="flex-1 mb-4 sm:mb-0">
                        Company
                        <ul className="capitalize mt-2 gap-2">
                          <li className="flex justify-between pr-4 lg:pr-13 gap-7 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                          <li className="flex justify-between pr-4 lg:pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                          <li className="flex justify-between pr-4 lg:pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                          <li className="flex justify-between pr-4 lg:pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                        </ul>
                      </div>
                      <div className="flex-1">
                        Resources
                        <ul className="capitalize mt-2 gap-2">
                          <li className="flex justify-between pr-4 lg:pr-13 gap-7 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                          <li className="flex justify-between pr-4 lg:pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                          <li className="flex justify-between pr-4 lg:pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                          <li className="flex justify-between pr-4 lg:pr-13 items-center">features <span><MdOutlineKeyboardArrowRight /></span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex mt-12 lg:mt-24 flex-col gap-3">
                      <h1 className="text-[18px] sm:text-[20px] lg:text-[23px]">Join the MYFO community</h1>
                      <p className="text-[14px] sm:text-[15px] lg:text-[16px] w-full lg:w-[90%]">Join our email list and get access to special free insights on financial and wealth management; exclusive only to our subscribers.</p>
                    </div>
                    <div className="flex mt-6 w-full lg:w-[90%] max-w-md rounded-md overflow-hidden border border-gray-300 bg-gray-100">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-3 lg:px-4 py-2 bg-gray-100 outline-none text-sm"
                      />
                      <button className="px-3 lg:px-4 py-2 bg-gray-300 hover:bg-gray-400 transition text-sm">
                        Subscribe
                      </button>
                    </div>
                    <div className="h-[150px] sm:h-[180px] lg:h-[210px] mt-6 lg:mt-10 pr-2 lg:pr-5">
                      <img src="/my.png" className="w-full h-full object-cover" alt="MY" />
                    </div>
                  </div>
                  <div className="flex-2 pb-8 lg:pb-14 flex items-end">
                    <div className="h-[150px] sm:h-[180px] lg:h-[210px] px-2 lg:px-5 w-full">
                      <img src="/fo.png" className="w-full h-full object-cover" alt="FO" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar - Slide from right */}
        <div className={`
          lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="p-4">
            {/* Mobile Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={toggleSidebar}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="flex gap-2 mb-6">
              <button className="flex-1 px-4 py-2 bg-[#A0A2A0] text-white text-sm rounded-lg">
                Log In
              </button>
              <button className="px-4 py-2 bg-gray-100 border border-gray-300 text-sm rounded-lg">
                Demo
              </button>
            </div>

            {/* Time Display */}
            <div className="mb-6 p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">9:02 PM NYC</span>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 mb-8 justify-center">
              <Instagram className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
            </div>

            {/* News & Blogs Section */}
            <div className="mb-8">
              <h3 className="text-base font-medium mb-4">News + Blogs</h3>
              
              <div className="space-y-3">
                <div className="flex gap-3 p-3 bg-gray-50 rounded-lg border">
                  <div className="w-16 h-12 flex-shrink-0">
                    <img src="/hero.png" className="w-full h-full object-cover rounded" alt="Blog" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs text-gray-500">New Blog</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </div>
                    <h4 className="text-sm font-medium leading-tight line-clamp-2">
                      Deloitte's blueprint for the future: How family offices are adapting to complexity in 2024
                    </h4>
                  </div>
                </div>

                <div className="flex gap-3 p-3 bg-gray-50 rounded-lg border">
                  <div className="w-16 h-12 flex-shrink-0">
                    <img src="/hero.png" className="w-full h-full object-cover rounded" alt="Blog" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs text-gray-500">New Blog</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </div>
                    <h4 className="text-sm font-medium leading-tight line-clamp-2">
                      Deloitte's blueprint for the future: How family offices are adapting to complexity in 2024
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* As Seen On Section */}
            <div className="mb-8">
              <h3 className="text-base font-medium mb-4">As Seen On</h3>
              
              <div className="space-y-3">
                <div className="flex gap-3 p-3 bg-gray-50 rounded-lg border">
                  <div className="w-16 h-12 flex-shrink-0">
                    <img src="/hero.png" className="w-full h-full object-cover rounded" alt="Media" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs text-gray-500">Featured</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </div>
                    <h4 className="text-sm font-medium leading-tight line-clamp-2">
                      Deloitte's blueprint for the future: How family offices are adapting to complexity in 2024
                    </h4>
                  </div>
                </div>

                <div className="flex gap-3 p-3 bg-gray-50 rounded-lg border">
                  <div className="w-16 h-12 flex-shrink-0">
                    <img src="/hero.png" className="w-full h-full object-cover rounded" alt="Media" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs text-gray-500">Featured</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </div>
                    <h4 className="text-sm font-medium leading-tight line-clamp-2">
                      Deloitte's blueprint for the future: How family offices are adapting to complexity in 2024
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Sidebar - Original behavior preserved */}
        <div className={`
          hidden lg:block
          ${isSidebarOpen ? 'lg:flex-[1.2]' : 'w-16'} 
          py-4 bg-transparent pr-2 lg:pr-4 sticky right-0 top-0 self-start transition-all duration-300 ease-in-out overflow-hidden
        `}>
          <div className="flex flex-col">
            <div className="pt-2">
              <div className="flex justify-between">
                <button
                  onClick={toggleSidebar}
                  className="w-[30px] h-[30px] bg-[#f2f2f2] flex items-center justify-center border border-[#A0A2A0] rounded hover:bg-gray-300 transition-colors"
                >
                  <AlignLeft className="w-4 h-4" />
                </button>
                {isSidebarOpen && (
                  <div className="flex text-[8px] sm:text-[9px] h-[30px] gap-1 sm:gap-2">
                    <button className="px-1 sm:px-2 bg-[#A0A2A0] flex items-center justify-center border border-[#A0A2A0] rounded text-white">
                      Log In
                    </button>
                    <button className="px-1 sm:px-2 bg-[#f2f2f2] flex items-center justify-center border border-[#A0A2A0] rounded">
                      Demo
                    </button>
                    <button className="px-1 sm:px-2 bg-[#f2f2f2] flex items-center justify-center border border-[#A0A2A0] rounded">
                      9:02 PM NYC
                    </button>
                  </div>
                )}
              </div>
              {isSidebarOpen && (
                <div className="pt-6 lg:pt-10 flex gap-3 lg:gap-4">
                  <Instagram className="w-4" />
                  <Linkedin className="w-4" />
                  <Twitter className="w-4" />
                </div>
              )}
            </div>

            {isSidebarOpen && (
              <>
                <div className="mt-4 lg:mt-0">
                  <div className="h-[120px] lg:h-[90px]">
                    {/* Placeholder for content */}
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-between items-center">
                      <h3 className="text-[12px] lg:text-[13px]">News+Blogs</h3>
                    </div>
                    <div className="mt-2 flex gap-2 justify-center items-center bg-[#F2F2F2] p-2 border border-[#A0A2A0] rounded">
                      <div className="w-[70px] lg:w-[59px] h-[30px] lg:h-[40px] flex-shrink-0">
                        <img src="/hero.png" className="h-full w-full object-cover" alt="Blog" />
                      </div>
                      <div className="text-[8px] lg:text-[9px] flex flex-col flex-1">
                        <div className="flex justify-between items-center">
                          <span>New Blog</span>
                          <ExternalLink className="w-3 lg:w-4 h-3 lg:h-4" />
                        </div>
                        <h1 className="line-clamp-2">Deloitte's blueprint for the future: How family offices are adapting to complexity in 2024</h1>
                      </div>
                    </div>
                    <div className="mt-2 flex gap-2 justify-center items-center bg-[#F2F2F2] p-2 border border-[#A0A2A0] rounded">
                      <div className="w-[70px] lg:w-[59px] h-[30px] lg:h-[40px] flex-shrink-0">
                        <img src="/hero.png" className="h-full w-full object-cover" alt="Blog" />
                      </div>
                      <div className="text-[8px] lg:text-[9px] flex flex-col flex-1">
                        <div className="flex justify-between items-center">
                          <span>New Blog</span>
                          <ExternalLink className="w-3 lg:w-4 h-3 lg:h-4" />
                        </div>
                        <h1 className="line-clamp-2">Deloitte's blueprint for the future: How family offices are adapting to complexity in 2024</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex justify-between items-center">
                    <h3 className="text-[12px] lg:text-[13px]">As Seen On</h3>
                  </div>
                  <div className="mt-2 flex gap-2 justify-center items-center bg-[#F2F2F2] p-2 border border-[#A0A2A0] rounded">
                    <div className="w-[70px] lg:w-[59px] h-[30px] lg:h-[40px] flex-shrink-0">
                      <img src="/hero.png" className="h-full w-full object-cover" alt="Blog" />
                    </div>
                    <div className="text-[8px] lg:text-[9px] flex flex-col flex-1">
                      <div className="flex justify-between items-center">
                        <span>New Blog</span>
                        <ExternalLink className="w-3 lg:w-4 h-3 lg:h-4" />
                      </div>
                      <h1 className="line-clamp-2">Deloitte's blueprint for the future: How family offices are adapting to complexity in 2024</h1>
                    </div>
                  </div>
                  <div className="mt-2 flex gap-2 justify-center items-center bg-[#F2F2F2] p-2 border border-[#A0A2A0] rounded">
                    <div className="w-[70px] lg:w-[59px] h-[30px] lg:h-[40px] flex-shrink-0">
                      <img src="/hero.png" className="h-full w-full object-cover" alt="Blog" />
                    </div>
                    <div className="text-[8px] lg:text-[9px] flex flex-col flex-1">
                      <div className="flex justify-between items-center">
                        <span>New Blog</span>
                        <ExternalLink className="w-3 lg:w-4 h-3 lg:h-4" />
                      </div>
                      <h1 className="line-clamp-2">Deloitte's blueprint for the future: How family offices are adapting to complexity in 2024</h1>
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