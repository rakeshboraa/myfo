"use client"
import { AlignLeft, ArrowLeft, ArrowRight, Dot, ExternalLink, Instagram, Linkedin, Share, Twitter } from "lucide-react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

// KeyFeatures Component
import React from 'react'

const KeyFeatures = () => {
    const [hoveredFeature, setHoveredFeature] = useState(null)

    const features = [
        {
            id: 1,
            title: "Smart Sync",
            description: "Enjoy seamless connections between MyFO and various banks and investment institutions, allowing you to consolidate accounts and access fresh investment data quickly",
            hoverContent: {
                title: "Smart Sync",
                description: "Connect to 500+ financial institutions with bank-level security. Automatic data refresh every 15 minutes ensures you always have the latest portfolio information."
            }
        },
        {
            id: 2,
            title: "Portfolio Analytics",
            description: "Advanced AI-powered analytics provide deep insights into your investment performance with customizable dashboards and real-time market data visualization",
            hoverContent: {
                title: "Portfolio Analytics",
                description: "Advanced AI-powered analytics provide deep insights into your investment performance with customizable dashboards and real-time market data visualization",
            }
        },
        {
            id: 3,
            title: "Risk Management",
            description: "Comprehensive risk assessment tools help you understand portfolio volatility and optimize asset allocation for your investment goals",
            hoverContent: {
                title: "Risk Management",
                description: "Comprehensive risk assessment tools help you understand portfolio volatility and optimize asset allocation for your investment goals",
            }
        },
        {
            id: 4,
            title: "Reporting Suite",
            description: "Generate professional-grade reports with customizable templates for personal use or sharing with advisors and stakeholders",
            hoverContent: {
                title: "Reporting Suite",
                description: "Generate professional-grade reports with customizable templates for personal use or sharing with advisors and stakeholders",
            }
        }
    ]

    const FeatureCard = ({ feature, index }) => {
        const isHovered = hoveredFeature === feature.id
        const currentContent = isHovered ? feature.hoverContent : feature

        return (
            <div
                className="mt-2 transform transition-all duration-300 ease-in-out hover:scale-105"
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
            >
                <div className={`
                    flex flex-col gap-1 p-2 sm:p-3 cursor-pointer rounded
                    border transition-all duration-200 ease-in-out
                    ${isHovered
                        ? 'shadow-lg border-gray-300 '
                        : 'border-gray-300 hover:shadow-md'
                    }
                `}>
                    <div className="flex gap-2 items-center">
                        <button className={`
                            bg-[#F7934C] text-white text-[8px] sm:text-[9px] w-[14px] sm:w-[16px] h-[15px] sm:h-[17px] 
                            flex items-center justify-center rounded font-medium
                            transition-all duration-200
                        `}>
                            {feature.id}
                        </button>
                        <p className={`
                            text-[10px] sm:text-[12px] font-medium transition-colors duration-200
                            ${isHovered ? '' : 'text-gray-800'}
                        `}>
                            {currentContent.title}
                        </p>
                    </div>
                    <p className={`
                        text-[8px] sm:text-[10px] leading-relaxed transition-colors duration-200
                        ${isHovered ? 'text-gray-700' : 'text-gray-600'}
                    `}>
                        {currentContent.description}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col lg:flex-row mt-6 lg:mt-10 gap-0 rounded-xl overflow-hidden">
            <div className="flex-1 bg-[#F2F2F2] h-auto p-3 sm:p-4 lg:p-6">
                <h1 className="text-[18px] sm:text-[20px] lg:text-[23px] pl-2 lg:pl-3 font-semibold text-gray-800 mb-2">
                    Key Features
                </h1>
                {features.map((feature, index) => (
                    <FeatureCard
                        key={feature.id}
                        feature={feature}
                        index={index}
                    />
                ))}
            </div>

            <div className="flex-2 bg-[#D0D0D0] h-auto lg:rounded-e-xl p-3 sm:p-4 lg:p-6 min-h-[200px] lg:min-h-auto">
                <div className="flex gap-2 sm:gap-4 justify-center items-center h-full">
                    {/* Default View */}
                    {!hoveredFeature && (
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center h-full w-full p-2 sm:p-0">
                            <div className="w-full sm:flex-1 h-[200px] sm:h-[312px]">
                                <img
                                    src="/grap1.png"
                                    className="rounded w-full h-full"
                                    alt="Graph 1"
                                />
                            </div>
                            <div className="w-full sm:flex-1 h-[200px] sm:h-[312px]">
                                <img
                                    src="/grap2.png"
                                    className="rounded w-full h-full"
                                    alt="Graph 2"
                                />
                            </div>
                        </div>
                    )}

                    {/* Smart Sync Demo */}
                    {hoveredFeature === 1 && (
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center h-full w-full p-2 sm:p-0">
                            <div className="w-full sm:flex-1 h-[200px] sm:h-[312px]">
                                <img
                                    src="/grap1.png"
                                    className="rounded w-full h-full"
                                    alt="Graph 1"
                                />
                            </div>
                            <div className="w-full sm:flex-1 h-[200px] sm:h-[312px]">
                                <img
                                    src="/grap2.png"
                                    className="rounded w-full h-full"
                                    alt="Graph 2"
                                />
                            </div>
                        </div>
                    )}

                    {/* Portfolio Analytics Demo */}
                    {hoveredFeature === 2 && (
                        <div className="transform transition-all duration-500 w-full max-w-sm">
                            <div className="bg-white/30 rounded p-3 sm:p-4 lg:p-6 backdrop-blur-sm border border-white/40">
                                <h3 className="text-[10px] sm:text-sm font-semibold text-gray-700 mb-3 sm:mb-4">Portfolio Performance</h3>
                                <div className="space-y-2 sm:space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[8px] sm:text-xs text-gray-600">Total Value</span>
                                        <span className="text-sm sm:text-lg font-bold text-green-600">$1,247,390</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[8px] sm:text-xs text-gray-600">Today's Change</span>
                                        <span className="text-[10px] sm:text-sm font-semibold text-green-600">+$12,450 (+1.02%)</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full w-3/4"></div>
                                    </div>
                                    <div className="text-[8px] sm:text-xs text-gray-600 text-center">YTD Performance: +18.3%</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Risk Management Demo */}
                    {hoveredFeature === 3 && (
                        <div className="transform transition-all duration-500 w-full max-w-sm">
                            <div className="bg-white/30 rounded p-3 sm:p-4 lg:p-6 backdrop-blur-sm border border-white/40">
                                <h3 className="text-[10px] sm:text-sm font-semibold text-gray-700 mb-3 sm:mb-4">Risk Assessment</h3>
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[8px] sm:text-xs text-gray-600">Risk Score</span>
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 sm:w-12 h-2 bg-gray-200 rounded-full">
                                                <div className="w-6 sm:w-8 h-2 bg-yellow-500 rounded-full"></div>
                                            </div>
                                            <span className="text-[8px] sm:text-xs font-semibold">Moderate</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-1 sm:gap-2 text-[8px] sm:text-xs">
                                        <div className="bg-white/40 p-1 sm:p-2 rounded">
                                            <div className="text-gray-600">Volatility</div>
                                            <div className="font-semibold">12.5%</div>
                                        </div>
                                        <div className="bg-white/40 p-1 sm:p-2 rounded">
                                            <div className="text-gray-600">Beta</div>
                                            <div className="font-semibold">0.85</div>
                                        </div>
                                    </div>
                                    <div className="text-[8px] sm:text-xs text-center text-gray-600 bg-blue-100/50 p-1 sm:p-2 rounded">
                                        ✓ Well diversified across sectors
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Reporting Suite Demo */}
                    {hoveredFeature === 4 && (
                        <div className="transform transition-all duration-500 w-full max-w-sm">
                            <div className="bg-white/30 rounded p-3 sm:p-4 lg:p-6 backdrop-blur-sm border border-white/40">
                                <h3 className="text-[10px] sm:text-sm font-semibold text-gray-700 mb-3 sm:mb-4">Generate Reports</h3>
                                <div className="space-y-2 sm:space-y-3">
                                    {[
                                        { name: 'Tax Report 2024', icon: '📊', status: 'Ready' },
                                        { name: 'Performance Summary', icon: '📈', status: 'Ready' },
                                        { name: 'Risk Analysis', icon: '⚖️', status: 'Generating...' },
                                        { name: 'Holdings Detail', icon: '📋', status: 'Ready' }
                                    ].map((report, i) => (
                                        <div key={report.name} className="flex items-center justify-between p-1 sm:p-2 bg-white/40 rounded">
                                            <div className="flex items-center gap-1 sm:gap-2">
                                                <span className="text-xs sm:text-sm">{report.icon}</span>
                                                <span className="text-[8px] sm:text-xs text-gray-700">{report.name}</span>
                                            </div>
                                            <span className={`text-[7px] sm:text-xs px-1 sm:px-2 py-1 rounded ${report.status === 'Ready'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {report.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default KeyFeatures