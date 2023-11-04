import React from 'react';

export function MeetTheBand() {
    const memberData = [
        { name: "Grant", instrument: "Lead Vocals" },
        { name: "Kenny", instrument: "Keys" },
        { name: "Liam", instrument: "Guitar" },
        { name: "Finn", instrument: "Drums" },
        { name: "Paddy", instrument: "Guitar" },
        { name: "Ethan", instrument: "Bass" },
      ];
      
      const memberElements = memberData.map((member, index) => (
        <div key={index} className="flex space-x-6">
            <img
                alt={member.name}
                className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm bg-gray-500"
                src={`meet the band/${member.name}.jpg`}
            />
            <div className="flex flex-col">
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.instrument}</p>
                <div className="flex mt-2 space-x-2">
                    <p style={{color: '#F3F4F6'}}>________________</p>
                </div>
            </div>
        </div>
      ));
      
    return (
        <section className="py-6 bg-gray-100 text-gray-800">
            <div className="container p-3 mx-auto space-y-16 sm:p-10">
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold leadi sm:text-5xl">Meet the Band</h3>
                </div>
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                    { memberElements }
                </div>
            </div>
        </section>
    )
}