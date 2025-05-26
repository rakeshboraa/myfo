import React, { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

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

    useEffect(() => {
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

    const goToSlide = (index) => {
        pauseAndResume()
        setCurrentIndex(index)
    }

    return (
        <div className="inline-flex flex-col mt-10 p-4  rounded  max-w-[800px]">
            <div className='flex gap-30 justify-between w-full'>
                <h1 className="text-xl  mb-4">Testimonials</h1>
                <div>
                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full relative flex-shrink-0 pr-8">
                                    <p className="text-lg leading-relaxed mb-2">
                                        "{testimonial.text}"
                                    </p>
                                    <span className="text-sm absolute top-0 right-0 text-gray-500">
                                        {index + 1}/{testimonials.length}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <h1 className="text-sm font-medium text-gray-600">
                            — {testimonials[currentIndex].author}
                        </h1>
                        <div className="flex gap-2">
                            <button
                                onClick={goToPrevious}
                                className="p-2 bg-[#F2F2F2] border border-[#A0A2A0] rounded"
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={goToNext}
                                className="p-2 bg-[#F2F2F2] border border-[#A0A2A0] rounded"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
