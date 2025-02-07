'use client'

import { Button } from '@/components/ui/button'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useState, useEffect } from 'react'
import { MapPin } from 'lucide-react'

const HotelAndRestaurants = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 3,
      spacing: 32,
    },
    breakpoints: {
      '(max-width: 767px)': {
        slides: {
          perView: 1,
          spacing: 15,
        },
      },
    },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next()
      }
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [instanceRef])

  const HotelItems = [
    {
      id: 1,
      name: 'Monastero Santa Rosa Hotel',
      location: 'Salerno, Italy',
      star: 5,
      image: '/hr/hr1.png',
    },
    {
      id: 2,
      name: 'Grand Hotel Tremezzo',
      location: 'Lake Como, Italy',
      star: 3,
      image: '/hr/hr2.png',
    },
    {
      id: 3,
      name: 'The Oberoi Udaivlias',
      location: 'Udaipur, India',
      star: 4,
      image: '/hr/hr3.png',
    },
    {
      id: 4,
      name: 'AKA Beverly Hills',
      location: 'Beverly Hills, USA',
      star: 5,
      image: '/hr/hr4.png',
    },
  ]

  const renderStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'text-[#FFA800]' : 'text-[#D1D1D1]'}>
          ★
        </span>
      )
    }
    return stars
  }

  return (
    <div className='inner-row relative'>
      {/* Text Section || Upper Section */}
      <div className='flex  flex-col md:flex-row w-full justify-between items-center mt-[50px] md:mt-[120px] mb-[20px] md:mb-[64px] gap-[10px]'>
        <h2 className='text-[32px] font-semibold text-start'>
          Hotels and Restaurants
        </h2>
        <Button className='text-[16px] tracking-[0px] text-white px-[25px] py-[12px] bg-[#7B61FF]'>
          View all
        </Button>
      </div>

      {/* Slider Section */}
      <div ref={sliderRef} className='keen-slider'>
        {HotelItems.map((item) => (
          <div key={item.id} className='keen-slider__slide'>
            <img src={item.image} alt={item.name} className='w-full h-auto' />
            <div className=''>
              <h3 className='text-[18px] font-medium tracking-[0px] mt-[12px]'>{item.name}</h3>
              <div className='flex items-center w-full justify-between'>
                <div className="flex gap-[5px]">
                  <MapPin size={16} className='text-[#7B61FF]' />
                  <p className='text-[14px] tracking-[0px] text-[#979797]'>{item.location}</p>
                </div>
                <p className='text-[18px]'>
                  {renderStars(item.star)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {loaded && instanceRef.current && (
        <div className="absolute -bottom-[60px] right-4 flex space-x-2">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default HotelAndRestaurants