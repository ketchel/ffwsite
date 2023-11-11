import React from 'react';
import Image from 'next/image';
import { MeetTheBand } from '@/components/meet the band';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AboutUs } from '@/components/about us';

export function BandPage() {
  return (
    <>
      {/* <Image src="logos/logo.svg" width={500} height={500} alt="Logo" className='center-big-logo' /> */}
      <Header />
      <AboutUs />
      <MeetTheBand />
      <Footer />
    </>
  );
};

export default BandPage;