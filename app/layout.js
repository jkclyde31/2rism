import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "../components/Footer";
import { SiteInfoProvider } from "@/providers/SiteInfoProvider";
// import AuthProvider from "@/components/AuthProvider";
import AnimationWrapper from "@/providers/AnimationWrapper";

export const metadata = {
  title: {
    template: "%s | NextJS Template",
    default: "NextJS Template"
  },
  description: "NextJS Template",
};

export default function RootLayout({ children }) {
  return (
    // <AuthProvider>
    <html lang="en">
      <body className={`antialiased`}>
      <AnimationWrapper>  
        <SiteInfoProvider>
          <Navbar/>
          {children}
          <Footer/>
        </SiteInfoProvider>
      </AnimationWrapper>  
      </body>
    </html>
    // </AuthProvider>
  );
}
