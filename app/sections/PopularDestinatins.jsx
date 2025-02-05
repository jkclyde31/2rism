'use client'

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"; // Import Keen Slider CSS
import { useState, useEffect } from "react"; // Import useState and useEffect

// Import the autoplay plugin
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Paris",
      image: "/popular/pd1.png",
      description: "The City of Love and Lights",
    },
    {
      id: 2,
      name: "Tokyo",
      image: "/popular/pd2.png",
      description: "A blend of tradition and modernity",
    },
    {
      id: 3,
      name: "New York",
      image: "/popular/pd3.png",
      description: "The city that never sleeps",
    },
    {
      id: 4,
      name: "Bali",
      image: "/popular/pd4.png",
      description: "Tropical paradise with stunning beaches",
    },
    {
      id: 5,
      name: "Rome",
      image: "/popular/pd5.png",
      description: "The Eternal City",
    },
    {
      id: 6,
      name: "Sydney",
      image: "/popular/pd6.png",
      description: "Harbor city with iconic landmarks",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0); // Track current slide
  const [loaded, setLoaded] = useState(false); // Track if slider is loaded

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      initial: 0,
      slides: {
        perView: 4,
        spacing: 15,
      },
      breakpoints: {
        "(max-width: 767px)": {
          slides: {
            perView: 1,
            spacing: 15,
          },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      // Add the autoplay plugin
      (slider) => {
        let timeout;
        const autoplay = () => {
          timeout = setTimeout(() => {
            slider.next();
            autoplay();
          }, 3000); // Change slide every 3 seconds
        };
        slider.on("created", () => {
          autoplay();
        });
        slider.on("dragStarted", () => {
          clearTimeout(timeout);
        });
        slider.on("dragEnded", () => {
          autoplay();
        });
        slider.on("destroyed", () => {
          clearTimeout(timeout);
        });
      },
    ]
  );

  return (
    <section>
      <div className="inner-row relative">
        <h2 className="text-[32px] font-semibold text-start mb-[48px] mt-[120px]">
          Popular Destinations
        </h2>
        <div ref={sliderRef} className="keen-slider">
          {destinations.map((destination) => (
            <div key={destination.id} className="keen-slider__slide">
              <div className="rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600">{destination.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {loaded && instanceRef.current && (
          <div className="absolute -bottom-10 right-4 flex space-x-2">
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
    </section>
  );
};

export default PopularDestinations;