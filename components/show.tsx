

export function Show({ date, venueName, logoSrc, description, ticketURL, is_sold_out }) {
    return (
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img src={ logoSrc } alt="Venue logo" className="h-80 bg-gray-500" />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                <span className="text-xs uppercase text-gray-600">{ date }</span>
                <h3 className="text-3xl font-bold">{ venueName }</h3>
                <p className="my-6 text-gray-600">{ description }</p>
                <a href={ticketURL}>
                    <button className={`${is_sold_out? 'sold-out ': ''}self-start px-10 py-3 text-lg font-medium rounded-3xl bg-indigo-600 text-gray-50`}>
                        { is_sold_out? "Sold Out!": "Buy Tickets"}
                    </button>
                </a>
            </div>
        </div>
    )
}