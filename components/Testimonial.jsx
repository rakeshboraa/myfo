import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useState } from 'react'

const Testimonial = () => {
    const testimonials = [
        {
            text: "With MYFO, I've finally achieved peace of mind. I know if anything happens to me, my family has access to everything they need. It's been an invaluable asset to us.",
            author: "Sarah M"
        },
        {
            text: "The peace of mind MYFO provides is incredible. Everything is organized and accessible when my family needs it most. I can't imagine managing without it.",
            author: "Michael T"
        },
        {
            text: "MYFO has transformed how we handle our family's important information. The security and ease of access make it an essential tool for any family.",
            author: "Jennifer L"
        },
        {
            text: "I love how MYFO keeps everything in one secure place. My spouse and I both feel confident that our information is safe and accessible.",
            author: "David R"
        },
        {
            text: "MYFO is a game-changer for family organization. The intuitive interface and robust security features give us complete confidence.",
            author: "Amanda K"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    React.useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            )
        }, 4000)

        return () => clearInterval(interval)
    }, [isAutoPlaying, testimonials.length])

    const pauseAndResume = () => {
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const goToPrevious = () => {
        pauseAndResume()
        setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
    }

    const goToNext = () => {
        pauseAndResume()
        setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
    }

    return (
        <div className="inline-flex flex-col mt-6 lg:mt-10 p-3 sm:p-4 rounded max-w-full lg:max-w-[800px]">
            <div className='flex flex-col lg:flex-row gap-4 lg:gap-30 justify-between w-full'>
                <h1 className="text-[18px] sm:text-[20px] lg:text-xl mb-2 lg:mb-4">Testimonials</h1>
                <div className="flex-1 lg:flex-auto">
                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full relative flex-shrink-0 pr-4 sm:pr-6 lg:pr-8">
                                    <p className="text-[13px] sm:text-[15px] lg:text-lg leading-relaxed mb-2">
                                        "{testimonial.text}"
                                    </p>
                                    <span className="text-[10px] sm:text-xs lg:text-sm absolute top-0 right-0 text-gray-500">
                                        {index + 1}/{testimonials.length}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-3 lg:mt-4">
                        <h1 className="text-[11px] sm:text-[12px] lg:text-sm font-medium text-gray-600">
                            — {testimonials[currentIndex].author}
                        </h1>
                        <div className="flex gap-1 sm:gap-2">
                            <button
                                onClick={goToPrevious}
                                className="p-1.5 sm:p-2 bg-[#F2F2F2] border border-[#A0A2A0] rounded"
                            >
                                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                            <button
                                onClick={goToNext}
                                className="p-1.5 sm:p-2 bg-[#F2F2F2] border border-[#A0A2A0] rounded"
                            >
                                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial