import Navbar from "./Navbar/Navbar";
import Banner from "./Banner";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/bg-image.png')", 
        backgroundSize: "cover", 
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "center", 
        borderBottomLeftRadius: "55px", 
        borderBottomRightRadius: "55px", 
        overflow: "hidden", 
      }}

      className="px-[10px] animate-slide-down"
 
    >
      <Navbar />
      <Banner />
    </div>
  );
};

export default Header;