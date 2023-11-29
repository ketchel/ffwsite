import React from 'react'
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Show } from '@/components/show';

export function Shows() {
    return (
        <>
            <Header />
            <section className="p-4 lg:p-8 bg-gray-100 text-gray-800">
                <div className="container mx-auto space-y-12">
                    <Show
                        date={new Date('January 12, 2024')}
                        venueName="The Horseshoe Tavern"
                        ticketURL='https://www.showclix.com/event/percocet-blondjan12'
                        isSoldOut={false}
                        />
                    <Show 
                        date={new Date('November 10, 2023')}
                        venueName="Drums N Flats"
                        ticketURL="https://singleapp.com/widgets/egifts/serveEGifts.php?id=20289&lang=en&mode=2&cache=1697815564&sa-web-page=live-music&render_full_page=1"
                        isSoldOut={true}
                        />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Shows;