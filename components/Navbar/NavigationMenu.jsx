import Link from "next/link"
import { usePathname } from 'next/navigation';


const NavigationMenu = ({navLinks}) => {
    const pathname = usePathname();
  return (
                  <div className='hidden md:flex max-w-[683px] justify-between items-center gap-[10px] px-[10px]'>
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`${
                          pathname === link.href ? 'bg-[#1A1A1A]' : ''
                        } text-white hover:bg-[#1A1A1A] hover:text-white rounded-md px-[14px] py-[12px]`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
  )
}

export default NavigationMenu