import { Divide } from "lucide-react";
import PopularDestinations from "./sections/PopularDestinatins";
import HotelsAndRestaurants from "./sections/HotelAndRestaurant";
import TravelTipsAndAdvice from "./sections/TravelTipsAndAdvice";

export const metadata = {
  title: "Homepage"
}

export default function Home() {
  return (
   <div>
     <PopularDestinations/>
     <HotelsAndRestaurants/>
     <TravelTipsAndAdvice/>


   </div>
  );
}
