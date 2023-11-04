import React from 'react';
import { MeetTheBand } from '@/components/meet the band';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AboutUs } from '@/components/about us';

export function BandPage() {
  return (
    <>
      {/* <img src="logos/ai_logo.png" alt="Logo" className='center-big-logo' /> */}
      <Header />
      <AboutUs />
      <MeetTheBand />
      <Footer />
    </>
  );
};

export default BandPage;