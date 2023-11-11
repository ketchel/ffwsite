import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import {
    FaInstagram,
    FaTiktok
  } from "react-icons/fa";

export function Header({ scrollY = 100 }) {
    const [isSticky, setIsSticky] = useState(false);

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

    const page_names = ['Home', 'Shows', 'Music'];//, 'Merch'];
    const li_pages = page_names.map(page_name =>{
        const page_dir = `/${page_name !== 'Home'? page_name.toLowerCase(): ""}`;
        const isActive = router.asPath === page_dir;
        return (
            <div key={page_name} className="flex flex-col">
                <li key={page_name} className={`nav-button ${isSticky? 'sticky': ''}`}>
                    <Link rel="noopener noreferrer" href={page_dir} className="flex items-center px-4 -mb-1 border-b-2 border-transparent">{ page_name }</Link>
                </li>
                {isActive &&
                    <Image src={"/logos/tie.png"} width={20} height={20} alt='' color='pink' className="tie"></Image>
                }           
            </div>
        )
    }
        );

    const socialStyle = { color: isSticky? 'white': 'black'}

    return (
        <header className={`p-4 bg-gray-100 text-gray-800 header ${isSticky ? 'sticky' : ''}`}>
            <div className="container flex justify-between h-20 mx-auto">
                <Link rel="/" href="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <span className='logo'>
                        <Image width={100} height={100} src='/logos/logo.svg' alt="Logo"></Image>
                    </span>
                </Link>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    { li_pages }
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <span className='logo'>
                        <Link href="https://www.instagram.com/ffw.band" target="_blank" rel="noreferrer">
                            <FaInstagram style={socialStyle} />
                        </Link>
                    </span>
                    <span className='logo'>
                        <Link href="https://www.tiktok.com/@friendsfromworkband" target="_blank" rel="noreferrer">
                            <FaTiktok  style={socialStyle} />
                        </Link>
                    </span>
                </div>
            </div>
        </header>
    )
}