import { Button } from "./ui/button"
import { Globe, MapPin, Calendar, Users } from "lucide-react"
import NavLogo from "./Navbar/NavLogo"


const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-[100px] md:pt-[185px]">
      <div className="block md:hidden">
          <img src="/images/logo.png" alt="Logo" className="w-[200px] pb-[25px] animate-slide-up" data-delay="0.3"/>
      </div>
      <h1 className="text-center md:text-start text-[48px] font-semibold tracking-0 text-white mb-[32px] animate-slide-up" data-delay="0.4">
        Discover the most engaging places
      </h1>
      <Button className="bg-[#7B61FF] text-[18px] tracking-[0px] max-w-[272px] w-full py-[33px] flex items-center justify-center gap-1 mb-[100px] md:mb-[185px] animate-slide-up" data-delay="0.6">
        <Globe size={28} /> 
        Discover on 3D Globe
      </Button>
      
      <div className="hidden md:flex max-w-[1140px] w-full bg-white rounded-[16px] px-[20px] py-[16px]  items-center justify-between mb-[120px] animate-slide-up" data-delay="0.8">
        <div className="flex items-center gap-2 flex-1.5 px-4">
          <MapPin className="text-[#FFA800]" />
          <div className="flex flex-col">
            <span className="text-[14px] text-gray-400">Location</span>
            <span className="text-black text-[16px]">Explore nearby destinations</span>
          </div>
        </div>
        
        
        <div className="flex items-center gap-2 flex-1 px-4">
          <Calendar className="text-[#FFA800]" />
          <div className="flex flex-col">
            <span className="text-[14px] text-gray-400">Activity</span>
            <span className="text-black text-[16px]">All Activities</span>
          </div>
        </div>
        
        
        <div className="flex items-center gap-2 flex-1 px-4">
          <Calendar className="text-[#FFA800]" />
          <div className="flex flex-col">
            <span className="text-[14px] text-gray-400">When</span>
            <span className="text-black text-[16px]">Choose a date</span>
          </div>
        </div>
        
        
        <div className="flex items-center gap-2 flex-1 px-4">
          <Users className="text-[#FFA800]" />
          <div className="flex flex-col">
            <span className="text-[14px] text-gray-400">Guests</span>
            <span className="text-black text-[16px]">1 guest</span>
          </div>
        </div>
        
        <Button className="bg-[#7B61FF] hover:bg-[#6B51DF] px-6 py-7 rounded-xl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
      </div>
    </div>
  )
}

export default Banner