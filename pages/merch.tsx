import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

function Merch() {
    return (
        <>
            <Header />
            <section className="py-6 bg-gray-100 text-gray-900">
                <div className="container mx-auto flex flex-col items-center justify-center p-0 md:pl-5 md:pb-4 lg:space-y-10 lg:flex-row lg:justify-between">
                    <h1 className="text-3xl font-semibold leadi text-center lg:text-left">
                        Merch Store Coming {new Date().getFullYear() + 1}
                    </h1>
                </div>
                <div className="container mx-auto flex flex-col items-center justify-center p-0 md:pl-5 md:pb-2 lg:space-y-10 lg:flex-row lg:justify-between">
                        <p>Here are some fun pictures in the meantime</p>
                </div>
                <section className="py-6 bg-gray-100 text-gray-900">
                    <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                        <Image src="https://source.unsplash.com/random/301x301/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square" />
                        <Image alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?0" />
                        <Image alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1" />
                        <Image alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="merch/Everyone.jpg" />
                        <Image alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="merch/paddy_and_horse.jpg" />
                    </div>
                </section>
            </section>
            <Footer />
        </>
    )
}

export default Merch;