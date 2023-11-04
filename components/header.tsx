import React, { useEffect, useState } from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaTiktok
  } from "react-icons/fa";

export function Header({ scrollY = 100 }) {
    const [isSticky, setIsSticky] = useState(false);

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
    }, []);

    const page_names = ['Home', 'Shows', 'Music'];//, 'Merch'];
    const li_pages = page_names.map(page_name =>
        <li key={page_name} className={`flex nav-button ${isSticky? 'sticky': ''}`}>
            <a rel="noopener noreferrer" href={`/${page_name !== 'Home'? page_name.toLowerCase(): ''}`} className="flex items-center px-4 -mb-1 border-b-2 border-transparent">{ page_name }</a>
        </li>);

    const socialStyle = { color: isSticky? 'white': 'black'}

    return (
        <header className={`p-4 bg-gray-100 text-gray-800 header ${isSticky ? 'sticky' : ''}`}>
            <div className="container flex justify-between h-16 mx-auto">
                <a rel=".." href="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <span className='logo'>
                        <img src={isSticky? 'logos/dark_logo.jpg': 'logos/light_logo.jpeg'} alt="Logo"></img>
                    </span>
                </a>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    { li_pages }
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <span className='logo'>
                        <a href="https://www.instagram.com/ffw.band" target="_blank" rel="noreferrer">
                            <FaInstagram style={socialStyle} />
                        </a>
                    </span>
                    <span className='logo'>
                        <a href="https://www.tiktok.com/@friendsfromworkband" target="_blank" rel="noreferrer">
                            <FaTiktok  style={socialStyle} />
                        </a>
                    </span>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}