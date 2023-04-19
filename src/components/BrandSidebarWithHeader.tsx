import { useState } from 'react'
import { Menu, Tab, Transition } from '@headlessui/react'
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
    XMarkIcon 
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
        <div className="relative bg-white">
            <div className="grid grid-cols-[300px_auto] mx-auto max-w-screen-2xl h-[800px]">
                {/* side panel */}
                <Tab.Group as="aside" className="relative h-full max-h-screen px-4 pt-4 pb-20 overflow-y-auto text-gray-300 bg-blue-600 gap-y-1 overscroll-contain">
                    <div aria-label="company_icon" className="w-10 h-10 mb-8 ml-1 bg-white rounded-full" />
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
                    <button className="fixed bottom-0 flex items-center px-1 py-8 pb-6 mt-24 bg-gradient-to-t from-blue-600 via-blue-600 hover:text-white">
                        <Cog6ToothIcon className="w-6 h-6" />
                        <span>
                            Settings
                        </span>
                    </button>
                </Tab.Group>
                {/* main content */}
                <main className="grid w-full text-gray-400 grid-rows-[auto_1fr]">
                    <div className="relative z-10 flex items-center px-8 py-3 border-b border-gray-200 gap-x-4 drop-shadow-sm">
                        <div className="relative flex items-center flex-1 focus-within:text-gray-800">
                            <MagnifyingGlassIcon className="w-5 h-5 pointer-events-none stroke-2 " />
                            <input type="text" value={searchBarValue} onChange={(e) => setSearchBarValue(e.target.value)} placeholder="Search..." className="w-full py-3 pl-10 text-sm bg-transparent rounded-md -ml-7 peer/search" />
                            <div className="absolute right-6 peer-placeholder-shown/search:opacity-0 peer-placeholder-shown/search:pointer-events-none" onMouseDown={(e)=>e.preventDefault()} onClick={(e) => setSearchBarValue("")}>
                                <XMarkIcon className="w-4 h-4 stroke-2" />
                            </div>
                        </div>
                        <button className="grid w-8 h-8 border-2 border-transparent rounded-full place-items-center focus:text-blue-600 hover:text-blue-600 focus:border-blue-600">
                            <BellIcon className="w-6 h-6" />
                        </button>
                        <Menu as="div" className="relative pl-6 pr-1 text-sm border-l-2">
                            <Menu.Button className="flex items-center -my-1 gap-x-3 group">
                                <UserIcon className="w-8 h-8 p-1 text-gray-600 bg-gray-200 border-2 border-transparent rounded-full " />
                                <span className="font-semibold text-gray-900 whitespace-nowrap">
                                    John Doe
                                </span>
                                <ChevronDownIcon className="w-4 h-4 scale-x-95 stroke-2 group-aria-expanded:text-gray-800" />
                            </Menu.Button>
                            <Transition
                                as="div"
                                className="absolute top-[150%] -right-1"
                                enter="transition ease-out duration-100 origin-top-right"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75 origin-top-right"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items as="div" className="w-48 py-1 overflow-hidden text-gray-900 bg-white rounded-lg drop-shadow">
                                    {["Your Profile", "Settings", "Sign out"].map((page, index) => (
                                        <Menu.Item>
                                            <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                                                {page}
                                            </button>
                                        </Menu.Item>
                                    ))}
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                    <div className="relative p-8">
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
                    </div>
                </main>
            </div>
        </div>
    )
}
