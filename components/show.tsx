import Image from "next/image";

interface ShowInfo{
    date:Date,
    venueName:string,
    ticketURL:string,
    isSoldOut:boolean
}

export function Show({ date, venueName, ticketURL, isSoldOut }: ShowInfo) {
    const description = `Join us on ${date.toLocaleString("en-US", { weekday: "long", month: "long", day:"numeric" })} for a remarkable night of music at ${venueName} as the versatile band 'Friends From Work' takes the stage. This concert is a musical journey through the decades, featuring covers and a sprinkle of original tunes, spanning from the 1950s to the 2010s. ${venueName}, an iconic music and dining venue, sets the stage for an unforgettable experience. The band's seamless transitions between eras will have you grooving to hits from the '50s all the way to the 2010s, with a mix of covers and a few surprises in the form of their original compositions. Get ready to dance, sing, and relive the timeless melodies that have shaped generations, all in one unforgettable night with Friends From Work at ${venueName}!`;
    const isShowOver = Date.now() > date.getTime();
    return (
        <div className={`flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row ${ isShowOver? 'opacity-80': ''}`}>
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                <span className="text-xs uppercase text-gray-600">
                    { date.toLocaleString("en-US", { weekday: "long", year: "numeric", month: "long", day:"numeric" }) }
                </span>
                <h3 className="text-3xl font-bold">{ venueName }</h3>
                <p className="my-6 text-gray-600">{ isShowOver? "This show already happened, check out one of our upcoming shows above!": description }</p>
                <a className="w-48" href={ticketURL}>
                    <button className={`${isSoldOut || isShowOver? 'opacity-50 cursor-default': ''} self-start px-10 py-3 text-lg font-medium rounded-3xl bg-indigo-600 text-gray-50`}>
                        { isShowOver? "Show's Over!": isSoldOut? "Sold Out!": "Buy Tickets"}
                    </button>
                </a>
            </div>
        </div>
    )
}