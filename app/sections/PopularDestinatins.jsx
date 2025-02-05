'use client'

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"; // Import Keen Slider CSS

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

  const [sliderRef, instanceRef] = useKeenSlider({
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
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  });


  return (
    <section>
      <div className="inner-row ">
        <h2 className="text-[32px] font-semibold text-start mb-[48px] mt-[120px]">Popular Destinations</h2>
        <div ref={sliderRef} className="keen-slider ">
          {destinations.map((destination) => (
            <div key={destination.id} className="keen-slider__slide">
              <div className=" rounded-lg  overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-gray-600">{destination.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;