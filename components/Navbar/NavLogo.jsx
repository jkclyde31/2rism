import Link from "next/link"
import logo from '@/public/images/logo.png';
import Image from "next/image";
import { siteInfo } from "@/config/siteInfo";

const NavLogo = () => {
  return (
    <Link className='hidden md:flex flex-shrink-0 items-center' href='/'>
    <Image className='h-10 w-auto' src={logo} alt='PropertyPulse' />
  </Link>
  )
}

export default NavLogo