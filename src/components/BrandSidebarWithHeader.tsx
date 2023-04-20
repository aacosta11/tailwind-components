import { useState } from 'react'
import { Menu, Tab, Popover, Transition } from '@headlessui/react'
import {
    HomeIcon,
    UsersIcon,
    FolderIcon,
    CalendarIcon,
    DocumentDuplicateIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    MagnifyingGlassIcon,
    BellIcon,
    UserIcon,
    ChevronDownIcon,
    XMarkIcon,
    Bars3Icon
} from '@heroicons/react/24/outline'

const TABS: { name: string, icon: any }[] = [
    { name: "Dashboard", icon: HomeIcon },
    { name: "Team", icon: UsersIcon },
    { name: "Projects", icon: FolderIcon },
    { name: "Calendar", icon: CalendarIcon },
    { name: "Documents", icon: DocumentDuplicateIcon },
    { name: "Reports", icon: ChartPieIcon }
]
const DEMO_TEAMS = ["Team A", "Team B", "Team C"]

export default function BrandSidebarWithHeader() {
    const [searchBarValue, setSearchBarValue] = useState<string>("");
    return (
        <div className="relative bg-white h-[70vh] overflow-y-scroll overscroll-contain">
            <div className="grid lg:grid-cols-[auto_1fr] grid-rows-[auto_1fr] mx-auto">
                {/* side panel */}
                <aside className="sticky top-0 max-h-[70vh] text-gray-300 row-span-full lg:block hidden">
                    <div className="w-64 max-h-full px-4 pb-24 overflow-y-auto bg-blue-600 overscroll-contain">
                        <Tab.Group>
                            <div aria-label="company_icon" className="w-10 h-10 mt-4 mb-8 ml-1 bg-white rounded-full" />
                            <Tab.List className="grid text-sm gap-y-1">
                                {TABS.map((tab, index) => (
                                    <Tab key={index} onClick={(e) => e.preventDefault()} className="flex items-center w-full p-2 rounded-md gap-x-3 ui-selected:bg-blue-700 ui-selected:text-white ui-not-selected:hover:bg-blue-700/60 ui-not-selected:hover:text-white">
                                        <tab.icon className="w-6 h-6" />
                                        {tab.name}
                                    </Tab>
                                ))}
                            </Tab.List>
                            <p aria-label="section_header" className="px-1 mt-6 mb-2 text-xs">Your teams</p>
                            {DEMO_TEAMS.map((team, index) => (
                                <button key={index} className="flex items-center w-full px-3 py-2 -mx-2 text-left rounded-md gap-x-3 hover:bg-blue-700/60 hover:text-white">
                                    <div className="w-6 h-6 p-1 text-xs text-center bg-blue-500 border border-blue-400 rounded-lg">
                                        {team[0]}
                                    </div>
                                    <span className="text-sm">
                                        {team}
                                    </span>
                                </button>
                            ))}
                        </Tab.Group>
                    </div>
                    <div className="absolute bottom-0 left-0 pt-8 pb-2 pointer-events-none right-4 bg-gradient-to-t from-blue-600 via-blue-600">
                        <button className="flex items-center space-x-1.5 pointer-events-auto hover:text-white py-2 px-4">
                            <Cog6ToothIcon className="w-5 h-5" />
                            <span className="text-xs">
                                Settings
                            </span>
                        </button>
                    </div>
                </aside>

                <header className="relative z-10 text-gray-400">
                    <div className="flex items-center px-8 py-3 border-b border-gray-200 gap-x-4 drop-shadow-sm">
                        <div className="pr-4 border-r lg:hidden">
                            <Popover>
                                <Popover.Button className="p-1 -my-1 rounded-md ui-open:ring-2 ui-open:text-gray-800 ring-gray-800">
                                    <Bars3Icon className="w-6 h-6" />
                                </Popover.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Popover.Panel className="">
                                    </Popover.Panel>
                                </Transition>
                            </Popover>
                        </div>
                        <div aria-label="search bar" className="relative flex items-center flex-1 focus-within:text-gray-800">
                            <MagnifyingGlassIcon className="w-5 h-5 pointer-events-none stroke-2" />
                            <input type="text" value={searchBarValue} onChange={(e) => setSearchBarValue(e.target.value)} placeholder="Search..." className="w-full py-3 pl-10 bg-transparent rounded-md lg:text-sm -ml-7 peer/search" />
                            <div className="absolute right-6 peer-placeholder-shown/search:opacity-0 peer-placeholder-shown/search:pointer-events-none" onMouseDown={(e) => e.preventDefault()} onClick={(e) => setSearchBarValue("")}>
                                <XMarkIcon className="w-4 h-4 stroke-2" />
                            </div>
                        </div>
                        <button className="grid w-8 h-8 rounded-full place-items-center focus:ring-2 ring-gray-800 focus:text-gray-600">
                            <BellIcon className="w-8 h-8 p-1" />
                        </button>
                        <Menu as="div" className="relative pr-1 text-sm lg:pl-6 lg:border-l-2">
                            <Menu.Button className="flex items-center -my-1 gap-x-3 group">
                                <UserIcon className="w-8 h-8 p-1 bg-gray-200 rounded-full stroke-gray-600 ui-open:ring-2 ring-gray-800 lg:ring-0" />
                                <div className="hidden lg:contents">
                                    <span className="font-semibold text-gray-900 whitespace-nowrap">
                                        John Doe
                                    </span>
                                    <ChevronDownIcon className="w-4 h-4 scale-x-95 stroke-2 group-aria-expanded:text-gray-800" />
                                </div>
                            </Menu.Button>
                            <Transition
                                as="div"
                                className="absolute top-10 -right-1"
                                enter="transition ease-out duration-100 origin-top-right"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75 origin-top-right"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items as="div" className="w-48 py-1 overflow-hidden text-gray-900 bg-white rounded-lg drop-shadow">
                                    {["Your Profile", "Settings", "Sign out"].map((page, index) => (
                                        <Menu.Item key={index}>
                                            <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                                                {page}
                                            </button>
                                        </Menu.Item>
                                    ))}
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </header>

                {/* main content */}
                <main className="relative py-12 lg:py-8 px-8 h-[850px]">
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
