import React from "react";
import NavBar from "../NavBar/navBar";

export default function Dashboard() {

    const cards = [
        {
            id: 1,
            title: "Total Users",
            number: 50,
        },
        {
            id: 2,
            title: "Total Articles",
            number: 15,
        },
        {
            id: 3,
            title: "Total Forms Submitted",
            number: 8,
        },
    ];

    return (
        <>
            <NavBar />
            <div className="min-h-screen ml-60 bg-gray-100 px-8 py-5">
                <h1 className="font-bold text-3xl my-6">Dashboard</h1>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {cards.map(card => (
                        <div key={card.id} className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-md">{card.title}</h3>
                            <p className="text-3xl font-semibold mt-3">{card.number}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
