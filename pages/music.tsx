import React from 'react'
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export function Music() {
    return (
        <>
            <Header />
            <section className="flex items-center h-full p-16 bg-gray-50 text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-8xl  text-gray-400">
                        Coming soon
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Stay tuned, we&apos;ll have original music out soon</p>
                    <p className="mt-4 mb-8 text-gray-600">But for now, you&apos;ll just have to see us live.</p>
                    <Link rel="noopener noreferrer" href="/shows" className="px-8 py-3 font-semibold rounded bg-indigo-600 text-gray-50">Go to Shows</Link>
                </div>
            </div>
        </section>
            <Footer />
        </>
    )
}

export default Music;