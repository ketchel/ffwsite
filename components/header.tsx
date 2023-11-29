import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import {
    FaInstagram,
    FaTiktok
  } from "react-icons/fa";
import SlidingPane from 'react-sliding-pane';
import "react-sliding-pane/dist/react-sliding-pane.css";

export function Header({ scrollY = 100 }) {
    const [isSticky, setIsSticky] = useState(false);

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > scrollY) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrollY]);

    const socialStyle = { color: isSticky && !isMobileMenuOpen ? 'white' : 'black' };
    const socialMediaLinks = [
        { href: "https://www.instagram.com/ffw.band", icon: <FaInstagram style={socialStyle} /> },
        { href: "https://www.tiktok.com/@friendsfromworkband", icon: <FaTiktok style={socialStyle} /> }
    ];
    const socials = (
      <div className=''>
        {socialMediaLinks.map((link, index) => (
          <span key={index} className={`logo align-middle justify-center inline-flex`}>
              <Link href={link.href} target="_blank" rel="noreferrer">
                  {link.icon}
              </Link>
          </span>))
        }
        </div>)

    const page_names = ['Home', 'Shows', 'Music'];//, 'Merch];
    const li_pages = page_names.map(page_name => {
        const page_dir = `/${page_name !== 'Home' ? page_name.toLowerCase() : ""}`;
        const isActive = router.asPath === page_dir;

        return (
            <div key={page_name} className="flex flex-col list-none">
            <li key={page_name} className={`nav-button ${isSticky  && !isMobileMenuOpen ? 'sticky' : ''} ${isMobileMenuOpen? 'ml-14': ''}`}>
                <Link rel="noopener noreferrer" href={page_dir} className="flex items-center px-4 -mb-1 border-b-2 border-transparent">{page_name}</Link>
            </li>
            {isActive &&
                <Image src={"/logos/tie.png"} width={27} height={27} alt='' color='pink' className={`tie pl-2 ${isMobileMenuOpen? 'ml-20': 'ml-5'}`}></Image>
            }
            </div>
        );
    });

    return (
    <header id="navbar" className={`p-4 bg-gray-100 text-gray-800 header z-10 ${isSticky ? 'sticky' : ''}`}>
        <div className="container items-center flex justify-between h-20 mx-auto">
        <Link rel="/" href="/" aria-label="Back to homepage" className="flex items-center p-2">
            <Image width={100} height={100} src='/logos/logo.svg' alt="Logo"></Image>
        </Link>
        {/* Mobile manu hamburger icon */}
        <div className="lg:hidden flex md:order-2 space-x-3 md:space-x-0 items-center justify-center">
          <button
            type="button"
            className="flex items-center p-3 w-12 h-12 text-sm text-gray-500 rounded-lg hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-amber-400"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          {/* Mobile menu */}
        <SlidingPane
            className='mobile-menu'
            overlayClassName="mobile-menu-overlay z-20"
            title={socials}
            isOpen={isMobileMenuOpen}
            onRequestClose={() => {setMobileMenuOpen(false);}}
        >
            <ul className={`${isMobileMenuOpen? '': 'hidden'}`}>
                {li_pages}
            </ul>
        </SlidingPane>
        </div>
        <ul className="items-stretch hidden space-x-3 lg:flex">
            {li_pages}
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex space-x-1">
            {socials}
        </div>
        </div>
    </header>
    );
}