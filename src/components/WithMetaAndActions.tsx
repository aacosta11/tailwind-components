import React from 'react'
import { Menu, Transition } from '@headlessui/react'

import {
    BriefcaseIcon,
    MapPinIcon,
    CurrencyDollarIcon,
    CalendarIcon,
} from '@heroicons/react/24/solid'

import {
    PencilIcon,
    LinkIcon,
    CheckIcon,
    ChevronDownIcon
} from '@heroicons/react/20/solid'

const META = [
    { icon: BriefcaseIcon, label: 'Full-Time' },
    { icon: MapPinIcon, label: 'Remote' },
    { icon: CurrencyDollarIcon, label: '$120k - $140k' },
    { icon: CalendarIcon, label: 'Posted 2 days ago' },
]

const ACTIONS = [
    { icon: PencilIcon, label: 'Edit' },
    { icon: LinkIcon, label: 'View' },
]

export default function WithMetaAndActions() {

    return (
        <div className="pb-40 bg-white">
            <header className="flex flex-col justify-between p-6 mx-auto lg:items-center lg:flex-row text-gray-950 max-w-screen-2xl gap-y-5">
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold sm:tracking-tight sm:text-3xl">
                        Back End Developer
                    </h1>
                    <ul className="flex flex-col text-sm gap-x-6 gap-y-2 sm:flex-row">
                        {META.map(({ icon: Icon, label }, i) => (
                            <li key={i} className="flex items-center gap-x-1.5">
                                <Icon className="w-5 h-5 text-gray-400" />
                                <span className="text-gray-500">{label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative flex text-sm font-semibold gap-x-3 w-fit">
                    <div className="hidden sm:contents">
                        {ACTIONS.map(({ icon: Icon, label }, i) => (
                            <button key={i} className="inline-flex items-center px-3 py-2 rounded-md hover:bg-slate-50 ring-1 ring-gray-300">
                                <Icon className="w-5 h-5 mr-1.5 text-gray-400" />
                                <span>{label}</span>
                            </button>
                        ))}
                    </div>
                    <button className="flex items-center px-2.5 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-500">
                        <CheckIcon className="w-5 h-5 mr-1.5" />
                        <span>Publish</span>
                    </button>
                    <Menu as="div" className="sm:hidden">
                        <Menu.Button className="flex items-center px-3 py-2 rounded-md ring-1 ring-gray-300 hover:ring-gray-400">
                            <span>More</span>
                            <ChevronDownIcon className="w-5 h-5 text-gray-400 ml-1.5" />
                        </Menu.Button>
                        <Transition
                            as={React.Fragment}
                            enter="transition transform ease-out duration-100 origin-top-right"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="transition transform ease-in duration-75 origin-top-right"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute grid w-full bg-white rounded-md shadow-lg -right-1 top-[125%] ring-1 ring-gray-200 py-1 font-normal">
                                {ACTIONS.map(({ label }, i) => (
                                    <Menu.Item key={i} as="div" className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                                        <span>{label}</span>
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </header>
        </div>
    )
}