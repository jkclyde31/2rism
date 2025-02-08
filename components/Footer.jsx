import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9] py-16 px-6">
      <div className="container mx-auto max-w-7xl py-[25px]">
        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Logo and Social Section - 3 columns */}
          <div className="col-span-12 lg:col-span-3">
            <Link href="/" className="inline-block mb-4">
              <Image src="/images/dark-logo.png" alt="Zrism Logo" width={100} height={40} />
            </Link>
            <p className="text-gray-500 text-sm mb-6 max-w-xs">
              We always make our customers happy by providing as many choices as possible
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                  <i className="fab fa-facebook-f"></i>
                </span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                  <i className="fab fa-twitter"></i>
                </span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-600">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                  <i className="fab fa-instagram"></i>
                </span>
              </Link>
            </div>
          </div>

          {/* Navigation Links - 2 columns each */}
          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <h3 className="font-medium text-gray-900 mb-4">About</h3>
            <ul className="space-y-3">
              <li><Link href="/about-us" className="text-gray-500 hover:text-gray-900">About Us</Link></li>
              <li><Link href="/features" className="text-gray-500 hover:text-gray-900">Features</Link></li>
              <li><Link href="/news" className="text-gray-500 hover:text-gray-900">News</Link></li>
              <li><Link href="/menu" className="text-gray-500 hover:text-gray-900">Menu</Link></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/why-zrism" className="text-gray-500 hover:text-gray-900">Why Zrism</Link></li>
              <li><Link href="/partner-with-us" className="text-gray-500 hover:text-gray-900">Partner With Us</Link></li>
              <li><Link href="/faq" className="text-gray-500 hover:text-gray-900">FAQ</Link></li>
              <li><Link href="/blog" className="text-gray-500 hover:text-gray-900">Blog</Link></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <h3 className="font-medium text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/account" className="text-gray-500 hover:text-gray-900">Account</Link></li>
              <li><Link href="/support-center" className="text-gray-500 hover:text-gray-900">Support Center</Link></li>
              <li><Link href="/feedback" className="text-gray-500 hover:text-gray-900">Feedback</Link></li>
              <li><Link href="/contact-us" className="text-gray-500 hover:text-gray-900">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter Section - 3 columns */}
          <div className="col-span-12 md:col-span-8 lg:col-span-3">
            <h3 className="font-medium text-gray-900 mb-4">Subscribe on our destination review newsletters</h3>
            <div className="flex">
              <div className="relative flex-1">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-l focus:outline-none focus:border-purple-500"
                />
              </div>
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-r hover:bg-purple-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;