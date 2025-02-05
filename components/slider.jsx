// Slider.js
'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';

const Slider = ({ slides, autoplayInterval = 3000, breakpoints, slideContent }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: 'free-snap',
      initial: 0,
      slides: {
        perView: 4,
        spacing: 15,
      },
      breakpoints: breakpoints || {
        '(max-width: 767px)': {
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
      // Autoplay plugin
      (slider) => {
        let timeout;
        const autoplay = () => {
          timeout = setTimeout(() => {
            slider.next();
            autoplay();
          }, autoplayInterval);
        };
        slider.on('created', () => {
          autoplay();
        });
        slider.on('dragStarted', () => {
          clearTimeout(timeout);
        });
        slider.on('dragEnded', () => {
          autoplay();
        });
        slider.on('destroyed', () => {
          clearTimeout(timeout);
        });
      },
    ]
  );

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, index) => (
          <div key={index} className="keen-slider__slide">
            {slideContent(slide)}
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
  );
};

export default Slider;