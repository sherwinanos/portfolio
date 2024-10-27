"use client";

import { IoMdMenu } from "react-icons/io";
import { Link, animateScroll as scroll } from 'react-scroll';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { useState } from "react";

const Header = () => {
  const navData = [
    { href: "#top", textContent: "Home" },
    { href: "#projects", textContent: "Projects" },
    { href: "#services", textContent: "Services" },
    { href: "#about", textContent: "About" },
    { href: "#contact", textContent: "Contact" },
  ]

  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(false);
  };


  return (
    <header id="header" className="bg-secondary-dark px-4 lg:px-0 ">
      <div className="container lg:mx-auto py-3 flex justify-between items-center">
        <a href="/">
          <Image src="/assets/logo-sherwinanos.svg" alt="Sherwin Anos logo" width="32" height="32" />
        </a>

        {/* DESKTOP MENU */}
        <nav className="lg:flex items-center gap-8 hidden">
          {navData.map(( nav, i ) => (
            <Link 
              aria-label={nav.textContent}
              key={i}
              to={nav.textContent.toLowerCase()}
              smooth={true} 
              duration={500} 
              onClick={handleMenuClick}
              dangerouslySetInnerHTML={{ __html: nav.textContent }}
              className="cursor-pointer"
            />
          ))}

          <Link 
            aria-label="Get a free quote"
            to="contact"
            smooth={true} 
            duration={500} 
            onClick={handleMenuClick}
            className="btn btn-small btn-primary cursor-pointer"
          >Get a free quote</Link>
        </nav>

        {/* MOBILE MENU */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <IoMdMenu className="text-4xl text-primary" />
            </SheetTrigger>

            <SheetContent className="bg-secondary-dark w-[100%] border-0 pt-14">
              <SheetHeader>
                <h5 className="item-start mb-1 uppercase">Menu</h5>
                <nav className="flex flex-col justify-center items-center">
                  {navData.map(( nav, i ) => (
                    <Link 
                      key={i}
                      aria-label={nav.textContent}
                      to={nav.textContent.toLowerCase()}
                      smooth={true} 
                      duration={500} 
                      onClick={handleMenuClick}
                      dangerouslySetInnerHTML={{ __html: nav.textContent }}
                      className="text-2xl mt-6"
                    />
                  ))}

                  <a href="#contact" className="btn btn-primary mt-8" aria-label="Get a free quote">Get a free quote</a>
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header