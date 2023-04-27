import { Fragment, useState } from 'react'
import { Tab, Popover, Transition } from '@headlessui/react'

import {
    HomeIcon,
    UsersIcon,
    FolderIcon,
    CalendarIcon,
    DocumentDuplicateIcon,
    ChartPieIcon,
    XMarkIcon,
    UserIcon,
    Bars3Icon,
} from '@heroicons/react/24/outline'

const TABS = [
    { name: 'Dashboard', href: '#', icon: HomeIcon },
    { name: 'Team', href: '#', icon: UsersIcon },
    { name: 'Projects', href: '#', icon: FolderIcon },
    { name: 'Calendar', href: '#', icon: CalendarIcon },
    { name: 'Documents', href: '#', icon: DocumentDuplicateIcon },
    { name: 'Reports', href: '#', icon: ChartPieIcon },
]
const TEAMS = ['Engineering', 'Human Resources', 'Customer Success']

export default function LightSidebar() {
    const [currentPage, setCurrentPage] = useState('Dashboard');

    return (
        <div className="relative text-gray-900 bg-white h-[700px]">
            <div className="grid lg:grid-cols-[auto_1fr] grid-rows-[auto_1fr] lg:grid-rows-1 h-full">
                {/* [desktop] sidebar */}
                <Tab.Group as="nav" className="flex-col hidden p-4 overflow-y-auto text-sm border-r gap-y-6 lg:flex w-72 overscroll-contain">
                    <div aria-label="company_icon" className="w-8 h-8 m-2 bg-blue-600 rounded-full shrink-0" />
                    <Tab.List className="space-y-1">
                        {TABS.map((tab) => (
                            <Tab key={tab.name} onClick={(e) => e.preventDefault()} className="flex items-center w-full p-2 font-medium rounded-md gap-x-3 outline-0 ui-selected:bg-slate-100/60 ui-not-selected:hover:bg-slate-100/60 group">
                                <tab.icon className="w-6 h-6 group-aria-selected:stroke-blue-600 stroke-slate-400 group-hover:stroke-blue-600" />
                                <span className=" group-hover:text-blue-600 group-aria-selected:text-blue-600">
                                    {tab.name}
                                </span>
                            </Tab>
                        ))}
                    </Tab.List>
                    <div className="space-y-0.5 font-medium">
                        <p aria-label="section_header" className="p-2 mb-1 text-xs text-slate-500">
                            Your teams
                        </p>
                        {TEAMS.map((team, i) => (
                            <button key={`${i}-${team}`} className="flex items-center w-full p-2 text-left rounded-md gap-x-3 group hover:text-blue-600 hover:bg-slate-100/60">
                                <span className="grid w-6 h-6 text-xs border rounded-lg text-slate-400 place-items-center border-slate-300 group-hover:border-blue-600 group-hover:text-blue-600">
                                    {team[0]}
                                </span>
                                <span>
                                    {team}
                                </span>
                            </button>
                        ))}
                    </div>
                    <button aria-label="user_action_button" className="flex items-center px-6 py-4 mt-auto -mx-4 -mb-4 gap-x-3 hover:bg-slate-100/60">
                        <UserIcon className="p-1 bg-gray-100 rounded-full h-7 w-7" />
                        <span className="font-semibold">
                            John Doe
                        </span>
                    </button>
                </Tab.Group>
                {/* [mobile] sliding sidebar */}
                <Popover className="flex items-center px-4 py-4 bg-white border-b border-gray-100 gap-x-6 lg:hidden sm:px-8">
                    <Popover.Button className="outline-0 ">
                        <Bars3Icon className="w-6 h-6 stroke-slate-800" />
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Popover.Overlay className="absolute inset-0 z-10 bg-slate-950/70" />
                    </Transition>
                    <Transition
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <Popover.Panel className="absolute inset-y-0 left-0 z-10 w-full max-w-xs text-sm bg-white drop-shadow-xl">
                            <Tab.Group as="div" className="flex flex-col h-full p-4 overflow-y-auto gap-y-6 overscroll-contain">
                                <div aria-label="company_icon" className="w-8 h-8 m-2 bg-blue-600 rounded-full shrink-0" />
                                <Tab.List className="space-y-1">
                                    {TABS.map((tab) => (
                                        <Tab key={tab.name} onClick={(e) => e.preventDefault()} className="flex items-center w-full p-2 font-medium rounded-md gap-x-3 outline-0 ui-selected:bg-slate-100/60 ui-not-selected:hover:bg-slate-100/60 group">
                                            <tab.icon className="w-6 h-6 group-aria-selected:stroke-blue-600 stroke-slate-400 group-hover:stroke-blue-600" />
                                            <span className=" group-hover:text-blue-600 group-aria-selected:text-blue-600">
                                                {tab.name}
                                            </span>
                                        </Tab>
                                    ))}
                                </Tab.List>
                                <div className="space-y-0.5 font-medium">
                                    <p className="p-2 mb-1 text-xs text-slate-500">
                                        Your teams
                                    </p>
                                    {TEAMS.map((team, i) => (
                                        <button key={`${i}-${team}`} className="flex items-center w-full p-2 text-left rounded-md gap-x-3 group hover:text-blue-600 hover:bg-slate-100/60">
                                            <span className="grid w-6 h-6 text-xs border rounded-lg text-slate-400 place-items-center border-slate-300 group-hover:border-blue-600 group-hover:text-blue-600">
                                                {team[0]}
                                            </span>
                                            <span>
                                                {team}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </Tab.Group>
                            <Popover.Button className="absolute z-10 p-3 ml-1 top-1 left-full">
                                <XMarkIcon className="w-6 h-6 stroke-white" />
                            </Popover.Button>
                        </Popover.Panel>
                    </Transition>
                    <h1 aria-label="current_page" className="text-sm font-semibold">
                        {currentPage}
                    </h1>
                    <button aria-label="user_action_button" className="ml-auto">
                        <UserIcon className="p-1 rounded-full w-7 h-7 bg-slate-200" />
                    </button>
                </Popover>
                {/* main content */}
                <main className="relative px-4 py-10 sm:px-8">
                    <div className="h-full overflow-hidden border border-gray-400 border-dashed rounded-xl">
                        <svg width="100%" height="100%">
                            <defs>
                                <pattern id="placeholder" x="0" y="0" width="16" height="32" patternUnits="userSpaceOnUse">
                                    <path fill="rgb(242 243 245)" fillRule="evenodd" d="M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z" />
                                </pattern>
                            </defs>
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#placeholder)"></rect>
                        </svg>
                    </div>
                </main>
            </div>
        </div>
    )
}