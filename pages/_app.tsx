import type { AppProps } from "next/app";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Custom404 from "./404";

// CSS
import '../styles/globals.css'
import '../styles/header.css'

// import { Session } from "next-auth";
// import { SessionProvider } from "next-auth/react";

export default function MyApp({
    Component,
    pageProps,
  }: AppProps<{
  }>) {
    // const router = useRouter();
    // const [renderHeaderAndFooter, setRenderHeaderAndFooter] = useState(true)

    // useEffect(() => {
    //   // Check if the page is in the process of server-side rendering (isFallback) or if it's a 404 error
    //   if (router.route === '/404') {
    //     setRenderHeaderAndFooter(false)
    //   }
    // }, [router.isFallback, router.asPath]);

    return (
      <div className="bg-white">
        <Component {...pageProps} />
      </div>
    );
  }