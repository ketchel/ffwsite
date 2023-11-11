import React from 'react'
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Show } from '@/components/show';

export function Shows() {
    const drumsDesc = "Join us on November 10 for a remarkable night of music at Drums N Flats as the versatile band 'Friends From Work' takes the stage. This concert is a musical journey through the decades, featuring covers and a sprinkle of original tunes, spanning from the 1950s to the 2010s. Drums N Flats, an iconic music and dining venue, sets the stage for an unforgettable experience. The band's seamless transitions between eras will have you grooving to hits from the '50s all the way to the 2010s, with a mix of covers and a few surprises in the form of their original compositions. Get ready to dance, sing, and relive the timeless melodies that have shaped generations, all in one unforgettable night with Friends From Work at Drums N Flats!";
    return (
        <>
            <Header />
            <section className="p-4 lg:p-8 bg-gray-100 text-gray-800">
                <div className="container mx-auto space-y-12">
                    <Show 
                        date={"November 10, 2023"}
                        venueName={"Drums N Flats (SOLD OUT) Tickets available at door"}
                        logoSrc="/venues/drums n flats logo.jpg"
                        description={ drumsDesc }
                        ticketURL={"https://singleapp.com/widgets/egifts/serveEGifts.php?id=20289&lang=en&mode=2&cache=1697815564&sa-web-page=live-music&render_full_page=1"}
                        is_sold_out={true}
                        />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Shows;