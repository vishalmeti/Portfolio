"use client";
import {useEffect, useState}from "react"
import { usePathname } from "next/navigation";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";

const Header = () => {
  const [header, setheader] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setheader(true) : setheader(false)
    })
  
    return () => {
      window.addEventListener('scroll',scrollYPos)
    }
  })
  
  return (
    <header className={`${header ?'py-4 bg-white shadow-lg dark:bg-accent' :'py-6 dark:bg-transparent'} sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-#fef9f5'}`} >
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <Logo />
          <div className="flex items-center gap-x-6 items-center">
            {/* nav bar */}
            <NavBar
              containerStyles="hidden md:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />

            {/* mobile nav  */}
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
