import {
    EnvelopeIcon,
    PhoneIcon,
} from '@heroicons/react/20/solid'

export default function WithBannerImage() {
    return (
        <div className="text-gray-900 bg-white ">
            <img src="./mountains.png" alt="" className="object-cover object-bottom w-full h-32 bg-gray-100 lg:h-48" />
            <header className="flex flex-col max-w-6xl p-6 mx-auto sm:flex-row gap-y-6">
                <div className="grid items-center flex-1 gap-4 md:grid-cols-[auto_1fr]">
                    <div className="relative w-24 h-10 -mt-4 sm:w-36 sm:mt-0">
                        <img src="./headshot-1.png" alt="headshot" className="absolute inset-x-0 bottom-0 w-full border-4 border-white rounded-full aspect-square border-opacity-80" />
                    </div>
                    <h1 className="text-2xl font-bold whitespace-nowrap">John Doe</h1>
                </div>
                <div className="flex items-start justify-end flex-1 gap-3.5 flex-col sm:flex-row">
                    {[{ name: "Message", icon: EnvelopeIcon }, { name: "Call", icon: PhoneIcon }].map(({ name, icon: Icon }, i) => (
                        <button key={i} className="flex justify-center w-full sm:w-fit items-center p-2 rounded-md gap-x-1.5 ring-1 ring-gray-300 hover:bg-slate-50/90">
                            <Icon className="w-5 h-5 text-gray-400" />
                            <span className="text-sm font-semibold text-gray-800">{name}</span>
                        </button>
                    ))}
                </div>
            </header>
        </div>
    )
}