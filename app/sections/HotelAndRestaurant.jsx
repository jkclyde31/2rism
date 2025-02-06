// HotelsAndRestaurantsSlider.js
'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';
import Image from 'next/image';

const HotelsAndRestaurantsSlider = () => {
  const hotelsAndRestaurants = [
    {
      id: 1,
      name: 'Monoastero Santa Rosa Hotel',
      location: 'Salerno, Italy',
      image: '/hr/hr1.png',
    },
    {
      id: 2,
      name: 'Grand Hotel Tremezzo',
      location: 'Lake Como, Italy',
      image: '/hr/hr2.png',
    },
    {
      id: 3,
      name: 'The Oberoi Udaivlias',
      location: 'Udaipur, India',
      image: '/hr/hr3.png',
    },
    {
      id: 4,
      name: 'AKA Beverly Hills',
      location: 'Beverly Hills, USA',
      image: '/hr/hr4.png',
    }

  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    initial: 0,
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 767px)': {
        slides: {
          perView: 1,
          spacing: 15,
        },
      },
      '(min-width: 768px) and (max-width: 1023px)': {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="py-12 bg-gray-50">
      <div className="inner-row mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Hotels and Restaurants</h2>
        <div ref={sliderRef} className="keen-slider">
          {hotelsAndRestaurants.map((item) => (
            <div key={item.id} className="keen-slider__slide">
              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <div className="relative h-auto">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={316} // Set the desired width
                    height={380} // Set the desired height
                    layout="responsive" // Use responsive layout
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {loaded && instanceRef.current && (
          <div className="flex justify-center mt-6 space-x-4">
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

export default HotelsAndRestaurantsSlider;