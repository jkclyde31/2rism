import Image from "next/image"
import { Button } from "@/components/ui/button"


const AboutSection = () => {
  return (
    <div className="max-w-[1128px] w-full flex flex-col md:flex-row justify-between gap-[15px] items-center mx-auto pt-[50px] md:pt-[110px] px-[15px]" >
        {/* left || Text */}
        <div className=" max-w-[548px] w-full text-center md:text-start">
            <h2 className="text-[32px] font-semibold leading-[48px] mb-[5px] md:mb-[32px] ">About Us</h2>
            <p className="text-[16px] leading-[32px] text-[#5B5B5B] mb-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <Button className=" text-[16px] tracking-[0px] text-white px-[25px] py-[12px] bg-[#7B61FF] ">
             Read More
          </Button>
        </div>

        <Image
         src={"/about.png"}
         width={556}
         height={488}
        />

       

       

    </div>
  )
}

export default AboutSection