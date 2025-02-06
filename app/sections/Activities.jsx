'use client'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from "next/image";


const Activities = () => {

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
          perView: 4,
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
          if (instanceRef.current ) {
            instanceRef.current.next()
          }
        }, 50000) // Change slide every 5 seconds
    
        return () => clearInterval(interval)
      }, [instanceRef])


    const acts = [
        {
          image: "/activities/act1.png",
          title: "Sailing",
        },
        {
          image: "/activities/act2.png",
          title: "Climbing",
        },
        {
          image: "/activities/act3.png",
          title: "Skiing",
        },
        {
          image: "/activities/act4.png",
          title: "Hiking",
        },
      ];

      

  return (
    <div className="inner-row">
        <div className="flex w-full justify-between items-center mt-[120px] mb-[64px]">
           <h2 className="text-[32px] font-semibold text-start">Activities</h2>
           <Button className=" text-[16px] tracking-[0px] text-white px-[25px] py-[12px] bg-[#7B61FF]">
             View all
           </Button>     
        </div>

           {/* Slider Section */}
      <div ref={sliderRef} className='keen-slider'>
        {acts.map((item) => (
            <div key={item.id} className='keen-slider__slide' style={{ width: '100%' }}>
                <img
                    src={item.image}
                    style={{ width: '100%', height: 'auto', display: 'block' }}  // Fill width, maintain aspect ratio
                    alt={item.alt || "Image"}
                    className="mb-[12px]"
                />
                <p className="text-[18px] font-medium tracking-[0]">{item.title}</p>
            </div>      
        ))}
      </div>
    </div>
  )
}

export default Activities