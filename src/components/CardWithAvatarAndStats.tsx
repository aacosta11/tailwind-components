import React from 'react';

const STATS : { name: string, value: number }[] = [
    { name: "Vacation days left", value: 12 },
    { name: "Sick days left", value: 4 },
    { name: "Personal days left", value: 2 },
]

export default function CardWithAvatarAndStats() {
    return (
        <div className="px-4 py-8 bg-gray-200 sm:px-6 lg:px-8">
            <div aria-label="card_with_avatar_and_stats" className="max-w-6xl mx-auto overflow-hidden bg-white rounded-lg shadow text-gray-950">
                <div className="grid place-items-center gap-4 sm:justify-items-start text-center sm:text-left p-6 sm:grid-cols-[auto_1fr_auto]">
                    <img src="./headshot-2.png" alt="headshot-2.png" className="w-16 h-16 bg-gray-100 rounded-full" />
                    <div className="flex flex-col flex-1 text-sm font-medium text-gray-600">
                        <span>Welcome back,</span>
                        <span aria-label="user_name" className="text-xl font-bold tracking-wide text-gray-900">Jon Wick</span>
                        <span aria-label="user_title">Software Developer</span>
                    </div>
                    <button className="py-2 px-2.5 text-sm font-semibold border text-gray-700 border-gray-300 rounded-md h-fit shadow-sm hover:bg-gray-50">View profile</button>
                </div>
                <ul className="grid border-t divide-x divide-y sm:divide-y-0 sm:grid-cols-3 bg-gray-100/50">
                    {STATS.map(({ name, value }, index) => (
                        <li key={index} className="flex justify-center items-center gap-x-1.5 py-4 w-full text-sm">
                            <span className="font-semibold text-gray-700">{value}</span>
                            <span className="font-medium text-gray-600">{name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}