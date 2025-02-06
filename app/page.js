import { Divide } from "lucide-react";
import PopularDestinations from "./sections/PopularDestinatins";
import HotelsAndRestaurants from "./sections/HotelAndRestaurant";
import TravelTipsAndAdvice from "./sections/TravelTipsAndAdvice";
import Activities from "./sections/Activities";
import AboutSection from "./sections/AboutSection";

export const metadata = {
  title: "Homepage"
}

export default function Home() {
  return (
   <div>
     <PopularDestinations/>
     <HotelsAndRestaurants/>
     <TravelTipsAndAdvice/>
     <Activities/>
     <AboutSection/>




   </div>
  );
}
