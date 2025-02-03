'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import MenuDropDown from './MenuDropDown';
import NavLogo from './NavLogo';
import NavigationMenu from './NavigationMenu';
import SocialLinks from './SocialLinks';
import { navLinks } from './navLinks';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    hidden: { 
      y: 20,
      opacity: 0
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <nav className='sticky top-0 bg-navBg border-b z-50'>
        <div className='mx-auto max-w-[1720px] px-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-16 md:h-20 items-center'>
            <MenuDropDown 
              setIsMobileMenuOpen={toggleMobileMenu} 
              isMobileMenuOpen={isMobileMenuOpen}
            />
            <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-between'>
              <NavLogo/>
              <NavigationMenu navLinks={navLinks}/>
              <SocialLinks/>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className='md:hidden fixed inset-0 bg-navBg z-[70] flex flex-col'
          >
            {/* Top Bar with Close Button */}
            <div className="h-16 flex items-center px-2 sm:px-6 lg:px-8">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-md p-2 text-white  focus:outline-none"
              >
                <X size={24} />
              </button>
              <div className="flex-1 flex justify-center">
                <NavLogo />
              </div>
            </div>

            {/* Centered Navigation Links */}
            <motion.div 
              className='flex-1 flex flex-col items-center justify-center px-4 space-y-6'
              variants={mobileMenuVariants}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.id}
                  variants={menuItemVariants}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      ${pathname === `${link.href}` ? 'text-white' : 'text-white/80'}
                      text-2xl font-medium hover:text-white transition-colors
                      px-4 py-2 block text-center
                    `}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Social Links at Bottom */}
              <motion.div 
                variants={menuItemVariants}
                className="mt-8"
              >
                <SocialLinks mobile={true} />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;